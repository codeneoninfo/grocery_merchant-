import React from "react";
import { View, Text, TextInput, TouchableOpacity, StatusBar, StyleSheet, ScrollView, Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
export default function DeliveryGetStarted() {

    return (
        <View style={styles.Container}>
            <StatusBar />
            <LinearGradient colors={['#f23921', '#f9a59a']} style={styles.Container}>
                <Image style={styles.Image}
                    source={require('../Images/DeliveryBoy.png')}
                />
                <TouchableOpacity style={styles.Btn}>
                    <Text style={styles.TEXT}>GET START</Text>
                </TouchableOpacity>
            </LinearGradient>


        </View>
    )
}
const styles = StyleSheet.create({
    Container: {
        height: '100%',
        width: "100%",
        justifyContent: 'center',
        alignItems: "center"
    },
    Btn: {
        height: 60,
        width: '60%',
        backgroundColor: '#f12a10',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1.0,
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#f56654'
    },
    TEXT: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    }
})