import {Button, ButtonBorder, Div, InputItem, Label} from 'components';
import HeaderBack from 'components/HeaderBack';
import {Ecolors} from 'constant';
import React, {useState} from 'react';
import {View} from 'react-native';
import {goBack, navigate} from 'services/navigation';

function ForgotPasswordScreen() {
  const [username, setUserName] = useState<string>('');

  const gotoRequestOtp = () => {
    navigate('OtpRequestModal', {
      data: {
        username,
        flowApp: 'ForgotPassword',
      },
    });
    return;
  };

  return (
    <Div screen={true}>
      <HeaderBack title={'Quên mật khẩu'} />
      <Div
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'center'}
        padding={10}>
        <Label size={15} textAlign={'center'} color={Ecolors.gray}>
          Bạn vui lòng nhập tên đăng nhập đã đăng ký và thực hiện theo hướng
          dẫn.
        </Label>
      </Div>
      <InputItem
        placeholder={'Tên đăng nhập'}
        value={username}
        onChangeText={setUserName}
        marginHorizontal={10}
      />
      <ButtonBorder title={'Tiếp tục'} onPress={gotoRequestOtp} />
    </Div>
  );
}

export default React.memo(ForgotPasswordScreen);
