import React from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';
import Ripple from 'react-native-material-ripple';

import ListTestCentreItem from './ListTestCentreItem';

class ListTestCentres extends React.PureComponent {

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

    handleOnPressItem = (stateName = '') => {
        this.props.navigation.navigate('TestCentresByState', {
            stateName
        });
    }

    onRefresh = () => {
        this.props.loadData();
    }

    handleSourcePress() {
        openBrowserAsync('https://pib.gov.in/');
    }

    renderHeader() {
        return (
            <View style={styles.headTitleContainer}>
                <Text style={{fontFamily:'SemiBold', fontSize:18}}>Test Centres:</Text>
                <Text style={{fontFamily:'SemiBold', color:'rgba(0,0,0,0.4)', fontSize:14}}>Testing centres across india for COVID-19.</Text>
            </View>
        );
    }

    renderFooter() {
        let currentDate = new Date();
        const {data, isFetched} = this.props;
        if(isFetched && data && data.length !== 0) {
            return (
                <View style={{padding:12, alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontFamily:'SemiBold', fontSize:12}}>Last Updated at: {new Date(parseInt(currentDate.setDate(currentDate.getDate() - 1))).toLocaleDateString()}, 2:00 PM</Text>
                    <Text style={{fontFamily:'SemiBold', fontSize:12}}>Source: <Text style={{color:'#404cd8'}} onPress={this.handleSourcePress}>https://pib.gov.in/</Text></Text>
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
                    onEndReachedThreshold={0.5}
                    ListEmptyComponent={this.renderEmptyData()}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingHorizontal:12}}
                    renderItem={({ item }) => <ListTestCentreItem handleOnPressItem={this.handleOnPressItem} {...item} />}
                    keyExtractor={(item, index) => item.id ? (item.id).toString() : `${index}`}
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

export default ListTestCentres;