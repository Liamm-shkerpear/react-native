import { Component } from "react";
import { View, Text } from "react-native";

class MyClassComponents extends Component {
    render () {
        return (
            <View>
                <Text style={{marginBottom: 20, marginTop: 20}}>This is my class component</Text>
            </View>
        );
    }
}

export default MyClassComponents;