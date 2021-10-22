import {RouteProp, useRoute} from '@react-navigation/core';
import {Button, ButtonBorder, Div, ImageView, Label} from 'components';
import {Ecolors, Icons} from 'constant';
import React, {useEffect, useRef, useState} from 'react';
import {Alert} from 'react-native';
import {apiAuth} from 'services';
import {goBack, navigate} from 'services/navigation';
import OtpComp from './OtpComp';

interface Iparams {
  data?: {
    name?: string;
    email?: string;
    phone?: string;
    password?: string;
    userRefCode?: string;
    confirmPassword?: string;
    phonePostal?: string;
    flowApp?: string;
    username?: string;
  };
}

interface IRequest {
  expiredDurationInMinutes?: number;
  expiredTime?: number;
  otpTransId?: string;
  time?: number;
  transId?: string;
  otp?: string;
}

interface IOtpRefHandle {
  start: () => void;
}

function OtpRequestModal() {
  const route = useRoute();
  const params: Required<Iparams> = route.params;

  const otpCompRef = useRef<IOtpRefHandle>(null);
  const [requestOnSendOtp, setRequestOnSendOtp] = useState<IRequest>({});
  const [otp, setOtp] = useState<string>('');
  const [isInTime, setIsIntime] = useState<boolean>(true);
  const [loadingConfirm, setLoadingConfim] = useState<boolean>(false);
  const [loadingResend, setLoadingResend] = useState<boolean>(false);

  useEffect(() => {
    if (params.data.flowApp == 'ForgotPassword') {
      onSendOtpForgotPassword();
    } else {
      onSendOtp();
    }
    return () => {};
  }, [params.data.flowApp]);

  const onSendOtpForgotPassword = async () => {
    try {
      const res = await apiAuth.forgotPassSendOtp({
        username: params.data.username || '',
      });
      if (res.status == 200) {
        setRequestOnSendOtp(res.data);
      } else {
        // Alert.alert(res.message, '', [
        //   {
        //     text: 'Ok',
        //     onPress: () => {
        //       goBack();
        //     },
        //   },
        // ]);
      }
    } catch (error: any) {
      Alert.alert(error.message || '', '', [
        {
          text: 'Ok',
          onPress: () => {
            goBack();
          },
        },
      ]);
    }
  };

  const onSendOtp = async () => {
    const {
      name,
      phone,
      phonePostal,
      email,
      password,
      confirmPassword,
      userRefCode,
    } = params.data;
    try {
      const res = await apiAuth.signupOtp({
        name,
        phone,
        email,
        phonePostal,
        password,
        confirmPassword,
        userRefCode,
        username: phone,
      });
      console.log('signupOtp', res);
      if (res.status == 200) {
        setRequestOnSendOtp(res.data);
      } else {
        Alert.alert(res.message, '', [
          {
            text: 'Ok',
            onPress: () => {
              goBack();
            },
          },
        ]);
      }
    } catch (error: any) {
      Alert.alert(error.message || '', '', [
        {
          text: 'Ok',
          onPress: () => {
            goBack();
          },
        },
      ]);
    }
  };

  const onResendOtp = async () => {
    try {
      setLoadingResend(true);
      const res = await apiAuth.resendOtp(requestOnSendOtp);
      if (res.status == 200) {
        setRequestOnSendOtp(res.data.otpInfo);
        if (otpCompRef.current) {
          otpCompRef.current.start();
        }
      } else {
        // Alert.alert(res.message, '', [
        //   {
        //     text: 'Ok',
        //     onPress: () => {
        //       // goBack();
        //     },
        //   },
        // ]);
      }
    } catch (error: any) {
      Alert.alert(error.message || '', '', [
        {
          text: 'Ok',
          onPress: () => {
            // goBack();
          },
        },
      ]);
    } finally {
      setLoadingResend(false);
    }
  };

  const onConfirm = async () => {
    try {
      setLoadingConfim(true);
      const res = await apiAuth.confirm({
        ...requestOnSendOtp,
        otp,
      });
      console.log('onConfirm', res);
      if (res.status == 200) {
        if (params.data.flowApp == 'ForgotPassword') {
          navigate('SetPasswordScreen', {
            data: {
              username: params.data.username,
            },
          });
        }
        //success
        navigate('LoginScreen');
      } else {
        Alert.alert(res.message, '', [
          {
            text: 'Ok',
            onPress: () => {
              // goBack();
            },
          },
        ]);
      }
    } catch (error: any) {
      Alert.alert(error.message || '', '', [
        {
          text: 'Ok',
          onPress: () => {
            // goBack();
          },
        },
      ]);
      // show error
    } finally {
      setLoadingConfim(false);
    }
  };

  const onForgetPassConfirm = async () => {
    try {
      setLoadingConfim(true);
      const res = await apiAuth.forgotPassConfirm({
        ...requestOnSendOtp,
        otp,
      });
      console.log('onConfirm', res);
      if (res.status == 200) {
        navigate('SetPasswordScreen', {
          data: {
            username: params.data.username,
            otpTransId: requestOnSendOtp.otpTransId,
            flowApp: params.data.flowApp,
          },
        });
      } else {
        Alert.alert(res.message, '', [
          {
            text: 'Ok',
            onPress: () => {
              // goBack();
            },
          },
        ]);
      }
    } catch (error: any) {
      Alert.alert(error.message || '', '', [
        {
          text: 'Ok',
          onPress: () => {
            // goBack();
          },
        },
      ]);
      // show error
    } finally {
      setLoadingConfim(false);
    }
  };

  return (
    <Div
      screen={true}
      alignItems={'center'}
      justifyContent={'center'}
      paddingHorizontal={10}>
      <Div
        minHeight={300}
        paddingBottom={10}
        width={'100%'}
        borderRadius={20}
        flexDirection={'column'}
        alignItems={'center'}
        backgroundColor={Ecolors.white}>
        <Div
          flexDirection={'row'}
          alignItems={'center'}
          paddingHorizontal={10}
          paddingTop={5}
          justifyContent={'space-between'}>
          <Div widthHeight={30} />
          <Div flex={1} alignItems={'center'} justifyContent={'center'}>
            <Label size={16} color={Ecolors.black} fontWeight={'600'}>
              Xác thực giao dịch
            </Label>
          </Div>
          <Button
            onPress={() => {
              goBack();
            }}>
            <ImageView
              source={Icons.close}
              widthHeight={30}
              tintColor={Ecolors.gray}
            />
          </Button>
        </Div>
        <Label
          marginTop={10}
          size={15}
          textAlign={'center'}
          color={Ecolors.gray}>
          {`Vui lòng nhập mã xác thực (OTP) đã được gửi đến số điện thoại ${
            params.data.username || params.data.phone || ''
          }`}
        </Label>
        <OtpComp
          ref={otpCompRef}
          maxTime={(requestOnSendOtp?.expiredDurationInMinutes || 0) * 60}
          otp={otp}
          setOtp={setOtp}
          isInTime={isInTime}
          setIsInTime={setIsIntime}
        />
        <ButtonBorder
          loading={loadingConfirm}
          onPress={() => {
            if (isInTime && !loadingConfirm) {
              if (params.data.flowApp == 'ForgotPassword') {
                onForgetPassConfirm();
                return;
              }
              onConfirm();
            }
          }}
          isNoColor={!isInTime}
          title={'Xác thực'}
        />

        <ButtonBorder
          marginTop={10}
          loading={loadingResend}
          onPress={() => {
            if (!isInTime && !loadingResend) {
              onResendOtp();
            }
          }}
          isNoColor={isInTime}
          title={'Gửi lại OTP'}
        />
      </Div>
    </Div>
  );
}

export default React.memo(OtpRequestModal);
