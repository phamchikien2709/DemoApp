import {useRoute} from '@react-navigation/core';
import {ButtonBorder, Div, HeaderBack, InputItem, Label} from 'components';
import {Ecolors} from 'constant';
import React, {useState} from 'react';
import {Alert} from 'react-native';
import {apiAuth, navigate} from 'services';

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
    flowApp?: string;
    otpTransId?: string;
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
  const [loading, setLoading] = useState<boolean>(false);

  const gotoRequestOtp = () => {
    navigate('OtpRequestModal', {
      data: {
        ...params.data,
        password,
        confirmPassword,
      },
    });
  };

  const onConfirmSetPassword = async () => {
    try {
      setLoading(true);
      const res = await apiAuth.resetPassword({
        password,
        confirmPassword,
        otpTransId: params.data.otpTransId || '',
      });
      if (res.status == 200) {
        navigate('LoginScreen');
        return;
      }
      Alert.alert(res.message, '', [
        {
          text: 'Ok',
          onPress: () => {},
        },
      ]);
    } catch (error: any) {
      Alert.alert(error.message, '', [
        {
          text: 'Ok',
          onPress: () => {},
        },
      ]);
    } finally {
      setLoading(false);
    }
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
        loading={loading}
        onPress={() => {
          if (params.data.flowApp == 'ForgotPassword') {
            onConfirmSetPassword();
            return;
          }
          gotoRequestOtp();
        }}
        title={
          params.data.flowApp == 'ForgotPassword' ? 'Chấp nhận' : 'Đăng ký'
        }
      />
    </Div>
  );
}

export default React.memo(SetPasswordScreen);
