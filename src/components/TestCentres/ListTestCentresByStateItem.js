import React from 'react';
import {StyleSheet, View, Text, Linking} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import Ripple from 'react-native-material-ripple';

class ListTestCentresByStateItem extends React.PureComponent {

    handleOnPressItem = (address) => {
        this.props.handleOnPressItem(address);
    }

    render() {
        const { title = '', city = '', address = '' } = this.props;
        return (
            <View style={styles.testCentreContainer}>
                <Ripple onPress={() => this.handleOnPressItem(address)} style={styles.headerContainer}>
                    <View style={{flex:1}}>
                        <Text numberOfLines={2} style={styles.headTextStyle}>{(title).trim()}</Text>
                        <Text style={{fontSize:13, fontFamily:'SemiBold', color:'#6e6e6e'}}>{(address).trim()}</Text>
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:8}}>
                            <View style={{paddingHorizontal:12, paddingVertical:6, backgroundColor:'#eeeeee', borderWidth:StyleSheet.hairlineWidth, borderRadius:12, borderColor:'#eeeeee'}}>
                                <Text style={{fontSize:12, fontFamily:'SemiBold', color:'#656565'}}>{(city).trim()}</Text>
                            </View>
                            <Ionicons
                                size={26}
                                color={'#52b34c'}
                                name={'md-map'}
                            />
                        </View>
                        
                    </View>
                    {/* <View style={{flex:0.1, justifyContent:'center', alignItems:'flex-end'}}>
                        <Ionicons
                            size={24}
                            color={'rgba(0,0,0,0.3)'}
                            name={'md-map'}
                        />
                    </View> */}
                </Ripple>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headTextStyle: {
        fontFamily:'SemiBold',
        color:'#2d2d2d',
        fontSize: 16
    },
    testCentreContainer: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'rgba(0,0,0,0.3)',
        borderRadius:8,
        marginVertical: 5,
        overflow:'hidden'
    },
    headerContainer: {
        padding: 12,
        backgroundColor: 'white',
        flexDirection:'row'
    }
});

export default ListTestCentresByStateItem;