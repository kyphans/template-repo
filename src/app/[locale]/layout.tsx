import { unstable_setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import '../../styles/globals.css';
import { LOCALES } from '@/constant';
import Footer from '@/components/common/Footer';
import NavBar from '@/components/common/navbar';

type RootLayoutProps = { children: React.ReactNode; params: { locale: string } };

export const metadata = {
  title: 'Tempo website',
  description: 'Tempo Website'
};

export function generateStaticParams() {
  return Object.values(LOCALES).map((locale) => ({ locale }));
}

export default function RootLayout(props: RootLayoutProps) {
  const messages = useMessages();
  const { children, params } = props;
  const { locale } = params;
  unstable_setRequestLocale(locale); // Static rendering for language on server side

  // https://www.figma.com/design/mPo1cMvSmW1mzvhHnxXpbK/Clor-(Community)?node-id=5-48&m=dev

  return (
    <html lang={locale}>
      <body id='root' suppressHydrationWarning={true}>
        <NextIntlClientProvider messages={messages}>
          <NavBar />
          <main className='bg-primary2 xl:min-h-[calc(100vh-80px-150px)] mt-20'>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
