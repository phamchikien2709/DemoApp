import {Alert} from 'react-native';
import axiosApp, {doGetAxios, doPostAxios} from './axios';

export const apiMain = {
  getDashBoard: async () => {
    try {
      const url = 'home/dashboard';
      const res: any = await doGetAxios(url);
      if (res.status == 200) {
        const obj: IDashBoard = res.data;
        return obj;
      }
      Alert.alert(`${res}`);
      return res?.response;
    } catch (error) {
      console.log('errorr', error);
      Alert.alert(`${error}`);
    }
  },
};
