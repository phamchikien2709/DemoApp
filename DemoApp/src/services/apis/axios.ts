import axios, {AxiosError, AxiosResponse} from 'axios';
import {URL} from '@env';
import {getStoreToken} from 'utils/storage';

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

axiosApp.interceptors.response.use(
  (res: AxiosResponse<{content: any; message: string; result: number}>) => {
    return res;
  },
  (
    err: AxiosError<{
      data?: {
        message?: string;
        content?: any;
        data?: any;
        result?: number;
      };
    }>,
  ) => {
    throw (
      err.response?.data || {
        message: '',
        content: null,
        result: -1,
        data: null,
      }
    );
  },
);

export async function doGetAxios(url: string): Promise<IAxiosResponse> {
  try {
    const res: AxiosResponse = await axiosApp.get(url);
    if (res) {
      return res.data;
    }
    throw res;
  } catch (error) {
    throw error;
  }
}

export async function doPostAxios(
  url: string,
  params: object,
): Promise<IAxiosResponse> {
  try {
    const res: AxiosResponse = await axiosApp.post(url, JSON.stringify(params));
    if (res) {
      return res.data;
    }
    throw res;
  } catch (error) {
    throw error;
  }
}
