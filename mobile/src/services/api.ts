import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.1.2:3333/api/v1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});
