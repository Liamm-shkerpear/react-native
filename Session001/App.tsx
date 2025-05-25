import { StyleSheet} from 'react-native';
import React from 'react';
import Greeting from './components/Greeting';
import { useState } from 'react';
import { Button, Text, View } from 'react-native';


export default function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  }
  return (
    
    <View style={styles.container}>
      <Greeting name="Thanhlt" address="DaNang"/>
      <Greeting name = "John" />
      <Text>{count}</Text>
      <Button title="Increment" onPress={increment} />
      <Text>------------------</Text>
      <Button title="Reset" onPress={() => setCount(0)}/>
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
  textStyle: {
    fontSize: 50,
    color: 'red',
    fontWeight: 'bold',
  }
});
