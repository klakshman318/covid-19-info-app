import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import Ripple from 'react-native-material-ripple';

class ListTestCentreItem extends React.PureComponent {

    handleOnPressItem = (stateName) => {
        this.props.handleOnPressItem(stateName);
    }

    render() {
        const { state = '' } = this.props;
        return (
            <View style={styles.testCentreContainer}>
                <Ripple onPress={() => this.handleOnPressItem(state)} style={styles.headerContainer}>
                    <View style={{flex:0.9}}>
                        <Text style={styles.headTextStyle}>{state}</Text>
                    </View>
                    <View style={{flex:0.1, alignItems:'flex-end'}}>
                        <Ionicons
                            size={24}
                            color={'rgba(0,0,0,0.3)'}
                            name={'ios-arrow-dropright-circle'}
                        />
                    </View>
                </Ripple>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headTextStyle: {
        fontFamily:'SemiBold',
        color:'#2d2d2d',
        fontSize: 15
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

export default ListTestCentreItem;