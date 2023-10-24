import Axios from 'axios';
import { API_URL } from '@/config/index';
import { getSession } from 'next-auth/react'

async function authRequestInterceptor(config: any) {
  config.headers.Accept = 'application/json';
  const { user: data }: any = await getSession();
  if (data['id_token']) {
    config.headers['x-jwt'] = data['id_token'];
  }
  return config;
}

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);

