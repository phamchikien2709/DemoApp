import {useRoute} from '@react-navigation/core';
import {ButtonBorder, Div, HeaderBack, InputItem, Label} from 'components';
import {Ecolors} from 'constant';
import React, {useState} from 'react';
import {navigate} from 'services';

interface ILblProps {
  content?: string;
}

interface Iparams {
  data: {
    name?: string;
    email?: string;
    phone?: string;
    userRefCode?: string;
    phonePostal?: string;
    username?: string;
  };
}
function Lbl(props: ILblProps) {
  return (
    <Div
      flexDirection={'row'}
      margin={10}
      alignItems={'center'}
      justifyContent={'flex-start'}
      width={'100%'}>
      <Label size={14} fontWeight={'700'} color={Ecolors.gray}>
        {props.content || ''}
      </Label>
    </Div>
  );
}

function SetPasswordScreen() {
  const route = useRoute();
  const params: Required<Iparams> = route.params;

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const gotoRequestOtp = () => {
    navigate('OtpRequestModal', {
      data: {
        ...params.data,
        password,
        confirmPassword,
      },
    });
  };

  return (
    <Div screen={true}>
      <HeaderBack title={'Tạo mật khẩu'} />
      <Div marginTop={20} marginHorizontal={10}>
        <Label size={14} color={Ecolors.gray}>
          Chiều dài tối thiểu là 6, bao gồm chữ thường (a-z) và chữ in hoa
          (A-Z), chứa ít nhất một số (0-9) hoặc ký hiệu đặc biệt
        </Label>
      </Div>
      <Lbl content={'Tên đăng nhập'} />
      <InputItem
        isInput={false}
        value={params.data.username || params.data.phone || ''}
        marginHorizontal={10}
      />
      <Lbl content={'Mật khẩu'} />
      <InputItem
        placeholder={'Vui lòng nhập mật khẩu'}
        marginHorizontal={10}
        value={password}
        onChangeText={setPassword}
        isShowAndHide={true}
      />
      <Lbl content={'Nhập lại mật khẩu'} />
      <InputItem
        placeholder={'Vui lòng nhập lại mật khẩu'}
        marginHorizontal={10}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        isShowAndHide={true}
      />

      <ButtonBorder
        onPress={() => {
          gotoRequestOtp();
        }}
        title={'Đăng ký'}
      />
    </Div>
  );
}

export default React.memo(SetPasswordScreen);
