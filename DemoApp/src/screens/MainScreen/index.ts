import InvestMentScreen from './InvestMentScreen';
import ManageScreen from './ManageScreen';
import OverViewScreen from './OverViewScreen';
import ProfileScreen from './ProfileScreen';
import SearchModal from './SearchModal';
import ProductDetailsModal from './ProductDetailsModal';

const screens: any = {
  //   ChatScreen,
  //   ProfileScreen,
  SearchModal,
  ProductDetailsModal,
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
    name: 'OverViewScreen',
    component: OverViewScreen,
  },
  {
    name: 'InvestMentScreen',
    component: InvestMentScreen,
  },
  {
    name: 'ManageScreen',
    component: ManageScreen,
  },
  {
    name: 'ProfileScreen',
    component: ProfileScreen,
  },
];

export {mainStackScreen, mainStackModal, mainTab};
