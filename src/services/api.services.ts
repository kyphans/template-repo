/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { API_URL, API_VERSION, HTTP_STATUS_CODE_SUCCESS } from '@/constant';
import { HttpError } from '@/lib/customErrors';
import { takeValueFromLocalStorage } from '@/lib/helpers/localStorageHelper';
import { ResponseBase } from '@/types/base.type';

const DEFAULT_BASE_URL = API_URL;

type Config = {
  baseURL?: string;
  isRequiredAuth: boolean;
};

/**
 * Returns a set of headers for making a JSON API request.
 * @returns {HeadersInit} A set of headers for JSON content.
 * @example:
 * Content-Type,
 * Accept
 * Authorization,
 * Content-Language,
 * Timezone
 */
export const getFullHeader = (isRequiredAuth: boolean) => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: isRequiredAuth ? takeValueFromLocalStorage('auth').accessToken : undefined
  };

  return headers;
};

let isRefreshTokenBeingHandled = false;
let refreshAttemptCount = 0;

const handleCheckRefreshToken = async <T = any>(data: ResponseBase<T>) => {
  if (isRefreshTokenBeingHandled) return data;
  isRefreshTokenBeingHandled = true;
  const baseURL = DEFAULT_BASE_URL;
  const { key, refreshToken } = takeValueFromLocalStorage('auth');
  if (!key || !refreshToken) {
    logoutUser();
    return;
  }
  try {
    const headers = getFullHeader(true);
    const encodedRefreshToken = encodeURIComponent(refreshToken); // encodedRefreshToken because of the api will call the encodedRefreshToken
    const response = await fetch(`${baseURL}/${API_VERSION}/auth/refresh-token?token=${encodedRefreshToken}`, {
      method: 'GET',
      headers: headers
    });
    const res = await response.json();
    const newAccessToken = res.data?.accessToken;
    if (res.message === 'Success' && res.statusCode === 200 && typeof window !== 'undefined') {
      const auth_data = key;
      localStorage.setItem(
        'auth',
        JSON.stringify({
          ...auth_data,
          accessToken: newAccessToken,
          refreshToken: refreshToken
        })
      );
      window.location.reload();
      refreshAttemptCount = 0;
    }
  } catch (error) {
    refreshAttemptCount++;
    if (refreshAttemptCount >= 2) {
      logoutUser();
    } else {
      // Re-throw the error if it's not the final attempt
      throw error;
    }
  } finally {
    isRefreshTokenBeingHandled = false;
  }
};

const logoutUser = () => {
  refreshAttemptCount = 0; // Reset the refresh attempt count
  if (typeof window !== 'undefined') {
    window.location.replace('/login');
    window.localStorage.removeItem('auth');
  }
};

/**
 * Makes a generic HTTP request with the specified URL, options, and configuration.
 *
 * @param {string} url - The URL to which the request will be made.
 * @param {RequestInit} options - Options for the fetch request.
 * @param {Config} config - (Optional) Configuration options for the request.
 * @returns {Promise<ResponseBase<T>>} A Promise resolving to the response data of type `ResponseBase<T>`.
 * @throws {Error} Throws an error if the request fails or if the response status code indicates failure.
 */
const makeRequest = async <T = any>(url: string, options: RequestInit, config?: Config): Promise<ResponseBase<T>> => {
  const { baseURL = DEFAULT_BASE_URL, isRequiredAuth = false } = config ?? {};
  const headers = getFullHeader(isRequiredAuth);

  try {
    const res = await fetch(`${baseURL}${url}`, {
      headers: headers,
      ...options
    });

    const data: ResponseBase<T> = await res.json();

    if (data.message === 'Unauthorized' && data.statusCode === 401) {
      // Handle Unauthorized
      handleCheckRefreshToken(data);
    }

    if (!HTTP_STATUS_CODE_SUCCESS.includes(data.statusCode)) {
      // throw new HttpError(data);
      console.error('Call API failed with status code !== 200', data);
      return data;
    }

    return data;
  } catch (error) {
    throw error;
  }
};

/**
 * Makes a GET request to the specified URL with optional configuration and request options.
 * @see [Fetch Documentation](https://nextjs.org/docs/app/api-reference/functions/fetch)
 *
 * @param {string} url - The URL to which the GET request will be made.
 * @param {RequestInit} options - (Optional) Additional options for the fetch request. [RequestInit Documentation](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit)
 * @param {Config} config - (Optional) Additional configuration options for the request.
 * @returns {Promise<ResponseBase<T>>} A Promise resolving to the response data of type `ResponseBase<T>`.
 */
export const get = <T = any>(url: string, options?: RequestInit, config?: Config): Promise<ResponseBase<T>> =>
  makeRequest(url, { method: 'GET', ...options }, config);

/**
 * Makes a PUT request to the specified URL with the provided request body and optional configuration.
 *
 * @param {string} url - The URL to which the GET request will be made.
 * @param {D} body - The data to be sent as the request body. It will be converted to JSON string.
 * @param {RequestInit} options - (Optional) Additional options for the fetch request. [RequestInit Documentation](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit)
 * @param {Config} config - (Optional) Additional configuration options for the request.
 * @returns {Promise<ResponseBase<T>>} A Promise resolving to the response data of type `ResponseBase<T>`.
 */
export const put = <T = any, D = any>(
  url: string,
  body: D,
  options?: RequestInit,
  config?: Config
): Promise<ResponseBase<T>> => makeRequest(url, { method: 'PUT', body: JSON.stringify(body), ...options }, config);

/**
 * Makes a POST request to the specified URL with the provided request body and optional configuration.
 *
 * @param {string} url - The URL to which the GET request will be made.
 * @param {D} body - The data to be sent as the request body. It will be converted to JSON string.
 * @param {RequestInit} options - (Optional) Additional options for the fetch request. [RequestInit Documentation](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit)
 * @param {Config} config - (Optional) Additional configuration options for the request.
 * @returns {Promise<ResponseBase<T>>} A Promise resolving to the response data of type `ResponseBase<T>`.
 */
export const post = <T = any, D = any>(
  url: string,
  body?: D,
  options?: RequestInit,
  config?: Config
): Promise<ResponseBase<T>> => makeRequest(url, { method: 'POST', body: JSON.stringify(body), ...options }, config);

/**
 * Makes a DELETE request to the specified URL with optional configuration.
 *
 * @param {string} url - The URL to which the GET request will be made.
 * @param {RequestInit} options - (Optional) Additional options for the fetch request. [RequestInit Documentation](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit)
 * @param {Config} config - (Optional) Additional configuration options for the request.
 * @returns {Promise<ResponseBase<T>>} A Promise resolving to the response data of type `ResponseBase<T>`.
 */
export const remove = <T = any>(url: string, options?: RequestInit, config?: Config): Promise<ResponseBase<T>> =>
  makeRequest(url, { method: 'DELETE', ...options }, config);
