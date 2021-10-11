import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from 'services/navigation';
import {
  mainStackModal,
  mainStackScreen,
  stackSplash,
  alert,
  stackUnAuthorizedScreen,
  stackUnAuthorizedModal,
} from 'screens';
import {useAppSelector} from 'store/hooks';
import {StatusBar} from 'react-native';
import TabContainer from './TabContainer';
import {
  screenOptions,
  translateXOptionsScreen,
  translateYModal,
} from './optionsNavigate';

const Stack = createStackNavigator();

function Navi() {
  const {statusScreen} = useAppSelector(state => state.authen);

  const switchStatusStack = () => {
    switch (statusScreen) {
      case 'unAuthorized': //unauthorized
        return (
          <>
            {stackUnAuthorizedScreen.map((item, _) => (
              <Stack.Screen
                options={translateXOptionsScreen}
                key={item.name}
                name={item.name}
                component={item.component}
              />
            ))}
            {stackUnAuthorizedModal.map((item, _) => (
              <Stack.Screen
                options={translateYModal}
                key={item.name}
                name={item.name}
                component={item.component}
              />
            ))}
          </>
        );

      case 'main': //main
        return (
          <>
            <Stack.Screen
              options={translateXOptionsScreen}
              key={'TabContainer'}
              name={'TabContainer'}
              component={TabContainer}
            />
            {mainStackScreen.map((item, _) => (
              <Stack.Screen
                options={translateXOptionsScreen}
                key={item.name}
                name={item.name}
                component={item.component}
              />
            ))}
            {mainStackModal.map((item, _) => (
              <Stack.Screen
                options={translateYModal}
                key={item.name}
                name={item.name}
                component={item.component}
              />
            ))}
          </>
        );
      case 'splash':
      default:
        // splash
        return stackSplash.map((item, _) => (
          <Stack.Screen
            options={translateXOptionsScreen}
            key={item.name}
            name={item.name}
            component={item.component}
          />
        ));
    }
  };
  return (
    <NavigationContainer independent={true} ref={navigationRef}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        hidden={false}
      />
      <Stack.Navigator
        mode={'modal'}
        screenOptions={screenOptions}
        headerMode={'none'}
        initialRouteName={'LoginScreen'}>
        {switchStatusStack()}
        <Stack.Screen
          options={translateYModal}
          key={alert.name}
          name={alert.name}
          component={alert.component}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default React.memo(Navi);
