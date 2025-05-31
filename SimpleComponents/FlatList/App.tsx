import { StyleSheet, Text, View } from 'react-native';
import FlatlistEx from './components/FlatlistEx';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatlistEx />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  //  alignItems: 'center',
    justifyContent: 'center',
  },
});
