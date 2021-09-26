import {Button, Div, Input} from 'components';
import {Ecolors} from 'constant';
import React, {useState} from 'react';
import {KeyboardTypeOptions} from 'react-native';

interface PropsInputItem {
  isShowAndHide?: boolean;
  onChangeText?: (evt: string) => void;
  value?: string;
  placeholder?: string;
  marginTop?: number;
  marginHorizontal?: number;
  keyboardType?: undefined | KeyboardTypeOptions;
}

function InputItem({
  onChangeText,
  value = '',
  placeholder = '',
  isShowAndHide = false,
  marginTop = 0,
  keyboardType = 'name-phone-pad',
  marginHorizontal = 30,
}: PropsInputItem) {
  const [secureTextEntry, setSecureTextEntry] = useState(isShowAndHide);

  const onChangeStatus = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <Div
      flexDirection={'row'}
      alignItems={'center'}
      borderWidth={0.5}
      borderRadius={5}
      justifyContent={'flex-start'}
      marginHorizontal={marginHorizontal}
      paddingLeft={15}
      paddingRight={isShowAndHide ? 5 : 15}
      marginTop={marginTop}>
      <Input
        secureTextEntry={secureTextEntry}
        padding={0}
        margin={0}
        flex={1}
        marginVertical={10}
        width={'100%'}
        height={'100%'}
        fontSize={15}
        textAlign={'left'}
        color={Ecolors.textColor}
        placeholder={placeholder}
        placeholderTextColor={Ecolors.placeHoderColor}
        value={value}
        numberOfLine={1}
        keyboardType={keyboardType}
        onChangeText={(evt: string) => onChangeText && onChangeText(evt)}
      />
      {isShowAndHide && (
        <Button
          onPress={onChangeStatus}
          widthHeight={20}
          borderRadius={100}
          borderWidth={0.7}
          backgroundColor={secureTextEntry ? Ecolors.blue : Ecolors.white}
          borderColor={
            secureTextEntry ? 'transparent' : Ecolors.textColor
          }></Button>
      )}
    </Div>
  );
}

export default React.memo(InputItem);
