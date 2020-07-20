import React from "react";
import {StyleSheet, Text, View} from "react-native";

class World extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>World Data</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
});

export default World;