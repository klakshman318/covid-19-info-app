import React from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';
import HelplineListItem from './HelplineListItem';
import {openBrowserAsync} from 'expo-web-browser';

const helplineNumbers = require('./helplineData.json');

class Helpline extends React.PureComponent {

    renderHeader() {
        return (
            <View style={styles.getStartedContainer}>
                <Text style={{fontFamily:'SemiBold', fontSize:18}}>Indian Helpline:</Text>
                <View style={{marginVertical:6}} />
                <Text style={{fontFamily:'SemiBold', color:'rgba(0,0,0,0.4)', fontSize:14}}>Indian government and Ministry of Health &amp; Family Welfare has provided the following helpline numbers of States.</Text>
            </View>
        );
    }

    handleOnPressNumber = (dataText) => {
        openBrowserAsync(dataText);
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    ListHeaderComponent={this.renderHeader()}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingHorizontal:12}}
                    data={helplineNumbers}
                    renderItem={({ item }) => <HelplineListItem handleOnPressNumber={this.handleOnPressNumber} {...item} />}
                    keyExtractor={(item, index) => item._id ? item._id : index}
                />
            </View>
        );
    }
}

Helpline.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    getStartedContainer: {
        marginVertical:12,
        paddingHorizontal: 12
    }
});

export default Helpline;


