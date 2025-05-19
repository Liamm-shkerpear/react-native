import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

const PlatformScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to react native!</Text>
      <Text>Current platform: {Platform.OS}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
        ...Platform.select({
            ios: {
                backgroundColor: "yellow",
            },
            android: {
                backgroundColor: "green",
            },
            default: {
                backgroundColor: "red",
            },
     }),
    },
});

export default PlatformScreen;