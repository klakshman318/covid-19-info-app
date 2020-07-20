import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import Ripple from 'react-native-material-ripple';

const phoneIcon = require('../../../assets/images/phone.png');
const emailIcon = require('../../../assets/images/email.png');

class HelplineListItem extends React.PureComponent {

    handleOnPressNumber = () => {
        const {text, email} = this.props;
        let dataTypeText = 'tel:';
        if(email) {
            dataTypeText = 'mailto:';
        }
        this.props.handleOnPressNumber(dataTypeText+text);
    }

    render() {
        const {title, text, email} = this.props;
        return(
            <Ripple onPress={this.handleOnPressNumber} style={{flexDirection:'row', paddingHorizontal: 12, borderBottomWidth: StyleSheet.hairlineWidth, paddingVertical:16, borderColor:'rgba(0,0,0,0.1)', justifyContent:'center', alignItems:'center'}}>
                <View style={{borderRadius:48/2, alignItems:'center', justifyContent:'center', backgroundColor:'rgba(0,0,0,0.1)', width:48, height:48}}>
                    <Image
                        style={{
                            width: 24,
                            height: 24,
                            resizeMode: 'contain',
                            opacity: email ? 0.7 : 1
                        }}
                        source={email ? emailIcon : phoneIcon}
                    />
                </View>
                <View style={{marginLeft:12, flex:1}}>
                    <Text style={{fontSize:14, color:'rgba(0,0,0,0.7)', fontFamily:'SemiBold'}}>{title}</Text>
                    <Text style={{fontSize:16, fontFamily:'SemiBold'}}>{text}</Text>
                </View>
            </Ripple>
        );
    }
}

export default HelplineListItem;