import React from 'react';
import {parseMargin, parsePadding} from 'utils/parseOptions';
import {ComponentInput, IInputProps} from './ConstantComponent/InputComp';
/**
 *
 * @param props
 * padding
 * margin
 * value
 * placehoder
 * placehodertextcolor
 * color
 * fontsize
 * fontweight
 * onchangetext
 * inputref
 * @returns
 */
function Input(props: IInputProps) {
  return (
    <ComponentInput
      {...parsePadding(props)}
      {...parseMargin(props)}
      ref={props.inputRef && props.inputRef}
      {...props}>
      {props.children}
    </ComponentInput>
  );
}

export default React.memo(Input);
