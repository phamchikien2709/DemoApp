import {combineReducers} from '@reduxjs/toolkit';
import authen from './authen/reducer';
import home from './home/reducer';

export const rootReducer = combineReducers({
  authen,
  home,
});
export type RootState = ReturnType<typeof rootReducer>;

// export *
