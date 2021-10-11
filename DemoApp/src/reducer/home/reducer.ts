import {ActivityIndicator} from 'react-native';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {doGetDashBoard} from './action';

interface IinitialState {
  data: IDashBoard;
  isLoading: boolean;
  error: any;
}

const initialState = {
  isLoading: false,
  error: {},
  data: [],
} as IinitialState;

const home = createSlice({
  name: `home@/home`,
  initialState: initialState,
  reducers: {
    // change status screen
    // changeStatusScreen(state, action: PayloadAction<IParamsStatusScreen>) {
    //   state.statusScreen = action.payload;
    // },
  },
  extraReducers: builder => {
    // dologin
    builder.addCase(doGetDashBoard.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(doGetDashBoard.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload) {
        state.data = action.payload;
      }
    });
    builder.addCase(doGetDashBoard.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

const {actions, reducer} = home;
export const {} = actions;
export default reducer;
