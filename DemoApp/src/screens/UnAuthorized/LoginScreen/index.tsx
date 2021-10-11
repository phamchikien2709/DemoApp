import {
  Button,
  ButtonBorder,
  Div,
  ImageView,
  InputItem,
  Label,
} from 'components';
import {Ecolors, Icons} from 'constant';
import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {heightScreen, widthScreen} from 'utils';
import {changeStatusScreen, doLogin, saveName} from 'reducer/authen';
import {navigate} from 'services';
import {Keyboard} from 'react-native';
import {useIsFocused} from '@react-navigation/core';

function LoginScreen() {
  const dispatch = useAppDispatch();
  const isFocus = useIsFocused();
  const userNameSaveRedux = useAppSelector(state => state.authen.userName);

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const {isLoading} = useAppSelector(state => state.authen);
  const [isSaveName, setIsSaveName] = useState<boolean>(false);

  useEffect(() => {
    if (isFocus && userNameSaveRedux) {
      setUserName(userNameSaveRedux);
      setIsSaveName(true);
    }
    return () => {};
  }, [isFocus, userNameSaveRedux]);

  const onLogin = () => {
    if (isSaveName) {
      dispatch(saveName(username));
    } else {
      dispatch(saveName(''));
    }
    const obj: IParamsLogin = {
      username: username,
      password: password,
    };
    dispatch(doLogin(obj));
  };

  const gotoRegister = () => {
    navigate('RegisterScreen');
  };

  const gotoForgotPassword = () => {
    navigate('ForgotPasswordScreen');
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <Button
      onPress={() => {
        dismissKeyboard();
      }}>
      <Div
        screen={true}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}>
        <Label size={30} color={Ecolors.blue} fontWeight={'bold'}>
          Đăng nhập
        </Label>
        <InputItem
          marginTop={30}
          value={username}
          onChangeText={setUserName}
          placeholder={'Số điện thoại'}
          keyboardType={'number-pad'}
        />
        <InputItem
          isShowAndHide={true}
          value={password}
          onChangeText={setPassword}
          marginTop={10}
          placeholder={'Mật khẩu'}
        />
        <Div
          width={'100%'}
          marginTop={10}
          flexDirection={'row'}
          alignItems={'center'}
          paddingLeft={30}
          paddingRight={40}
          justifyContent={'space-between'}>
          <Button
            flexDirection={'row'}
            alignItems={'center'}
            onPress={() => {
              setIsSaveName(a => !a);
            }}>
            {isSaveName ? (
              <ImageView
                source={Icons.check}
                tintColor={Ecolors.blue}
                widthHeight={20}
              />
            ) : (
              <Div
                widthHeight={20}
                borderColor={Ecolors.textColor}
                borderRadius={100}
                borderWidth={0.5}
              />
            )}
            <Label
              marginLeft={10}
              size={15}
              color={isSaveName ? Ecolors.blue : Ecolors.textColor}>
              Ghi nhớ tên đăng nhập
            </Label>
          </Button>
          <Button
            onPress={() => {
              gotoForgotPassword();
            }}
            borderBottomColor={Ecolors.blue}
            borderBottomWidth={1}>
            <Label size={15} color={Ecolors.blue}>
              Quên mật khẩu ?
            </Label>
          </Button>
        </Div>
        <ButtonBorder
          loading={isLoading}
          title={'Đăng nhập'}
          onPress={onLogin}
        />
        <Div
          flexDirection={'row'}
          alignItems={'center'}
          width={'100%'}
          justifyContent={'center'}
          flexWrap={'wrap'}
          marginTop={20}>
          <Label marginTop={20} size={15} color={Ecolors.black}>
            {`Bạn chưa có tài khoản ? nhấn vào `}
          </Label>
          <Button
            onPress={() => {
              gotoRegister();
            }}
            borderBottomColor={Ecolors.blue}
            borderBottomWidth={1}>
            <Label size={15} color={Ecolors.blue}>
              Đăng ký
            </Label>
          </Button>
        </Div>
      </Div>
    </Button>
  );
}

export default React.memo(LoginScreen);
