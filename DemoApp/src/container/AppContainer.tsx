import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {persistor, store} from 'store';
import Navi from './Navi';
import {PersistGate} from 'redux-persist/integration/react';
import SplashContainer from './SplashContainer';

function AppContainer() {
  return (
    <Provider store={store}>
      <PersistGate loading={<SplashContainer />} persistor={persistor}>
        <NavigationContainer independent={true}>
          <Navi />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default React.memo(AppContainer);
