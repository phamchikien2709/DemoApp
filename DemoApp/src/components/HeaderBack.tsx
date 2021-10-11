import {Button, Div, ImageView, Label} from 'components';
import {Ecolors, Icons} from 'constant';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {goBack} from 'services';

interface IpropsHeaderBack {
  title?: string;
}

function HeaderBack(props: IpropsHeaderBack) {
  const insests = useSafeAreaInsets();

  return (
    <Div
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      borderBottomWidth={1}
      borderBottomColor={Ecolors.blue}
      paddingBottom={10}
      paddingTop={insests.top}>
      <Button
        onPress={() => {
          goBack();
        }}
        width={50}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'center'}>
        <ImageView
          tintColor={Ecolors.blue}
          source={Icons.back}
          widthHeight={30}
        />
      </Button>
      <Div
        flex={1}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'center'}>
        <Label
          numberOfLines={1}
          size={18}
          fontWeight={'600'}
          color={Ecolors.blue}>
          {props.title || ''}
        </Label>
      </Div>
      <Div width={50} />
    </Div>
  );
}
export default React.memo(HeaderBack);
