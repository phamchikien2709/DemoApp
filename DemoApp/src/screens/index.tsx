export * from './MainScreen';
export * from './UnAuthorized';

import Alert from 'components/Alert';
import SplashScreen from './SplashScreen';

const stackSplash = [
  {
    name: 'SplashScreen',
    component: SplashScreen,
  },
];

const alert = {
  name: 'Alert',
  component: Alert,
};

export {stackSplash, alert};
