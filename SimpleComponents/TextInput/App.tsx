import { Alert, Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';

const onPressButton = () => {
  Alert.alert('Login successful!')
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style= {{ alignItems: 'center', marginBottom: 20 }}>
      <Image 
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png'}}
        style={{ width: 200, height: 200, justifyContent: 'center' }} 
        resizeMode="contain"
      />
      </View>
      <Text style={{marginBottom: 12}}>UserName:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'black', borderWidth: 1, marginBottom: 16 }}
        placeholder='Ernter your username'
      />
      <Text style={{marginBottom: 12}}>Password:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'black', borderWidth: 1, marginBottom: 16 }}
        placeholder='Enter your password'
        secureTextEntry={true}
      />
      <Button title='Login' onPress={onPressButton}/>
      <Button title='Cancel' onPress={() => Alert.alert('Login cancelled!')} color='red'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});
