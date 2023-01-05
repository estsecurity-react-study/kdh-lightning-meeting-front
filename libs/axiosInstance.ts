import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api',
  timeout: 5000,
  withCredentials: true,
});

export default axiosInstance;
