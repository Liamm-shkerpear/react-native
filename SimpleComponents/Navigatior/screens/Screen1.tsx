import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/NavigationTypes";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

type Screen1Props = {
    navigation: StackNavigationProp<RootStackParamList, 'Screen1'>;
}
const Screen1:React.FC<Screen1Props> = ({navigation}) => {
    const[name, setName] = useState<string>("")
    const handleSubmit = () => {
        if(name.trim()){
            navigation.navigate('Screen2', {name});
        }else {
            alert("Please enter a name");
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter your name</Text>
            <TextInput style={styles.input}
                placeholder="Your name"
                onChangeText={setName}
                value={name}
            />
            <Button title="Next" onPress={(handleSubmit)}/>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'lightblue',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
});
export default Screen1;