import {Button, Div, Label} from 'components';
import React from 'react';
import {navigate} from 'services';

function InvestMentScreen() {
  return (
    <Div flex={1} alignItems={'center'} justifyContent={'center'}>
      <Button
        onPress={() => {
          navigate('SearchModal');
        }}>
        <Label>InvestMentScreen</Label>
      </Button>
    </Div>
  );
}

export default React.memo(InvestMentScreen);
