import React, {Component} from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import RNBootSplash from "react-native-bootsplash";

export default class LoginScreen extends Component {
    componentDidMount = () => {
        RNBootSplash.hide({ fade: true, duration: 50 });
    };
      render() {  
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Uber</Text>
            <Image
               style={{
               width:200,
               height: 200,
               marginLeft: 70,
               bottom: 50,
               resizeMode: "contain",
             }}
              source={require("../assets/Drive.png")}
             />
            <Text style={styles.title1}>Move with Safety</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>                   Get Started              ➔</Text>
            </TouchableOpacity>
        </View>
    );
}}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0666FF',
        justifyContent: 'center',
        paddingHorizontal: 40,
    },
    title: {
        fontSize: 36,
        fontFamily: 'sans-serif-light',
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginBottom: 110,
        marginLeft: 130,
    },
    title1: {
        fontSize: 36,
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginBottom: 110,
        marginLeft: 20,
    },
    button: {
        backgroundColor: '#000000',
        borderRadius: 5,
        paddingVertical: 20,
        alignItems: 'center',
        top: 90,
    },
    buttonText: {
        fontSize: 22,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});
