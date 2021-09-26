import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

const screens: any = {
  LoginScreen,
  RegisterScreen,
};

const stackUnAuthorized = Object.keys(screens).map(item => {
  return {
    name: item,
    component: screens?.[item],
  };
});

export {stackUnAuthorized};
