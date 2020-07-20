import {useLinking} from '@react-navigation/native';
// import {Linking} from 'react-native';

export default function(containerRef) {
  // console.log(Linking.getInitialURL('/'), 'INIT');
  return useLinking(containerRef, {
    prefixes: ['https://covid19india.com', 'covid19infohub://'],
    config: {
      Root: {
        path: 'root',
        screens: {
          Home: 'home',
          TestCentres: 'testcentres',
          Statistics: 'statistics',
          FAQ: 'faq',
          Helpline: 'helpline',
        },
      },
    },
  });
}
