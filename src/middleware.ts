import createMiddleware from 'next-intl/middleware';
import { LOCALES } from './constant';

// Config middleware for next-intl: https://next-intl-docs.vercel.app/docs/routing/middleware

export default createMiddleware({
  locales: Object.values(LOCALES),
  defaultLocale: 'en',
  localePrefix: 'as-needed' // Don't use a locale prefix for the default locale: https://next-intl-docs.vercel.app/docs/routing/middleware#locale-prefix-as-needed
});

export const config = {
  matcher: [
    // Match only internationalized pathnames
    '/',
    '/(en|th|ko|ja)/:path*',

    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
