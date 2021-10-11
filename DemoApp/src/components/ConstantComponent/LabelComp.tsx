import styled from 'styled-components';
import {StyleProp, TextStyle} from 'react-native';
import {Text} from 'react-native';
import {ReactFragment} from 'react';
import {heightScale, widthScale, fontScale} from 'utils';

type typeColor = '#000000' | '#FFFFFF' | 'red';
type textAlign = 'auto' | 'left' | 'right' | 'center' | 'justify';
type fontWeight =
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export type ILabelProps = {
  size?: number;
  children?: string | ReactFragment | any;
  color?: string | typeColor;
  style?: StyleProp<TextStyle>;
  textAlign?: textAlign;
  marginTop?: number;
  marginLeft?: number;
  marginBottom?: number;
  marginRight?: number;
  numberOfLines?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  fontWeight?: fontWeight;
};

export const ComponentLable = styled(Text)`
  font-size: ${({size}: ILabelProps) => fontScale(size || 15)}px;
  color: ${({color}: ILabelProps) => color || '#000000'};
  font-weight: ${({fontWeight}: ILabelProps) => fontWeight};
  text-align: ${({textAlign}: ILabelProps) => textAlign || 'left'};
  margin: ${({marginTop, marginRight, marginBottom, marginLeft}: ILabelProps) =>
    `${heightScale(marginTop || 0)}px ${widthScale(
      marginRight || 0,
    )}px ${heightScale(marginBottom || 0)}px ${widthScale(marginLeft || 0)}px`};
`;

ComponentLable.defaultProps = {
  size: 15,
  textAlign: 'left',
  fontWeight: '400',
};
