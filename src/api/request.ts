import axios from 'axios';

const service = axios.create({
  baseURL: 'api',
  timeout: 20000,
});

export default service;
