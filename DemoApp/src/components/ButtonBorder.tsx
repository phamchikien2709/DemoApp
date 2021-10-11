import {Button, Div, Label} from 'components';
import {Ecolors} from 'constant';
import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';

interface PropsButtonBorder {
  title?: string;
  onPress?: () => void;
  marginTop?: number;
  loading?: boolean | undefined;
  isNoColor?: boolean;
  width?: number;
}

function ButtonBorder({
  title = '',
  onPress,
  loading = false,
  isNoColor = false,
  marginTop = 30,
  width = 200,
}: PropsButtonBorder) {
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
        backgroundColor={isNoColor ? Ecolors.white : Ecolors.blue}
        width={width}
        height={40}
        borderRadius={10}
        borderWidth={isNoColor ? 1 : 0}
        borderColor={Ecolors.black}
        onPress={() => onPress && onPress()}>
        <Label
          fontWeight={'bold'}
          color={isNoColor ? Ecolors.textColor : Ecolors.white}
          size={15}>
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

export default React.memo(ButtonBorder);
