import {Div} from 'components';
import React, {useCallback} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {useAppSelector} from 'store/hooks';
import ItemProduct from './ItemProduct';

interface IRender {
  item: IITemProduct;
  index: number;
}

function ListProduct(props: {onRefresh?: () => void}) {
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
      refreshControl={
        <RefreshControl
          tintColor={'#fff'}
          refreshing={false}
          onRefresh={() => props.onRefresh && props.onRefresh()}
        />
      }
    />
  );
}

export default React.memo(ListProduct);
