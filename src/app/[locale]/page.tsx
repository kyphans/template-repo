import { Welcome } from '@/components/HomePage/Welcome';
import { getHomePageInfo } from '@/services/home-page.services';
import { unstable_setRequestLocale } from 'next-intl/server';

type HomepageProps = {
  params: {
    locale: string;
  };
};

const Homepage = async (props: HomepageProps) => {
  const {
    params: { locale }
  } = props;
  unstable_setRequestLocale(locale); // Static rendering for language on server side
  const homepageInfo = (await getHomePageInfo()).data;

  if (!homepageInfo) {
    return null;
  }

  return (
    <>
      <Welcome data={homepageInfo} />
    </>
  );
};

export default Homepage;
