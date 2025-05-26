import { Image, StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
      source={require('./assets/favicon.png')}
      style={{ width: 100, height: 100, marginBottom: 20 }} 
      
      />
      <Image
      source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png'}}
      style={{ width: 200, height: 200 }} 
      resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
