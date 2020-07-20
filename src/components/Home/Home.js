import React from 'react';
import {FlatList, Animated, Easing, StyleSheet, Text, View} from 'react-native';
import {openBrowserAsync} from 'expo-web-browser';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import HomeMenuItem from './HomeMenuItem';
import SVGIcon from './CoronaSVGIcon';

const menuItems = [
  // {
  //   _id:'1',
  //   title: 'Symptom Checker',
  //   navigateTo: '',
  //   imageName: require('../../../assets/images/medical-report.png'),
  //   description: 'Checks for COVID-19 symptoms and pertinent risk factors'
  // },
  {
    _id:'4',
    title: 'Helpline',
    navigateTo: 'Helpline',
    imageName: require('../../../assets/images/phone.png'),
    description: 'National and State Helpline numbers'
  },
  {
    _id:'5',
    title: 'FAQ',
    navigateTo: 'FAQ',
    imageName: require('../../../assets/images/faq.png'),
    description: 'Provides answers to common questions about COVID-19'
  },
  {
    _id:'2',
    title: 'Test Centres',
    navigateTo: 'TestCentres',
    imageName: require('../../../assets/images/healthcare-and-medical.png'),
    description: 'Testing centres across india for COVID-19'
  },
  {
    _id:'3',
    title: 'Statistics',
    navigateTo: 'Statistics',
    imageName: require('../../../assets/images/healthcare-and-medical-heart.png'),
    description: 'National and World Statistics for COVID-19'
  }
  // {
  //   _id:'6',
  //   isEmpty: true
  // }
];

function handleAllInfoPress() {
  openBrowserAsync('https://www.who.int/emergencies/diseases/novel-coronavirus-2019');
}

function LandingPageContainer() {
    const learnMoreButton = (
      <Text onPress={handleAllInfoPress} style={styles.helpLinkText}>
        More info here
      </Text>
    );
    return (
      <View>
        <Text style={styles.mainContentStyle}>
          Coronavirus disease (COVID-19) is an infectious disease caused by a new virus that had not been previously identified in humans. Please use the below options to learn more about the disease and keep yourself updated.
        </Text>
        <View style={{flexDirection:'row', justifyContent:'center'}}>
          <MaterialCommunityIcons name={'ray-start-arrow'} size={24} color={'#2e78b7'} />
          {learnMoreButton}
        </View>
      </View>
    );
  }

class Home extends React.Component {

  constructor() {
    super();
    this.state = { 
        spinAnim: new Animated.Value(0) 
    }
  }

  componentDidMount(){
    Animated.loop(Animated.timing(
      this.state.spinAnim,
      {
        toValue: 1,
        duration: 8000,
        easing: Easing.linear,
        useNativeDriver: true
      }
    )).start();
  }

  handleNavigateTo = (routeName) => {
    this.props.navigation.navigate(routeName);
  }

  renderHeader(spin) {
    return (
      <View>
        <View style={styles.welcomeContainer}>
          <Animated.View style={{transform: [{rotate: spin}]}}>
            <SVGIcon width={300} height={169} style={styles.welcomeImage} />
          </Animated.View>
        </View>
        <View style={styles.getStartedContainer}>
          <LandingPageContainer />
        </View>
        <View style={{marginVertical:12}} />
      </View>
    );
  }

  render() {
    const spin = this.state.spinAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
    return (
      <View style={styles.container}>
        <FlatList 
          ListHeaderComponent={this.renderHeader(spin)}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal:12}}
          data={menuItems}
          numColumns={2}
          renderItem={({ item }) => <HomeMenuItem handleNavigateTo={this.handleNavigateTo} {...item} />}
          keyExtractor={(item, index) => item._id ? item._id : index}
        />
      </View>
    );  
  }
}

Home.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContentStyle: {
    marginBottom: 7,
    color: 'rgba(0,0,0,0.6)',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 5,
  },
  welcomeImage: {
    width: 250,
    height: 141,
    resizeMode: 'contain'
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 12,
  },
  helpLinkText: {
    fontSize: 15,
    fontFamily:'Bold',
    color: '#2e78b7',
    // textDecorationLine: 'underline'
  }
});

export default Home;
