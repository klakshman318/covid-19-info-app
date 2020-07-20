import React from 'react';
import {View, Text, Image} from 'react-native';

import Ripple from 'react-native-material-ripple';

function HomeMenuItem(props) {
    const {isEmpty, handleNavigateTo, navigateTo, imageName, title, description} = props;
    if(isEmpty) {
      return <View style={{padding:12, margin:6, flex:1}} />
    }
    return (
      <Ripple onPress={() => handleNavigateTo(navigateTo)} style={{padding:12, margin:6, flex:1, overflow:'hidden', backgroundColor:'white', borderRadius:12}}>
        {/* <Ionicons 
          name={iconTitle}
          size={28}
          color={'black'}
        /> */}
        <View style={{backgroundColor:'#f2f2f2', width:48, height:48, padding:10, borderRadius:50}}>
          <Image
              style={{width: 28, height: 28, resizeMode: 'contain'}}
              source={imageName}
          />  
        </View>
        <View style={{marginVertical:4}} />
        <Text style={{fontSize:14, fontFamily:'SemiBold'}}>{title}</Text>
        <View style={{marginVertical:2}} />
        <Text style={{fontSize:11, color: 'rgba(0,0,0,0.6)', fontFamily:'SemiBold'}}>{description}</Text>
      </Ripple>
    );
  }

  export default HomeMenuItem;