import React from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';
import{openBrowserAsync} from 'expo-web-browser';
import Ripple from 'react-native-material-ripple';

import ListTestCentresByStateItem from './ListTestCentresByStateItem';

class ListTestCentresByState extends React.PureComponent {

    renderEmptyData() {
        const {data, isFetched} = this.props;
        if(isFetched && data && data.length === 0) {
            return (
                <View style={{alignItems:'center', flex:1, justifyContent:'center'}}>
                    <Text style={{fontSize:18, fontFamily:'SemiBold', color:'rgba(0,0,0,0.9)'}}>Something Went Wrong!</Text>
                    <View style={{marginVertical:2}} />
                    <Text style={{fontSize:15, fontFamily:'SemiBold', color:'rgba(0,0,0,0.5)'}}>We are having trouble displaying data.</Text>
                    <View style={{marginVertical:6}} />
                    <Ripple onPress={() => this.props.loadData()} style={{borderRadius:8, borderColor:'#5e5e5e', borderWidth: StyleSheet.hairlineWidth, paddingVertical:8, paddingHorizontal:12}}>
                        <Text style={{color:'#5e5e5e', fontSize:16}}>Try to refresh again.</Text>
                    </Ripple>
                </View>
            );
        }
        return null;
    }

    handleOnPressItem = (address) => {
        openBrowserAsync(`https://www.google.com/maps/search/?api=1&query=${address.trim()}`);
    }

    onRefresh = () => {
        this.props.loadData();
    }

    renderHeader() {
        const {stateName} = this.props;
        return (
            <View style={styles.headTitleContainer}>
                <Text style={{fontFamily:'SemiBold', fontSize:18}}>{`${(stateName).trim()} :`}</Text>
                <Text style={{fontFamily:'SemiBold', color:'rgba(0,0,0,0.4)', fontSize:14}}>Statewise testing centres for COVID-19.</Text>
            </View>
        );
    }

    handleSourcePress() {
        openBrowserAsync('https://covid.icmr.org.in/');
    }

    renderFooter() {
        let currentDate = new Date();
        const {data, isFetched} = this.props;
        if(isFetched && data && data.length !== 0) {
            return (
                <View style={{padding:12, alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontFamily:'SemiBold', fontSize:12}}>Last Updated at: {new Date(parseInt(currentDate.setDate(currentDate.getDate() - 1))).toLocaleDateString()}, 2:00 PM</Text>
                    <Text style={{fontFamily:'SemiBold', fontSize:12}}>Source: <Text style={{color:'#404cd8'}} onPress={this.handleSourcePress}>https://covid.icmr.org.in/</Text></Text>
                </View>
            );
        }
        return null;
    }

    render() {
        const {data, isFetched} = this.props;
        return (
            <View style={styles.container}>
                <FlatList
                    ListHeaderComponent={this.renderHeader()}
                    ListFooterComponent={this.renderFooter()}
                    data={data}
                    onRefresh={this.onRefresh}
                    refreshing={!isFetched}
                    ListEmptyComponent={this.renderEmptyData()}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingHorizontal:12}}
                    renderItem={({ item }) => <ListTestCentresByStateItem handleOnPressItem={this.handleOnPressItem} {...item} />}
                    keyExtractor={(item, index) => item.id ? item.id : `${index}`}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headTitleContainer: {
        marginVertical:12
    }
});

export default ListTestCentresByState;