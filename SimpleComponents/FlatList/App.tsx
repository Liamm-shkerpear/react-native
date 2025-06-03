import { SectionList, StyleSheet, Text, View } from 'react-native';
import FlatlistEx from './components/FlatlistEx';
import SectionListEx from './components/SectionListEx';


export default function App() {
  return (
    <View style={styles.container}>
      <SectionListEx />
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
