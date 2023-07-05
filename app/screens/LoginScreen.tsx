import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Login = () => {
    return (
        <View style={styles.container}>
             <Image
               style={{
               width:200,
               height: 100,
               marginLeft: 70,
               resizeMode: "contain",
             }}
              source={require("../assets/logo.png")}
             />
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 24,
        color: '#000000',
        fontWeight: 'bold',
        marginBottom: 30,
        marginLeft: 140,
    },
    input: {
        backgroundColor: '#FFFEEE',
        borderRadius: 55,
        padding: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#000000',
        borderRadius: 25,
        maxWidth: 100,
        paddingVertical: 10,
        marginLeft: 125,
        alignItems: 'center',
        top: 30,
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});

export default Login;