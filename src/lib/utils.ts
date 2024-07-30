import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function checkIsNumberString(value: string) {
  return /^([0-9]*)$/.test(value);
}

/**
 * Converts a service name to a url parameter format.
 *
 * @param {string} serviceName - The name of the service.
 * @return {string} The service name in url parameter format.
 */
export const convertServiceNameToParam = (serviceName: string): string => {
  return serviceName.toLowerCase().replace(/ /g, '-');
};
