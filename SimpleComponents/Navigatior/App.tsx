import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from './types/NavigationTypes';
import { NavigationContainer } from '@react-navigation/native';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';

const Root = createStackNavigator<RootStackParamList>();
export default function App() {
  return (
    <NavigationContainer>
        <Root.Navigator initialRouteName="Screen1">
            <Root.Screen name="Screen1" component={Screen1} />
            <Root.Screen name="Screen2" component={Screen2} />
        </Root.Navigator>
    </NavigationContainer>
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
