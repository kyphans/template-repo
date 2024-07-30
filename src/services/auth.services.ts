import { API_VERSION } from '@/constant';
import { post } from './api.services';
import { LoginPayLoad } from '@/types/auth.type';

export async function login(payload: LoginPayLoad) {
  return await post(`/${API_VERSION}/auth/login`, payload);
}
