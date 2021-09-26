import {combineReducers} from '@reduxjs/toolkit';
import authen from './authen/reducer';

export const rootReducer = combineReducers({
  authen,
});
export type RootState = ReturnType<typeof rootReducer>;

// export *
