import {Button, Div, ImageView, Input, Label} from 'components';
import {Ecolors, Icons} from 'constant';
import React, {useState} from 'react';
import {KeyboardTypeOptions} from 'react-native';

interface PropsInputItem {
  isShowAndHide?: boolean;
  isError?: boolean;
  isInput?: boolean;
  onChangeText?: (evt: string) => void;
  value?: string;
  placeholder?: string;
  marginTop?: number;
  marginHorizontal?: number;
  keyboardType?: KeyboardTypeOptions;
  onSubmitEditing?: () => void;
}

function InputItem({
  onChangeText,
  value = '',
  placeholder = '',
  isShowAndHide = false,
  isError = false,
  isInput = true,
  marginTop = 0,
  keyboardType = 'name-phone-pad',
  marginHorizontal = 30,
  onSubmitEditing,
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
      backgroundColor={isInput ? 'transparent' : Ecolors.gray2x}
      paddingRight={isShowAndHide ? 5 : 15}
      marginTop={marginTop}>
      {isInput ? (
        <Input
          onSubmitEditing={() => onSubmitEditing && onSubmitEditing()}
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
      ) : (
        <Div marginVertical={10}>
          <Label size={15} color={Ecolors.textColor}>
            {value || ''}
          </Label>
        </Div>
      )}
      {isShowAndHide && (
        <Button
          onPress={onChangeStatus}
          alignItems={'center'}
          justifyContent={'center'}>
          <ImageView
            tintColor={Ecolors.gray}
            source={secureTextEntry ? Icons.eyeClose : Icons.eyeOpen}
            widthHeight={22}
          />
        </Button>
      )}
      {isError && (
        <ImageView
          tintColor={Ecolors.red}
          source={Icons.error}
          widthHeight={22}
        />
      )}
    </Div>
  );
}

export default React.memo(InputItem);
