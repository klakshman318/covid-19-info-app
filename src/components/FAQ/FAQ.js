import React from 'react';
import {Platform, LayoutAnimation, View, FlatList, UIManager} from 'react-native';

import FAQListItem from './FAQListItem';

const accordionData = require('./faqData.json');

const formatData = (data) => {
    const accordionData = (data || []).map((item, index) => {
        return {
            _id: index,
            expanded: false,
            ...item
        };
    });
    return accordionData;
}

const formattedData = formatData(accordionData);

class FAQ extends React.PureComponent {

    constructor() {
        super();
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true)
        }
        this.state = { 
            accordionInfo: [...formattedData] 
        }
    }

    update_Layout = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const data = this.state.accordionInfo.map((item) => {
            const newItem = Object.assign({}, item);
            if(item._id === index) {
                return {
                    ...newItem,
                    expanded: !newItem.expanded
                }
            }
            return {
                ...newItem,
                expanded: false
            };
        });
        this.setState({
            accordionInfo: data
        });
    }

    render() {
        return (
            <View style={{flex:1, marginTop:8}}>
                <FlatList 
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingHorizontal:12}}
                    data={this.state.accordionInfo}
                    renderItem={({ item }) => <FAQListItem handleOnPressItem={this.update_Layout} data={item} />}
                    keyExtractor={(item, index) => item._id ? item._id : index}
                />
            </View>
        );
    }
}

export default FAQ;