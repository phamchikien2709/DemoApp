import {changeStatusScreen} from 'reducer/authen';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {apiAuth} from 'services';

export const doLogin = createAsyncThunk(
  `authen@/doLogin`,
  async (params: IParamsLogin, {rejectWithValue, dispatch}) => {
    try {
      const res = await apiAuth.login(params);
      if (res) {
        dispatch(changeStatusScreen('main'));
        return res;
      }
      return rejectWithValue(res);
    } catch (error: any) {
      return rejectWithValue(error);
    }
  },
);
