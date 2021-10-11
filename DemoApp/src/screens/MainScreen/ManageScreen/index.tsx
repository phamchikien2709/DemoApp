import {Button, Div, Label} from 'components';
import React from 'react';
import {navigate} from 'services';

function ManageScreen() {
  return (
    <Div flex={1} alignItems={'center'} justifyContent={'center'}>
      <Button
        onPress={() => {
          navigate('SearchModal');
        }}>
        <Label>ManageScreen</Label>
      </Button>
    </Div>
  );
}

export default React.memo(ManageScreen);
