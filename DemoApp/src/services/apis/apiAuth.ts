import {Alert} from 'react-native';
import {setStoreToken} from 'utils/storage';
import axiosApp, {doGetAxios, doPostAxios} from './axios';

export const apiAuth = {
  login: async (params: IParamsLogin) => {
    try {
      const url = 'auth/token';
      const res = await doPostAxios(url, params);
      if (res.status == 200) {
        const objToken: IResAuthToken = res.data;
        if (objToken) {
          await setStoreToken(objToken.access_token);
        }
        return {
          ...res,
          data: objToken,
        };
      }
      Alert.alert(`${res}`);
      return;
    } catch (error) {
      Alert.alert(`${error}`);
    }
  },
  signupOtp: async (params: {
    email?: string;
    name?: string;
    phone?: string;
    password?: string;
    confirmPassword?: string;
    phonePostal?: string;
    username?: string;
    userRefCode?: string | null;
  }) => {
    const url = 'sign-up-otp/create';
    return doPostAxios(url, {
      email: params.email || '',
      name: params.name || '',
      phone: params.phone || '',
      username: params.username || '',
      password: params.password || '',
      confirmPassword: params.confirmPassword || '',
      phonePostal: params.phonePostal || '',
      userRefCode: params.userRefCode || null,
    });
  },
  resendOtp: async (params: {
    expiredDurationInMinutes?: number;
    expiredTime?: number;
    otpTransId?: string;
    time?: number;
    transId?: string;
  }) => {
    const url = 'otp/resend';
    return doPostAxios(url, {
      expiredTime: params.expiredTime || 0,
      expiredDurationInMinutes: params.expiredDurationInMinutes || 0,
      time: params.time || 0,
      otpTransId: params.otpTransId || '',
      transId: params.transId || '',
    });
  },
  confirm: async (params: {
    expiredDurationInMinutes?: number;
    expiredTime?: number;
    otpTransId?: string;
    time?: number;
    transId?: string;
    otp?: string;
  }) => {
    const url = 'sign-up-otp/confirm';
    return doPostAxios(url, {
      expiredTime: params.expiredTime || 0,
      expiredDurationInMinutes: params.expiredDurationInMinutes || 0,
      time: params.time || 0,
      otpTransId: params.otpTransId || '',
      transId: params.transId || '',
      otp: params.otp || '',
    });
  },
  // forgot password
  forgotPassSendOtp: async (params: {username?: string}) => {
    const url = 'forgot-password/send';
    return doPostAxios(url, {
      username: params.username || '',
    });
  },
};
