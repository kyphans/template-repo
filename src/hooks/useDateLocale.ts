import { useMemo } from 'react';
import { LOCALES } from '@/constant';
import { enUS } from 'date-fns/locale/en-US';
import { ja } from 'date-fns/locale/ja';
import { ko } from 'date-fns/locale/ko';
import { th } from 'date-fns/locale/th';

const localesMap = {
  [LOCALES.en]: enUS,
  [LOCALES.ja]: ja,
  [LOCALES.ko]: ko,
  [LOCALES.th]: th
};

/**
 * Return the date-fns locale to be used in Calendar or formatting Date with date-fns format
 * @param locale The locale string
 * @returns The date-fns Locale object
 */
const useDateLocale = (locale?: string) => {
  const dateLocale = useMemo(() => {
    return localesMap[locale || LOCALES.en];
  }, [locale]);

  return dateLocale;
};

export default useDateLocale;
