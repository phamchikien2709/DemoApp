import {ActivityIndicator} from 'react-native';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {doLogin} from './action';

interface IinitialState {
  currentUser: any;
  token: any;
  isLoading: boolean;
  error: any;
  statusScreen: IParamsStatusScreen; // 1 splash , 2 unauthorized , 3 login success
}

const initialState = {
  currentUser: {},
  token: {},
  isLoading: false,
  error: {},
  statusScreen: 'splash',
} as IinitialState;

const authen = createSlice({
  name: `authen@/doLogin`,
  initialState: initialState,
  reducers: {
    // change status screen
    changeStatusScreen(state, action: PayloadAction<IParamsStatusScreen>) {
      state.statusScreen = action.payload;
    },
  },
  extraReducers: builder => {
    // dologin
    builder.addCase(doLogin.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(doLogin.fulfilled, (state, action) => {
      if (action.payload.result == 1) {
        state.currentUser = action.payload.content.user;
        delete action.payload.content.user;
        state.token = action.payload.content;
        state.statusScreen = 'main';
      }
      state.isLoading = false;
    });
    builder.addCase(doLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    // logout
  },
});

const {actions, reducer} = authen;
export const {changeStatusScreen} = actions;
export default reducer;
