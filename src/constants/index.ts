export const API_URL = '';
export const API_VERSION = 'v1';
export const MAX_RETRIES = 3;
export const TIMEOUT = 5000;

export const LOCALES = {
  en: 'en',
  ja: 'ja',
  ko: 'ko',
  th: 'th'
};
export const TIMEZONE = 'Asia/Ho_Chi_Minh';

export const HTTP_STATUS_CODE_SUCCESS = [
  200, // OK
  201, // CREATED
  202, // ACCEPTED
  203, // NON_AUTHORITATIVE_INFORMATION
  204, // NO_CONTENT
  205, // RESET_CONTENT
  206, // PARTIAL_CONTENT
  207, // MULTI-STATUS (WebDAV)
  208, // ALREADY_REPORTED (WebDAV)
  226 // IM USED (HTTP Delta encoding)
];