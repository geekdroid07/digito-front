import Axios from 'axios';
import { API_URL } from '@/config/index';
import { getSession } from 'next-auth/react'

async function authRequestInterceptor(config: any) {
  config.headers.Accept = 'application/json';
  const  data: any = await getSession();
  if (data?.user?.id_token) {
    config.headers['x-jwt'] = data?.user?.id_token;
  }
  return config;
}

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);

