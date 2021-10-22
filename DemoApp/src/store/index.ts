import {rootReducer} from './../reducer/index';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import logger from 'redux-logger';
// import {middlewareSocket} from './middlewareSocket';
import {persistStore, persistReducer, createTransform} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {middlewareCatchApi} from './middlewareCatchApi';

const SetTransformGroup = createTransform(
  // transform state on its way to being serialized and persisted.
  (inboundState: object, key) => {
    // convert mySet to an Array.
    return inboundState; //{...inboundState};
  },
  // transform state being rehydrated
  (outboundState: object, key) => {
    // convert mySet back to a Set.
    return outboundState; // {...outboundState, isLoading: null, listGroupChats: null};
  },
  // define which reducers this transform gets called for.
  // {whitelist: ['authen', 'groupChats']},
);

const persistConfig = {
  key: 'rootSaga',
  storage: AsyncStorage,
  // blacklist: ['authen'],
  transforms: [SetTransformGroup],
  //   whitelist: ['group', 'privateChat', 'authen', 'sticker'], // Xem thêm tại mục "Quá trình merge".
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: pReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }).concat(...(__DEV__ ? [logger, middlewareCatchApi] : [])),
  // concat(...(__DEV__ ? [logger, middlewareSocket] : [middlewareSocket])),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
