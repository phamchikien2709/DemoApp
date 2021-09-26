import React from 'react';
import {parseMargin, parsePadding} from 'utils/parseOptions';
import {ComponentButton, IPropsButton} from './ConstantComponent/ButtonComp';
// readme

function Button(props: IPropsButton) {
  // debounce

  return (
    <ComponentButton
      {...parsePadding(props)}
      {...parseMargin(props)}
      {...props}
      ref={props.buttonRef && props.buttonRef}>
      {props.children && props.children}
    </ComponentButton>
  );
}

export default React.memo(Button);
