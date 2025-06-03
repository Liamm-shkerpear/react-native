import { SectionList, View, Text } from "react-native"

const DATA = [
    {
        title: 'Fruits',
        data: ['Apple', 'Banana', 'Orange'],
    },
    {
        title: 'Vegetables',
        data: ['Carrot', 'Broccoli', 'Spinach'],
    },
    {
        title: 'Proteins',
        data: ['Eggs', 'Chicken', 'Fish'],
    },
]
const SectionListEx = () => {
    return (
        <View>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => 
                <View style={{padding: 10, borderBottomWidth: 1, borderColor: 'lightgray'}}>
                    <Text>{item}</Text>
                </View>}
                renderSectionHeader={({ section}) => 
                <Text style={{fontWeight: 'bold', fontSize: 20, padding: 10, backgroundColor: 'lightblue'}}>
                    {section.title}
                </Text>}
            />
        </View>
    )

}

export default SectionListEx;