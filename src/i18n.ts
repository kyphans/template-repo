import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { LOCALES } from './constant';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!Object.values(LOCALES).includes(locale as any)) notFound();
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
