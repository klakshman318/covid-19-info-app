import React from 'react';
import {ActivityIndicator, ImageBackground, View} from 'react-native';

const BACKGROUND = require('../../assets/images/splash.png');

export default class AppLoading extends React.PureComponent {
    render() {
        return (
            <ImageBackground
                source = {BACKGROUND}
                style = {{
                    alignItems:'center',
                    flex:1,
                    justifyContent:'center'
                }}
            >
                <View style={{padding: 50}}>
                    <ActivityIndicator size="large" color="#333" />
                </View>
            </ImageBackground>
        )
    }
}