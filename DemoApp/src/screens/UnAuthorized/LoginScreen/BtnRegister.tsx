import {Button, Div, Label} from 'components';
import {Ecolors} from 'constant';
import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';

interface PropsBtnRegister {
  title?: string;
  onPress?: () => void;
  marginTop?: number;
  loading?: boolean | undefined;
}

function BtnRegister({
  title = '',
  onPress,
  loading = false,
  marginTop = 30,
}: PropsBtnRegister) {
  return (
    <Div
      width={'100%'}
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'center'}
      marginTop={marginTop}>
      <Button
        overflow={'hidden'}
        alignItems={'center'}
        justifyContent={'center'}
        backgroundColor={Ecolors.blue}
        width={200}
        height={40}
        borderRadius={50}
        onPress={() => onPress && onPress()}>
        <Label fontWeight={'bold'} color={Ecolors.white} size={15}>
          {title}
        </Label>
        {loading && (
          <Div
            style={StyleSheet.absoluteFill}
            alignItems={'center'}
            justifyContent={'center'}
            backgroundColor={Ecolors.transparentLoading}>
            <ActivityIndicator size={'small'} color={Ecolors.white} />
          </Div>
        )}
      </Button>
    </Div>
  );
}

export default React.memo(BtnRegister);
