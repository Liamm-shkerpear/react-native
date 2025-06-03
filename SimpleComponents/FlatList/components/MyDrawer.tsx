import { useRef } from "react"
import { DrawerLayoutAndroid, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import {Ionicons} from '@expo/vector-icons';
const MyDrawer = () => {
    const drawer = useRef<DrawerLayoutAndroid>(null);
    const navigationView = () => (
        <View style={styles.drawerContainer}>
            <Text style={styles.drawerText}>Item 1</Text>
            <Text style={styles.drawerText}>Item 2</Text>
            <TouchableOpacity style={styles.closeButton} 
            onPress={() => drawer.current?.closeDrawer()}>
                <Text style={styles.closeButtonText}>Close drawer</Text>
            </TouchableOpacity>      
        </View>
    )
    return (
            <DrawerLayoutAndroid ref={drawer} drawerWidth={300} drawerPosition="left" renderNavigationView={navigationView} >
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => drawer.current?.openDrawer()}>
                        <Ionicons name="menu" size={32} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>
                        Header
                    </Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.mainText}>Content</Text>
                </View>
            </DrawerLayoutAndroid>
    )
}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginTop: 24,
    },
    headerText: {
        fontSize: 20,  
        marginLeft: 16,
    },
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    drawerContainer: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
        marginTop: 24,
    },
    drawerText: {
        fontSize: 18,
        marginBottom: 20,
    },
    closeButton: {
        backgroundColor: 'lightgray',
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'black',
        fontSize: 16,
    },
})
export default MyDrawer;