import {appScreen} from 'constant/appScreen';
import * as React from 'react';

export const navigationRef: any = React.createRef();

export function navigate(name: appScreen, params?: object) {
  navigationRef.current?.navigate(name, params);
}

export function goBack() {
  navigationRef.current?.goBack();
}
