import { SectionList, StyleSheet, Text, View } from 'react-native';
import FlatlistEx from './components/FlatlistEx';
import SectionListEx from './components/SectionListEx';
import MyDrawer from './components/MyDrawer';


export default function App() {
  return (
    <View style={styles.container}>
      <MyDrawer />
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
