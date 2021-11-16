import React from "react";
import { View, Text, TextInput, TouchableOpacity, StatusBar, StyleSheet, ScrollView, Image } from 'react-native';
export default function DeliveryLogin() {

    return (
        <View style={styles.Container}>
            <StatusBar />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ alignItems: 'center', paddingVertical: 50 }}>
                    <Image style={styles.Image}
                        source={require('../Images/Grocery.png')}
                    />
                </View>

                <Text style={styles.Text}>Login Id</Text>
                <TextInput
                    style={styles.Input}
                    placeholder=""
                />
                <Text style={styles.Text}>Password</Text>
                <TextInput
                    style={styles.Input}
                    placeholder=""
                    secureTextEntry={true}
                />
                <TouchableOpacity>
                    <Text style={styles.forgot}>Forgot Password ?</Text>
                </TouchableOpacity>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.Text2}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    Container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#f12a10',
        paddingHorizontal: 30
        // alignItems:'center'
    },
    Input: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#f12a10',
        // borderWidth: 1.5,
        // borderColor: '#f12a10',
        width: '100%',
        alignItems: 'center',
        borderRadius: 10,
        height: 60,
        paddingHorizontal: 20,
        marginBottom: 10,
        backgroundColor: '#fff'

    },
    Text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
        marginBottom: 10,
    },
    forgot: {
        fontSize: 14,
        // fontWeight:'bold',
        color: '#601106',
        textAlign: 'right',
        marginBottom:60
    },
    btn:{
        height:60,
        width:'50%',
        backgroundColor:'#f67362',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1.0,
        shadowRadius: 8,
        elevation: 5,
        marginBottom:10
    },
    Text2:{
        fontWeight: 'bold',
        fontSize: 19,
        color: '#fff',
    }


})