import { IHomePage } from '@/types/home-page.type';
import { get } from './api.services';

export async function getHomePageInfo() {
  try {
    return await get<IHomePage>('/api/home-page', { next: { tags: ['home-page-api'] } });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error occurred while fetching home page info:', error);
    return { data: null, error }; // Rethrow the error to be handled by the caller
  }
}
