import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Ripple from 'react-native-material-ripple';

import India from './India';
import World from './World';

class Statistics extends React.PureComponent {

    constructor() {
        super();
        this.state = {
            activeTab: 'IN'
        }
    }

    onChangeTab = (tabType) => {
        this.setState({
            activeTab: tabType
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headTitleContainer}>
                    <Text style={{fontFamily:'SemiBold', fontSize:18}}>Statistics:</Text>
                    <View style={{marginVertical:4}} />
                    <Text style={{fontFamily:'SemiBold', color:'rgba(0,0,0,0.4)', fontSize:14}}>National and World wide COVID-19 Statistics</Text>
                </View>
                <View style={styles.tabContainer}>
                    <Ripple onPress={() => this.onChangeTab('IN')} style={[styles.tab, this.state.activeTab === 'IN' ? styles.activeTab : {}]}>
                        <Text style={[styles.tabText, this.state.activeTab === 'IN' ? styles.tabActiveText : {}]}>INDIA</Text>
                    </Ripple>
                    <Ripple onPress={() => this.onChangeTab('WLD')} style={[styles.tab, this.state.activeTab === 'WLD' ? styles.activeTab : {}]}>
                        <Text style={[styles.tabText, this.state.activeTab === 'WLD' ? styles.tabActiveText : {}]}>WORLD</Text>
                    </Ripple>
                </View>
                {this.state.activeTab === 'IN' ? (
                    <India />
                ) : null}
                {this.state.activeTab === 'WLD' ? (
                    <World />
                ) : null}
            </View>
        );
    }
}

Statistics.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headTitleContainer: {
        marginVertical:12,
        paddingHorizontal: 12
    },
    tabContainer: {
        flexDirection:'row',
        paddingHorizontal:12
    },
    tab: {
        flex:1, 
        padding:12,
        alignItems:'center'
    },
    tabText: {
        fontFamily:'SemiBold', 
        fontSize:16
    },
    tabActiveText: {
        color: '#61affe'
    },
    activeTab: {
        // backgroundColor:'#f9f9f9',
        borderRadius:6,
        borderBottomWidth: 2,
        borderColor:'#61affe'
    }
});

export default Statistics;