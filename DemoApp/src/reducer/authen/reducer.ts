import {setStoreToken} from 'utils/storage';
import {ActivityIndicator} from 'react-native';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {doLogin} from './action';

interface IinitialState {
  currentUser: any;
  userName?: string;
  token: any;
  isLoading: boolean;
  error: any;
  statusScreen: IParamsStatusScreen; // 1 splash , 2 unauthorized , 3 login success
}

const initialState = {
  currentUser: {},
  token: {},
  isLoading: false,
  userName: '',
  error: {},
  statusScreen: 'splash',
} as IinitialState;

const authen = createSlice({
  name: `authen@/doLogin`,
  initialState: initialState,
  reducers: {
    // change status screen
    changeStatusScreen(state, action: PayloadAction<IParamsStatusScreen>) {
      if (action.payload == 'unAuthorized') {
        setStoreToken('');
      }
      state.statusScreen = action.payload;
    },
    saveName(state, action: PayloadAction<string>) {
      state.userName = action.payload;
    },
  },
  extraReducers: builder => {
    // dologin
    builder.addCase(doLogin.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(doLogin.fulfilled, (state, action) => {
      if (action.payload?.status == 200) {
        // state.statusScreen = 'main';
        state.token = action.payload.data.access_token;
      }
      state.isLoading = false;
    });
    builder.addCase(doLogin.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

const {actions, reducer} = authen;
export const {changeStatusScreen, saveName} = actions;
export default reducer;
