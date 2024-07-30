import { IGeneral } from '@/types/general.type';
import { get } from './api.services';

export async function getGeneralInfo() {
  return await get<IGeneral>('http://localhost:3999/api/general', { cache: 'force-cache' });
}
