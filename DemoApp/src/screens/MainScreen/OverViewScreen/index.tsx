import {Button, Div, Label} from 'components';
import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {doGetDashBoard} from 'reducer/home';
import {navigate} from 'services';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {getStoreToken} from 'utils/storage';
import ListProduct from './ListProduct';

function OverViewScreen() {
  const dispatch = useAppDispatch();
  const insest = useSafeAreaInsets();
  const data = useAppSelector(state => state.home.data);

  useEffect(() => {
    getData();
    return () => {};
  }, []);

  const getData = async () => {
    // dispatch(doGetDashBoard());
  };

  return (
    <Div
      paddingTop={insest.top}
      flex={1}
      alignItems={'center'}
      justifyContent={'center'}>
      <ListProduct
        onRefresh={() => {
          dispatch(doGetDashBoard());
        }}
      />
    </Div>
  );
}

export default React.memo(OverViewScreen);
