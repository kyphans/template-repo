import { Welcome } from '@/components/HomePage/Welcome';
import { unstable_setRequestLocale } from 'next-intl/server';

type HomepageProps = {
  params: {
    locale: string;
  };
};

export default function Homepage(props: HomepageProps) {
  const {
    params: { locale }
  } = props;

  unstable_setRequestLocale(locale); // Static rendering for language on server side

  return (
    <>
      <Welcome />
    </>
  );
}
