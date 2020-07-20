import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';

import {AppNavigation, useLinking} from './navigation';
import {AppLoading} from './utils';

const AppStack = createStackNavigator();

export default function App(props) {

  const containerRef = React.useRef();
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const {getInitialState} = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());
        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'Bold': require('../assets/fonts/OpenSans-Bold.ttf'),
          'SemiBold': require('../assets/fonts/OpenSans-SemiBold.ttf')
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="rgba(0, 0, 0, 0.1)" />
        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
          <AppStack.Navigator headerMode={'none'}>
            <AppStack.Screen name="Root" component={AppNavigation} />
          </AppStack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1'
  }
});
