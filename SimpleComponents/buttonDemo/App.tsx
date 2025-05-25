import { StyleSheet, Text, View, Button, Alert } from 'react-native';

const onPressButton = () => {
  Alert.alert('You tapped the button!')
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Demo button</Text>
      <Button title='Click Me' color='red' onPress={() => alert('click click')}/>
      <Button title='Click Me' color='red' disabled={false} onPress={onPressButton}/>
      <Button title='Click Me' color='red' disabled={true}/>
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
