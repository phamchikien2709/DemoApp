import {Alert} from 'react-native';
import {setStoreToken} from 'utils/storage';
import {doGetAxios, doPostAxios} from './axios';

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
      Alert.alert(`${res.message}`);
      throw res;
    } catch (error: any) {
      Alert.alert(`${error.message}`);
      throw error;
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
    try {
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
    } catch (error: any) {
      throw error;
    }
  },
  resendOtp: async (params: {
    expiredDurationInMinutes?: number;
    expiredTime?: number;
    otpTransId?: string;
    time?: number;
    transId?: string;
  }) => {
    try {
      const url = 'otp/resend';
      return doPostAxios(url, {
        expiredTime: params.expiredTime || 0,
        expiredDurationInMinutes: params.expiredDurationInMinutes || 0,
        time: params.time || 0,
        otpTransId: params.otpTransId || '',
        transId: params.transId || '',
      });
    } catch (error: any) {
      throw error;
    }
  },
  confirm: async (params: {
    expiredDurationInMinutes?: number;
    expiredTime?: number;
    otpTransId?: string;
    time?: number;
    transId?: string;
    otp?: string;
  }) => {
    try {
      const url = 'sign-up-otp/confirm';
      return doPostAxios(url, {
        expiredTime: params.expiredTime || 0,
        expiredDurationInMinutes: params.expiredDurationInMinutes || 0,
        time: params.time || 0,
        otpTransId: params.otpTransId || '',
        transId: params.transId || '',
        otp: params.otp || '',
      });
    } catch (error: any) {
      throw error;
    }
  },
  // forgot password
  forgotPassSendOtp: async (params: {username?: string}) => {
    try {
      const url = 'forgot-password/send';
      return doPostAxios(url, {
        username: params.username || '',
      });
    } catch (error: any) {
      throw error;
    }
  },
  forgotPassConfirm: (params: {
    expiredDurationInMinutes?: number;
    expiredTime?: number;
    otpTransId?: string;
    time?: number;
    transId?: string;
    otp?: string;
  }) => {
    try {
      const url = 'forgot-password/confirm';
      return doPostAxios(url, {
        expiredTime: params.expiredTime || 0,
        expiredDurationInMinutes: params.expiredDurationInMinutes || 0,
        time: params.time || 0,
        otpTransId: params.otpTransId || '',
        transId: params.transId || '',
        otp: params.otp || '',
      });
    } catch (error: any) {
      throw error;
    }
  },
  resetPassword: (params: {
    confirmPassword: string;
    otpTransId: string;
    password: string;
  }) => {
    const url = 'forgot-password/reset';
    return doPostAxios(url, {
      confirmPassword: params.confirmPassword,
      otpTransId: params.otpTransId,
      password: params.password,
    });
  },
};
