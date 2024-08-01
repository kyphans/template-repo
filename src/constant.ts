export const API_URL = process.env.API_URL;
export const API_VERSION = 'v1';
export const MAX_RETRIES = 3;
export const TIMEOUT = 5000;

export const CONFIG_DB = {
  APP_DB_RANGE: 'A2:E9',
  APP_URL: 'B2',
  APP_NAME: 'B3',
  APP_DESCRIPTION: 'B4',
  APP_LOGO: 'B5',
  APP_FAVICON: 'B6',
  APP_PRIMARY_COLOR_1: 'B7',
  APP_PRIMARY_COLOR_2: 'B8',

  APP_PHONE: 'E2',
  APP_EMAIL: 'E3',
  APP_SOCIAL_FACEBOOK: 'E4',
  APP_SOCIAL_INSTAGRAM: 'E5',
};

export const CONFIG_HOMEPAGE_SHEET = {
  HOMEPAGE_RANGE: 'A1:C22',
  SLOGAN: 'B4',
  DESCRIPTION: 'B5',
  BOOK_BTN: 'B6',

  CAROUSEL_LIST: 'B17:B22'
};

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
