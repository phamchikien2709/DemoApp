import {Div, Input, Label} from 'components';
import {Ecolors} from 'constant';
import React, {useEffect, useImperativeHandle, useRef, useState} from 'react';

const OtpComp = (
  props: {
    maxTime?: number;
    otp?: string;
    isInTime?: boolean;
    setIsInTime?: (r: boolean) => void;
    setOtp?: (r: string) => void;
  },
  ref: any,
) => {
  const [time, setTime] = useState(90);
  useImperativeHandle(ref, () => ({
    start: () => {
      startTimer();
    },
  }));

  const timeInteval: Required<{
    current: any;
  }> = useRef(null);

  useEffect(() => {
    startTimer();
    return () => {
      clearTimer();
    };
  }, []);

  useEffect(() => {
    if (time <= 1) {
      props.setIsInTime && props.setIsInTime(false);
      props.setOtp && props.setOtp('');
      clearTimer();
    }
  }, [time]);

  const startTimer = () => {
    if (timeInteval.current) {
      clearTimer();
    }
    props.setIsInTime && props.setIsInTime(true);
    setTime(props.maxTime || 90);
    timeInteval.current = setInterval(() => {
      setTime(a => a - 1);
    }, 1000);
  };

  const clearTimer = () => {
    if (timeInteval.current) {
      clearInterval(timeInteval.current);
    }
  };

  return (
    <Div
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      flex={1}>
      {props.isInTime ? (
        <>
          <Label
            fontWeight={'600'}
            marginTop={10}
            size={15}
            color={Ecolors.textColor}>
            {`Mã OTP sẽ hết hạn trong vòng ${time}`}
          </Label>
          <Div
            alignItems={'center'}
            justifyContent={'center'}
            overflow={'hidden'}
            borderRadius={10}
            borderWidth={0.5}
            marginTop={10}
            borderColor={Ecolors.gray}>
            <Input
              padding={0}
              margin={0}
              value={props.otp}
              onChangeText={props.setOtp}
              maxLength={6}
              keyboardType={'number-pad'}
              width={200}
              height={40}
              textAlign={'center'}
              fontSize={20}
            />
          </Div>
        </>
      ) : (
        <>
          <Label size={20} color={Ecolors.textColor} fontWeight={'600'}>
            Mã OTP đã hết hạn
          </Label>
        </>
      )}
    </Div>
  );
};

export default React.forwardRef(OtpComp);
