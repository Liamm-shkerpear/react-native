import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface GreetingProps {
    name: string;
    address?: string; 
}

export default function Greeting(props: GreetingProps) {
    return (
        <View>
            <Text style={styles.textStyle}>Hello {props.name}</Text>
            {props.address && <Text>Address: {props.address}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold',
  }
});