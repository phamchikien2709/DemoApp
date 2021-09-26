import React from 'react';
import {parseMargin, parsePadding} from 'utils/parseOptions';
import {ComponentDiv, IPropsDiv} from './ConstantComponent/DivComp';
// readme

function Div(props: IPropsDiv) {
  return (
    <ComponentDiv
      {...parsePadding(props)}
      {...parseMargin(props)}
      {...props}
      ref={props.divRef && props.divRef}>
      {props.children && props.children}
    </ComponentDiv>
  );
}

export default React.memo(Div);
