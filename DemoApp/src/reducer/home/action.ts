import {createAsyncThunk} from '@reduxjs/toolkit';
import {apiMain} from 'services/apis/apiMain';

export const doGetDashBoard = createAsyncThunk(
  `home@/dashboard`,
  async (params: any, {rejectWithValue, dispatch}) => {
    try {
      const res = await apiMain.getDashBoard();
      if (res) {
        return res;
      }
      return rejectWithValue(res);
    } catch (error: any) {
      return rejectWithValue(error);
    }
  },
  {},
);
