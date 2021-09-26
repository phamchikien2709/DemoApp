import {Div, Label} from 'components';
import {Ecolors} from 'constant';
import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {heightScreen, widthScreen} from 'utils';
import BtnRegister from './BtnRegister';
import InputItem from './InputItem';
import {changeStatusScreen, doLogin} from 'reducer/authen';

function LoginScreen() {
  const dispatch = useAppDispatch();

  const [username, setUserName] = useState('0355256761');
  const [password, setPassword] = useState('Abc123');
  const {isLoading} = useAppSelector(state => state.authen);

  const onLogin = () => {
    const obj: IParamsLogin = {
      username: username,
      password: password,
    };
    dispatch(changeStatusScreen('main'));
    // dispatch(doLogin(obj))
    //   .then(res => {
    //     console.log('resss', res);
    //   })
    //   .catch(err => {
    //     console.log('errror', err);
    //   });
  };

  return (
    // <KeyboardAwareScrollView
    //   keyboardShouldPersistTaps={'handled'}
    //   extraHeight={100}
    //   enableOnAndroid={true}>
    <Div
      flex={1}
      style={{
        width: widthScreen,
        height: heightScreen,
      }}
      backgroundColor={Ecolors.white}
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
      <BtnRegister loading={isLoading} title={'Đăng nhập'} onPress={onLogin} />
    </Div>
    // </KeyboardAwareScrollView>
  );
}

export default React.memo(LoginScreen);
