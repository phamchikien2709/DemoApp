import {createAsyncThunk} from '@reduxjs/toolkit';
import {apiAuth} from 'services';

export const doLogin = createAsyncThunk(
  `authen@/doLogin`,
  async (params: IParamsLogin) => {
    const result = await apiAuth.login(params);
    return result;
  },
);
