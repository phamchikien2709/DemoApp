import axios, {AxiosError, AxiosResponse} from 'axios';
import {URL} from '@env';
import {getStoreToken} from 'utils/storage';

type returnFunction = IAxiosResponse;

const getUuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
const baseURL = URL;
const axiosApp = axios.create({
  baseURL: baseURL + 'api/',
  timeout: 5000,
});

axiosApp.interceptors.response.use(
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

axiosApp.interceptors.request.use(
  async (config: any) => {
    const token = await getStoreToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    config.headers['Content-Type'] = 'application/json';
    config.headers['request-id'] = getUuid();
    config.headers['referer'] = 'https://fplatform.fincorp.vn/';
    config.headers['origin'] = 'https://fplatform.fincorp.vn';
    return config;
  },
  error => Promise.reject(error),
);
export default axiosApp;

export async function doGetAxios(url: string): returnFunction {
  try {
    const res: AxiosResponse = await axiosApp.get(url);
    if (res) {
      return res.data;
    }
    const obj: IAxiosResponse = {
      data: null,
      message: 'error',
      status: -1,
    };
    return obj;
  } catch (error: any) {
    return error;
  }
}

export async function doPostAxios(url: string, params: object): returnFunction {
  try {
    const res: AxiosResponse = await axiosApp.post(url, JSON.stringify(params));
    if (res) {
      return res.data;
    }
    const obj: IAxiosResponse = {
      data: null,
      message: 'error',
      status: -1,
    };
    return obj;
  } catch (error: any) {
    return error;
  }
}
