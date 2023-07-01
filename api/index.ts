import axios from 'axios';

const token = process.env.NEXT_PUBLIC_API_TOKEN;

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
    common: {
      'Authorization': `Bearer ${token}`
    }
  }
});