import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

const onPressButton = () => {
  Alert.alert('Account submitted!')
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 12}}>UserName:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'black', borderWidth: 1, marginBottom: 16 }}
        placeholder='Enter your username'
      />
      <Text style={{marginBottom: 12}}>Password:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'black', borderWidth: 1, marginBottom: 16 }}
        placeholder='Enter your password'
        secureTextEntry={true}
      />
      <Button title='Submit' onPress={onPressButton}/>
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
