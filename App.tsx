import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PlatformScreen from './screens/PlatformScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <PlatformScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
