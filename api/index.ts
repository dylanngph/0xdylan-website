import axios from 'axios';
import { useAccessToken } from '@/hooks/useAccessToken';

// const API_URL = 'https://bionswap-796dw.ondigitalocean.app'

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  // baseURL: baseURL,
});

export const authRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  // baseURL: baseURL,
});

authRequest.interceptors.response.use(
  (response) => {
    return response;
  },
  async (err) => {
    const originalRequest = err.config;
    const { requireSignMessage } = useAccessToken();

    if (err.response.status === 401 && originalRequest.url !== '/auth/connect-sign') {
        requireSignMessage();
    }

    return Promise.reject(err);
  },
);
