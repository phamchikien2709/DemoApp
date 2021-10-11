import {Div} from 'components';
import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import {useAppSelector} from 'store/hooks';
import ItemProduct from './ItemProduct';

interface IRender {
  item: IITemProduct;
  index: number;
}

function ListProduct() {
  const productList = useAppSelector(state => state.home.data.productList);

  const keyExtractor = (item: IITemProduct, index: number) => `key${item.id}`;

  const renderItem = (props: IRender) => {
    return <ItemProduct data={props.item} />;
  };

  const ItemSeparatorComponent = useCallback(() => {
    return <Div height={10} />;
  }, []);
  return (
    <FlatList
      data={productList}
      extraData={productList}
      style={{
        width: '100%',
      }}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparatorComponent}
    />
  );
}

export default React.memo(ListProduct);
