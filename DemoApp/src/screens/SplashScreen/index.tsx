import {Button, Div, Label} from 'components';
import {Ecolors} from 'constant';
import React from 'react';
import {changeStatusScreen} from 'reducer/authen';
import {useAppDispatch} from 'store/hooks';

function SplashScreen() {
  const dispatch = useAppDispatch();

  const onGoToLogin = () => {
    dispatch(changeStatusScreen('unAuthorized'));
  };

  return (
    <Div flex={1} alignItems={'center'} justifyContent={'center'}>
      <Label
        marginBottom={30}
        color={Ecolors.blue}
        size={20}
        fontWeight={'bold'}>
        Chào mừng đến với FINCORP
      </Label>
      <Button
        onPress={onGoToLogin}
        width={200}
        borderRadius={5}
        backgroundColor={Ecolors.blue}
        height={40}
        alignItems={'center'}
        justifyContent={'center'}>
        <Label color={Ecolors.white} fontWeight={'bold'} size={15}>
          Tiếp tục
        </Label>
      </Button>
    </Div>
  );
}

export default React.memo(SplashScreen);
