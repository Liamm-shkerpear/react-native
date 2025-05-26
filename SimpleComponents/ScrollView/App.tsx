import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView pagingEnabled={true} horizontal={true}>
      <View style={styles.container}><Text>Page 1</Text></View>
      <View style={styles.container}><Text>Page 2</Text></View>
      <View style={styles.container}><Text>Page 3</Text></View>
      <View style={styles.container}><Text>Page 4</Text></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    width: 800,
    height: 950,
    borderWidth: 1,
    marginBottom: 20,
  },
});
