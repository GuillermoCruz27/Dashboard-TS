import axios from 'axios';

const axiosPrivate = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_URL_API ?? 'http://localhost:5173',
});

export default axiosPrivate;
