import { unstable_setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import '../../styles/globals.css';
import { LOCALES } from '@/constant';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

type RootLayoutProps = { children: React.ReactNode; params: { locale: string } };

export const metadata = {
  title: 'PetCare',
  description: 'PetCare Website'
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default function RootLayout(props: RootLayoutProps) {
  const messages = useMessages();
  const { children, params } = props;
  const { locale } = params;
  unstable_setRequestLocale(locale); // Static rendering for language on server side

  return (
    <html lang={locale}>
      <body id='root' suppressHydrationWarning={true}>
        <NextIntlClientProvider messages={messages}>
          <NavBar />
          <main className='bg-white min-h-[calc(100vh-80px-150px)] mt-20'>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
