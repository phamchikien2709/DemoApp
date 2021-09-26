import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {mainTab} from 'screens';

const Tab = createBottomTabNavigator();

function TabContainer() {
  return (
    <Tab.Navigator
      lazy={false}
      initialRouteName={'ChatScreen'}
      tabBar={props => <></>}>
      {mainTab.map((item, _) => {
        return (
          <Tab.Screen
            key={item.name}
            name={item.name}
            component={item.component}
          />
        );
      })}
    </Tab.Navigator>
  );
}

export default React.memo(TabContainer);
