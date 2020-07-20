import React from "react";
import {Platform, StyleSheet, View} from "react-native";
import axios from 'axios';
import FusionCharts from "react-native-fusioncharts";

const statesOrder = require('./statesOrder.json');

 const colorrange = {
     "minvalue": "0",
     "startlabel": "Low",
     "endlabel": "High",
     "code": "#48bb78",
     "gradient": "1",
     "color": [
         {"maxvalue": "2500", "code": "#ecc94b"}, 
         {"maxvalue": "2500", "code": "#ecc94b"}, 
         {"maxvalue": "40000", "code": "#f56565"}
    ]
 };

class India extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: "maps/india",
            width: "100%",
            height: "500",
            dataFormat: "json",
            dataSource: {
                "chart": {
                    "subcaption": "Covid-19 Cases in India",
                    "captionPosition":"top-right",
                    "animation": "0",
                    "bgColor": "#f1f1f1",
                    "bgAlpha": "100",
                    "theme": "fusion",
                    "nullEntityColor": "#C2C2D6",
                    "nullEntityAlpha": "50",
                    "hoverOnNull": "0"
                },
                "colorrange": colorrange,
                "data": []
            },
            data: [],
            isFetched: false
        };
        this.libraryPath = Platform.select({
            // Specify fusioncharts.html file location
            android: {
                uri: "file:///android_asset/fusioncharts.html"
            },
            ios: require("../../../android/app/src/main/assets/fusioncharts.html")
        });
    }

    UNSAFE_componentWillMount() {
        this.getIndiaStatisticsData();
    }

    formatData = (data) => {
        let finalData = [];
        if(data && data.length) {
            finalData = data.map((stateItem, index) => {
                let stateData = {};
                statesOrder.forEach(item => {
                    if(item.stateName === stateItem.state_name) {
                        stateData = {
                            ...item,
                            label: item.stateName
                        };
                    }
                });
                return {
                    ...stateData,
                    value: Number(stateItem.positive)+Number(stateItem.new_positive)
                };
            })
        }
        return finalData;
    }

    getIndiaStatisticsData = async () => {
        const {isFetched, data} = this.state;
        if(!isFetched && data.length === 0) {
            try {
                const response = await axios.get('https://www.mohfw.gov.in/data/datanew.json');
                let finalData = response && response.data || [];
                console.log(finalData, 'finalData');
                finalData = this.formatData(finalData);
                let modData = [];
                finalData.forEach(item => {
                    if(item.label) {
                        modData.push(item);
                    }
                })
                this.setState({
                    data: modData,
                    dataSource: {
                        ...this.state.dataSource,
                        data: modData
                    },
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

    render() {
        console.log(this.state.data, 'DATA...1');
        return (
            <View style={styles.container}>
                <FusionCharts
                    type={this.state.type}
                    width={this.state.width}
                    height={this.state.height}
                    dataFormat={this.state.dataFormat}
                    dataSource={this.state.dataSource}
                    libraryPath={this.libraryPath}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    header: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        paddingBottom: 10
    }
});

export default India;