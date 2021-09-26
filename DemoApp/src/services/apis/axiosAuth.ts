import axios, {AxiosError, AxiosResponse} from 'axios';
import {URL} from '@env';

const baseURL = URL;
const axiosAuth = axios.create({
  baseURL: baseURL + 'api/',
});

axiosAuth.interceptors.response.use(
  (res: AxiosResponse<{content: any; message: string; result: number}>) => {
    if (res.data.result === 0) {
      // logout(buildysURL + "");
    }
    return res;
  },
  (err: AxiosError) => {
    if (err.response?.status === 401) {
      // logout(buildysURL + "");
    }
    throw err;
  },
);

axiosAuth.interceptors.request.use(
  async config => {
    config.headers = {
      'content-type': 'application/json',
      Authorization: 'apis.fplatform.fincorp.vn',
    };
    return config;
  },
  error => Promise.reject(error),
);
export default axiosAuth;
