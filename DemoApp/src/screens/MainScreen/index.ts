import ProfileScreen from './ProfileScreen';
import SearchModal from './SearchModal';

const screens: any = {
  //   ChatScreen,
  //   ProfileScreen,
  SearchModal,
};

const mainStackScreen = Object.keys(screens)
  .filter(a => !a.includes('modal') && !a.includes('Modal'))
  .map(item => {
    return {
      name: item,
      component: screens?.[item],
    };
  });

const mainStackModal = Object.keys(screens)
  .filter(a => a.includes('modal') || a.includes('Modal'))
  .map(item => {
    return {
      name: item,
      component: screens?.[item],
    };
  });
const mainTab = [
  {
    name: 'ProfileScreen',
    component: ProfileScreen,
  },
];

export {mainStackScreen, mainStackModal, mainTab};
