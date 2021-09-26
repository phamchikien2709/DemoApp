import React from 'react';
import {ComponentLable, ILabelProps} from './ConstantComponent/LabelComp';

function Label(props: ILabelProps) {
  return (
    <ComponentLable
      numberOfLines={props.numberOfLines}
      allowFontScaling={false}
      {...props}>
      {props.children && props.children}
    </ComponentLable>
  );
}

export default React.memo(Label);
