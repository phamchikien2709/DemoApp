import axiosAuth from './axiosAuth';

export const apiAuth = {
  login: (params: IParamsLogin) => {
    const url = 'auth/token';
    return axiosAuth.post(url, params);
  },
  register: () => {
    const url = 'auth/register';
    return axiosAuth.post(url);
  },
};
