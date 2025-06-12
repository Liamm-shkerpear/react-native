import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import {Ionicons} from '@expo/vector-icons' 
import { useState } from "react";

const LoginScreen:React.FC = () => { 
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Back</Text>
            <Image style={styles.logo} 
                source={require('../assets/favicon.png')} resizeMode="contain" />
            <View style={styles.inputContainer}>
                <Ionicons name="mail-outline" size={24} color={'#6c757d'} style={styles.icon}/>
                <TextInput style={styles.input} 
                    placeholder="Email" 
                    keyboardType="email-address"
                    placeholderTextColor='#6c757d' 
                />
            </View>            
            {/* Password */}
            <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={24} color={'#6c757d'} style={styles.icon}/>
                <TextInput style={styles.input} 
                    placeholder="Password" 
                    secureTextEntry = {!showPassword}
                    placeholderTextColor='#6c757d' 
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons name= {showPassword?"eye-off-outline":"eye-outline"} size={24} color={'#6c757d'} />
                </TouchableOpacity>
            </View>
            <View style={styles.rememberContainer}>
                <TouchableOpacity>
                    <Ionicons name="checkbox-outline" size={24} color={'#6c757d'} style={styles.icon}/>
                </TouchableOpacity>
                <Text style={styles.rememberText}>Remember Password</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button , styles.buttonLogin]}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button , styles.buttonCancel]}>
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Text style={styles.link}>Don't have an account? Sign up</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDFDFD', 
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 16
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 16
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 8,
        marginBottom: 16,
        width: '100%',
        backgroundColor: '#fff',
        shadowColor: '#000',
        textShadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    input: {
        flex: 1,
        height: 40
    },
    icon: {
        marginRight: 8
    },
    rememberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        width: '100%',
        paddingHorizontal: 8
    },
    rememberText: {
        flex: 1,
        marginLeft: 8,
        color: '#6c757d'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
         width: '100%',
        marginBottom: 16
    },
    button: {
        flex: 1,
        alignItems: 'center',
        padding: 12,
        borderRadius: 8,
        marginHorizontal: 8,
        shadowColor: '#000',
        textShadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    buttonLogin: {
        backgroundColor: '#007bff'
    },
    buttonCancel: {
        backgroundColor: '#dc3545'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    link: {
        color: '#007bff',
        marginTop: 16
    }
})
export default LoginScreen; 