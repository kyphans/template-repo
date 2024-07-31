import { IGeneral } from '@/types/general.type';
import { get } from './api.services';

export async function getGeneralInfo() {
  return await get<IGeneral>('/api/general', { next: { tags: ['general-api'] } });
}
