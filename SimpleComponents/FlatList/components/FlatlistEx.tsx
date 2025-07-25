import { FlatList, Text, TouchableOpacity, View, Alert } from "react-native";

const DATA = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
    { id: '5', title: 'Item 5' },
    { id: '6', title: 'Item 6' },
    { id: '7', title: 'Item 7' },
    { id: '8', title: 'Item 8' },
    { id: '9', title: 'Item 9' },
    { id: '10', title: 'Item 10' },
    { id: '11', title: 'Item 11' },
    { id: '12', title: 'Item 12' },
    { id: '13', title: 'Item 13' },
    { id: '14', title: 'Item 14' },
    { id: '15', title: 'Item 15' },
    { id: '16', title: 'Item 16' },
    { id: '17', title: 'Item 17' },
    { id: '18', title: 'Item 18' },
    { id: '19', title: 'Item 19' },
    { id: '20', title: 'Item 20' },
]

interface ItemProps {
    item : {id: string, title: string};
    onPress? : () => void;
}

const Item = (props:ItemProps) => {
    return (
    <TouchableOpacity onPress={props.onPress}
    style={{padding: 20, borderBottomWidth: 1, borderColor: '#ccc', backgroundColor: 'lightblue', margin: 10}}>    
        <Text>{props.item.id}-{props.item.title}</Text>
    </TouchableOpacity>
    );
};

const pressHandler = (item) => {
    Alert.alert('Item Pressed', `You pressed ${item.id} - ${item.title}`);
}

const FlatlistEx = () => {
    return (
        <FlatList
        data = {DATA}
        renderItem={({item}) =>
            <Item 
                item = {item} 
                onPress={() => pressHandler(item)}/>}
        keyExtractor={item => item.id}
        />
    );
};

export default FlatlistEx;