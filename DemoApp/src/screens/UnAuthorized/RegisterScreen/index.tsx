import {Button, ButtonBorder, Div, InputItem, Label} from 'components';
import HeaderBack from 'components/HeaderBack';
import {Ecolors} from 'constant';
import React, {useState} from 'react';
import {View} from 'react-native';
import {goBack, navigate} from 'services/navigation';
interface ILblProps {
  content?: string;
}
function Lbl(props: ILblProps) {
  return (
    <Div
      flexDirection={'row'}
      margin={10}
      alignItems={'center'}
      justifyContent={'flex-start'}
      width={'100%'}>
      <Label size={14} color={Ecolors.gray}>
        {props.content || ''}
      </Label>
      <Label size={14} color={Ecolors.red}>{` (*)`}</Label>
    </Div>
  );
}

function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [userRefCode, setUserRefCode] = useState('');

  const gotoLogin = () => {
    navigate('LoginScreen');
  };

  const gotoSetPassword = () => {
    navigate('SetPasswordScreen', {
      data: {
        name,
        email,
        phone,
        userRefCode,
        phonePostal: '+84',
      },
    });
  };

  return (
    <Div screen={true}>
      <HeaderBack title={'Tạo tài khoản'} />
      <Div height={20} />
      <Lbl content={'Họ và tên đầy đủ'} />
      <InputItem
        placeholder={'Ví dụ: Phạm Chí Kiên'}
        keyboardType={'name-phone-pad'}
        value={name}
        onChangeText={setName}
        marginHorizontal={10}
      />
      <Lbl content={'Email'} />
      <InputItem
        placeholder={'Ví dụ: Phamchikien2709@gmail.com'}
        marginHorizontal={10}
        keyboardType={'email-address'}
        value={email}
        onChangeText={setEmail}
      />
      <Lbl content={'Số điện thoại'} />
      <InputItem
        placeholder={'Ví dụ: 0352222301'}
        keyboardType={'number-pad'}
        marginHorizontal={10}
        value={phone}
        onChangeText={setPhone}
      />
      <Lbl content={'Người giới thiệu'} />
      <InputItem
        placeholder={'Ví dụ: R1234'}
        keyboardType={'name-phone-pad'}
        marginHorizontal={10}
        value={userRefCode}
        onChangeText={setUserRefCode}
      />
      <ButtonBorder
        onPress={() => {
          gotoSetPassword();
        }}
        title={'Tiếp tục'}
        marginTop={20}
      />
      <Div
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'center'}
        marginTop={15}>
        <Label size={15} color={Ecolors.black}>
          {`Bạn đã có tài khoản ? `}
        </Label>
        <Button
          onPress={() => {
            gotoLogin();
          }}
          borderBottomColor={Ecolors.blue}
          borderBottomWidth={1}>
          <Label size={15} color={Ecolors.blue}>
            Đăng nhập
          </Label>
        </Button>
      </Div>
    </Div>
  );
}

export default React.memo(RegisterScreen);
