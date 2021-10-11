import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import OtpRequestModal from './OtpRequestModal';
import SetPasswordScreen from './SetPasswordScreen';

const screens: any = {
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  OtpRequestModal,
  SetPasswordScreen,
};

// const stackUnAuthorized = Object.keys(screens).map(item => {
//   return {
//     name: item,
//     component: screens?.[item],
//   };
// });

const stackUnAuthorizedScreen = Object.keys(screens)
  .filter(a => !a.includes('modal') && !a.includes('Modal'))
  .map(item => {
    return {
      name: item,
      component: screens?.[item],
    };
  });
const stackUnAuthorizedModal = Object.keys(screens)
  .filter(a => !a.includes('screen') && !a.includes('Screen'))
  .map(item => {
    return {
      name: item,
      component: screens?.[item],
    };
  });

export {stackUnAuthorizedModal, stackUnAuthorizedScreen};
