import {Button, Div} from 'components';
import React from 'react';
import {goBack} from 'services';

function ProductDetailsModal() {
  const goToBack = () => {
    goBack();
  };
  return (
    <Button
      flex={1}
      backgroundColor={'red'}
      onPress={() => {
        goToBack();
      }}></Button>
  );
}

export default React.memo(ProductDetailsModal);
