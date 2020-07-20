import React from 'react';
import {View} from 'react-native';
import axios from 'axios';

import ListTestCentresByState from './ListTestCentresByState';

const groupBy = (list, groupKey) => {
    const map = new Map();
    list.forEach((item) => {
         const key = groupKey(item);
         const collection = map.get(key);
         if (!collection) {
             map.set(key, [item]);
         } else {
             collection.push(item);
         }
    });
    return map;
}

class TestCentresByState extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isFetched: false
        }
    }

    UNSAFE_componentWillMount() {
        this.getTestCentresDataByState();
    }

    formatData = (data = {}, groupByState = null) => {
        let finalData = [];
        if(data && data['items'] && data['items'].length) {
            data = data['items'].map((item) => {
                return {
                    _id: item.id,
                    title: item.title,
                    address: item.address,
                    date: item.date,
                    state: (item.state).trim(),
                    city: item.city
                }
            });
        }
        const groupedData = groupBy(data, item => item.state);
        if(groupByState) {
            finalData = groupedData.get(groupByState);
        }
        return finalData;
    }

    getTestCentresDataByState = async () => {
        const {isFetched, data} = this.state;
        if(!isFetched && data.length === 0) {
            try {
                const response = await axios.get('https://covid.icmr.org.in/index.php/testing-facilities?view=jsonv4&cat=&format=raw');
                let finalData = response && response.data || [];
                let getStateParam = this.props.route.params.stateName || '';
                finalData = this.formatData(finalData, getStateParam);
                this.setState({
                    data: finalData,
                    isFetched: true
                });
            } catch (error) {
                console.error(error);
            }
        }
        if(!isFetched && data && data.length > 0) {
            this.setState({
                isFetched: true
            });
        }
    }

    getData = () => {
        this.setState({
            isFetched: false
        }, () => {
            this.getTestCentresDataByState();
        });
    }

    render() {
        const {isFetched, data} = this.state;
        let {stateName = ''} = this.props.route.params;
        return (
            <View style={{flex:1}}>
                <ListTestCentresByState 
                    stateName={stateName}
                    navigation={this.props.navigation}
                    loadData={this.getData}
                    data={data}
                    isFetched={isFetched}
                />
            </View>
        );
    }
}

TestCentresByState.navigationOptions = {
    header: null,
};

export default TestCentresByState;