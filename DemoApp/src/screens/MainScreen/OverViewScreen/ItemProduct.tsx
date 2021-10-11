import {Button, Div, Label} from 'components';
import {Ecolors} from 'constant';
import React from 'react';
import {navigate} from 'services';
import {converNumber} from 'utils';

interface IProps {
  data: IITemProduct;
}
interface IContentSpace {
  title?: string | number;
  decription?: string | number;
  isDescriptionBold?: boolean;
  color?: string;
  imgColor?: string;
}

const ContentSpace = ({
  title,
  decription,
  isDescriptionBold,
  color,
  imgColor,
}: IContentSpace) => {
  return (
    <Div
      flexDirection={'row'}
      alignItems={'center'}
      paddingVertical={5}
      justifyContent={'space-between'}>
      <Div flex={1} alignItems={'center'} flexDirection={'row'}>
        {imgColor && (
          <Div widthHeight={15} marginRight={5} backgroundColor={imgColor} />
        )}
        <Label
          size={15}
          numberOfLines={1}
          color={Ecolors.black}
          fontWeight={'600'}>
          {title || ''}
        </Label>
      </Div>
      <Label
        size={14}
        color={color || Ecolors.black}
        fontWeight={isDescriptionBold ? '700' : '500'}>
        {decription || ''}
      </Label>
    </Div>
  );
};

function ItemProduct(props: IProps) {
  const {data} = props;

  const gotoDetails = () => {
    navigate('ProductDetailsModal', {
      id: data.id,
    });
  };
  return (
    <Button
      onPress={() => {
        gotoDetails();
      }}>
      <Div
        marginHorizontal={10}
        borderWidth={0.5}
        borderColor={Ecolors.gray}
        borderRadius={10}
        padding={10}>
        <ContentSpace
          imgColor={data.color}
          title={data.name}
          isDescriptionBold={true}
          decription={`${Math.round((data.ratePercent || 0) * 100) / 100}%`}
        />
        <ContentSpace
          isDescriptionBold={true}
          title={`Tổng số CCQ`}
          decription={`${converNumber(data.holdingVolume)}CCQ`}
        />
        <ContentSpace
          title={`NAV kỳ trước`}
          color={
            data.interestOrHole && data.interestOrHole < 0
              ? Ecolors.red
              : Ecolors.green
          }
          decription={`${converNumber(data.navCurrent)}đ`}
        />
        <ContentSpace
          title={`Tổng giá trị đầu tư trung bình`}
          isDescriptionBold={true}
          decription={`${converNumber(data.sumOfValueNavInvested)}đ`}
        />
        <ContentSpace
          title={`Giá mua trung bình CCQ`}
          decription={`${converNumber(data.navInvested)}đ`}
        />
        <ContentSpace
          title={`Giá trị hiện tại`}
          isDescriptionBold={true}
          decription={`${converNumber(data.sumOfValueNavCurrent)}đ`}
        />
        <ContentSpace
          title={`Lời/Lỗ`}
          isDescriptionBold={true}
          color={
            data.interestOrHole && data.interestOrHole < 0
              ? Ecolors.red
              : Ecolors.green
          }
          decription={`${Math.round((data.interestOrHole || 0) * 100) / 100}%`}
        />
      </Div>
    </Button>
  );
}

export default React.memo(ItemProduct);
