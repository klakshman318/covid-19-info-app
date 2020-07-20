import {AppRegistry, Platform} from 'react-native';
import 'react-native-get-random-values';
import App from './src/App';

AppRegistry.registerComponent('covid19infohub', () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('covid19infohub', { rootTag });
}
