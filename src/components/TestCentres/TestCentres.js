import React from 'react';
import {View} from 'react-native';
import axios from 'axios';

import ListTestCentres from './ListTestCentres';

class TestCentres extends React.PureComponent {

    constructor() {
        super();
        this.state = {
            data: [],
            isFetched: false
        }
    }

    UNSAFE_componentWillMount() {
        this.getTestCentresData();
    }

    getTestCentresData = async () => {
        const {isFetched, data} = this.state;
        if(!isFetched && data.length === 0) {
            try {
                const response = await axios.get('https://api.steinhq.com/v1/storages/5e732accb88d3d04ae0815ae/StateWiseHealthCapacity');
                let finalData = response && response.data || [];
                finalData = this.formatData(finalData);
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

    formatData = (data) => {
        let finalData = [];
        if(data && data.length) {
            finalData = data.map((stateItem, index) => {
                return {
                    id: index,
                    state: stateItem.State
                };
            })
        }
        return finalData;
    }

    getData = () => {
        this.setState({
            isFetched: false
        }, () => {
            this.getTestCentresData();
        });
        
    }

    render() {
        const {isFetched, data} = this.state;
        return (
            <View style={{flex:1}}>
                <ListTestCentres 
                    navigation={this.props.navigation}
                    loadData={this.getData}
                    data={data}
                    isFetched={isFetched}
                />
            </View>
        );
    }
}

TestCentres.navigationOptions = {
    header: null,
};

export default TestCentres;