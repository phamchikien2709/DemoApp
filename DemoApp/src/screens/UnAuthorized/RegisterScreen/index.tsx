import {Button, Label} from 'components';
import React from 'react';
import {View} from 'react-native';
import {goBack} from 'services/navigation';

function RegisterScreen() {
  return (
    <View>
      <Button
        onPress={() => {
          goBack();
        }}
        paddingTop={100}
        paddingHorizontal={20}>
        <Label color={'red'}>213123213</Label>
      </Button>
    </View>
  );
}

export default React.memo(RegisterScreen);
