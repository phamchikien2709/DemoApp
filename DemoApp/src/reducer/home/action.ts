import {createAsyncThunk} from '@reduxjs/toolkit';
import {apiMain} from 'services/apis/apiMain';

export const doGetDashBoard = createAsyncThunk(`home@/dashboard`, async () => {
  const result = await apiMain.getDashBoard();
  return result;
});
