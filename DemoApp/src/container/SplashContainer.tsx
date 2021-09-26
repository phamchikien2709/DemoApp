import {Div, Label} from 'components';
import {Ecolors} from 'constant';
import React from 'react';

function SplashContainer() {
  return (
    <Div flex={1} alignItems={'center'} justifyContent={'center'}>
      <Label size={16} fontWeight={'bold'} color={Ecolors.blue}>
        Loading
      </Label>
    </Div>
  );
}

export default React.memo(SplashContainer);
