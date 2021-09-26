import {Button, Div, Label} from 'components';
import React from 'react';
import {navigate} from 'services';

function ProfileScreen() {
  return (
    <Div flex={1} alignItems={'center'} justifyContent={'center'}>
      <Button
        onPress={() => {
          navigate('SearchModal');
        }}>
        <Label>profile screen</Label>
      </Button>
    </Div>
  );
}

export default React.memo(ProfileScreen);
