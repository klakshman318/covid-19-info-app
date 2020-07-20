import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import Ripple from 'react-native-material-ripple';

class FAQListItem extends React.PureComponent {

    constructor() {
        super();
        this.state = {
            newHeight: 0
        }
    }

    UNSAFE_componentWillReceiveProps(newProps) {
        if (newProps.data.expanded) {
            this.setState(() => {
                return {
                    newHeight: null
                }
            });
        } else {
            this.setState(() => {
                return {
                    newHeight: 0
                }
            });
        }
    }

    render() {
        const {data, handleOnPressItem} = this.props;
        const {newHeight} = this.state;
        return (
            <View style={styles.accordionItemContainer}>
                <Ripple onPress={() => handleOnPressItem(data._id)} style={styles.headerContainer}>
                    <View style={{flex:0.9}}>
                        <Text style={styles.headTextStyle}>{data.title}</Text>
                    </View>
                    <View style={{flex:0.1, alignItems:'flex-end'}}>
                        <Ionicons
                            size={24}
                            color={'rgba(0,0,0,0.7)'}
                            name={data.expanded ? 'ios-arrow-dropup-circle' : 'ios-arrow-dropdown'}
                        />
                    </View>
                </Ripple>
                <View style={{height:newHeight,paddingHorizontal:16, backgroundColor:'white', overflow:'hidden'}}>
                    <Text style={styles.accordionDescription}>
                        {data.description}
                    </Text>
                    <View style={{marginVertical:8}} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    accordionDescription: {
        fontSize: 14,
        color: 'rgba(0,0,0,0.6)',
        lineHeight: 22
    },
    headTextStyle: {
        fontFamily:'SemiBold',
        color:'#2d2d2d',
        fontSize: 15
    },
    accordionItemContainer: {
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

export default FAQListItem;