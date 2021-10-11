import {changeStatusScreen} from 'reducer/authen';
import {RootState} from 'reducer';
import {Middleware} from 'redux';

export const middlewareCatchApi: Middleware<
  {}, // Most middleware do not modify the dispatch return value
  RootState
> = storeApi => next => action => {
  if (action?.payload?.status == 401) {
    storeApi.dispatch(changeStatusScreen('unAuthorized'));
    return;
  }
  return next(action);
};
