/* eslint-disable no-param-reassign */
import axios from 'axios';

const service = axios.create({
  baseURL: 'api',
  timeout: 5000,
});

/**
 * request拦截器
 * token值根据实际应用业务场景获取
 * Authorization为请求头token放置位置（根据实际修改）
 */
/* const token = '123'; */
/* const token = window.localStorage.getItem('token');
service.interceptors.request.use(
  (config) => {
    console.log(token);
    // Add X-Token header to every request, you can add other custom headers here
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
); */

export default service;
