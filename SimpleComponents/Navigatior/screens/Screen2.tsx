import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types/NavigationTypes";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button, StyleSheet, Text, View } from "react-native";

type Screen2Props = {
    route: RouteProp<RootStackParamList, 'Screen2'>;
    navigation: StackNavigationProp<RootStackParamList, 'Screen2'>;
}

const Screen2: React.FC<Screen2Props> = ({ route, navigation }) => {
    const name = route.params.name;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome {name}</Text>
            <Button title="Go back" onPress={() => navigation.goBack()}/>
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
});
export default Screen2;
