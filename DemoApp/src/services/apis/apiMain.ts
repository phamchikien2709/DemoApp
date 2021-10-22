import {Alert} from 'react-native';
import {doGetAxios, doPostAxios} from './axios';

export const apiMain = {
  getDashBoard: async () => {
    try {
      const url = 'home/dashboard';
      const res: any = await doGetAxios(url);
      if (res.status == 200) {
        const obj: IDashBoard = res.data;
        return obj;
      }
      throw res?.response;
    } catch (error: any) {
      Alert.alert(`${error.message}`);
      throw error;
    }
  },
};
