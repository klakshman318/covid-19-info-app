import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../components/Home';
import TestCentres, {TestCentresByState} from '../components/TestCentres';
import Statistics from '../components/Statistics';
import FAQ from '../components/FAQ';
import Helpline from '../components/Helpline';

const AppStack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Home';

function AppNavigation({navigation, route}) {

  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  // navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <AppStack.Navigator 
      initialRouteName={INITIAL_ROUTE_NAME}
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: 'black',
        headerStyle: { backgroundColor: '#f1f1f1' },
      }}
    >
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'COVID-19'
        }}
      />
      <AppStack.Screen
        name="FAQ"
        component={FAQ}
        options={{
          title: 'COVID-19'
        }}
      />
      <AppStack.Screen
        name="Helpline"
        component={Helpline}
        options={{
          title: 'COVID-19'
        }}
      />
      <AppStack.Screen
        name="Statistics"
        component={Statistics}
        options={{
          title: 'COVID-19'
        }}
      />
      <AppStack.Screen
        name="TestCentres"
        component={TestCentres}
        options={{
          title: 'COVID-19'
        }}
      />
      <AppStack.Screen
        name="TestCentresByState"
        component={TestCentresByState}
        options={{
          title: 'COVID-19'
        }}
      />
    </AppStack.Navigator>
  );
}

export default AppNavigation;
