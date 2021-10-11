import {Button, Div, Label} from 'components';
import {Ecolors} from 'constant';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {navigate} from 'services';
interface IPropsFooterApp {
  state: {
    routes: Array<any>;
    index: number;
  };
}

interface IPropsItemButotn {
  isFocus: boolean;
  index: number;
  title: string;
  onPress: () => void;
}

interface IObjectConvert {
  onPress: () => void;
  title: string;
}

function ItemButton(props: IPropsItemButotn) {
  return (
    <Button
      onPress={() => props.onPress && props.onPress()}
      flex={1}
      alignItems={'center'}
      justifyContent={'center'}
      height={30}>
      <Label
        fontWeight={'bold'}
        size={15}
        color={props.isFocus ? Ecolors.black : Ecolors.white}>
        {props.title}
      </Label>
    </Button>
  );
}

function FooterApp(props: IPropsFooterApp) {
  const insest = useSafeAreaInsets();

  const ObjectAction: any = {
    0: {
      title: 'Tổng quan',
      onPress: () => {
        navigate('OverViewScreen');
      },
    },
    1: {
      title: 'Sản phẩm',
      onPress: () => {
        navigate('InvestMentScreen');
      },
    },
    2: {
      title: 'Quản lý',
      onPress: () => {
        navigate('ManageScreen');
      },
    },
    3: {
      title: 'Hồ sơ',
      onPress: () => {
        navigate('ProfileScreen');
      },
    },
  };
  return (
    <Div
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'space-evenly'}
      backgroundColor={Ecolors.blue}
      paddingBottom={insest.bottom}
      paddingTop={10}>
      {props.state.routes?.map((item, index: number) => {
        return (
          <ItemButton
            key={index}
            onPress={() => ObjectAction[index].onPress()}
            isFocus={index == props.state.index}
            index={index}
            title={ObjectAction[index].title}
          />
        );
      })}
    </Div>
  );
}

export default React.memo(FooterApp);
