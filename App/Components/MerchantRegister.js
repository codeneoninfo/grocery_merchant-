import React from "react";
import { View, Text, TextInput, TouchableOpacity, StatusBar, StyleSheet, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'

export default function MerchantRegister() {
    const navigation = useNavigation();
    return (
        <View style={styles.Container}>
            <StatusBar />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', paddingVertical: 20, marginBottom: 30, alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Feather name="chevron-left" size={45} color="#f12a10" />
                    </TouchableOpacity>
                    <Text style={styles.Register}>Register</Text>
                </View>
                <Text style={styles.Text}>GSTIN No</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                />
                <Text style={styles.Text}>Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                />
                <Text style={styles.Text}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                />
                <Text style={styles.Text}>Password</Text>
                <TextInput
                    style={styles.input2}
                    placeholder=""
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btntext}>REGISTER</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: "center", marginBottom: 30 }}>
                    <Text style={styles.account}>Alreday have an account ?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('MerchantLogin')}>
                        <Text style={styles.login}>Login</Text>
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
        backgroundColor: '#fcd4cf',
        paddingHorizontal: 20
    },
    Register: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#f12a10',
        paddingHorizontal: 80,
    },
    Text: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#fff',
        marginBottom: 10

    },
    input: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#f12a10',
        borderWidth: 1.5,
        borderColor: '#f12a10',
        width: '100%',
        alignItems: 'center',
        borderRadius: 10,
        height: 60,
        paddingHorizontal: 20,
        marginBottom: 10
    },
    btn: {
        width: '100%',
        height: 60,
        backgroundColor: '#f12a10',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 8,
        elevation: 5,
        marginBottom: 5
    },
    btntext: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff'
    },
    input2: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#f12a10',
        borderWidth: 1.5,
        borderColor: '#f12a10',
        width: '100%',
        alignItems: 'center',
        borderRadius: 10,
        height: 60,
        paddingHorizontal: 20,
        marginBottom: 60
    },
    account: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff'
    },
    login: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#f12a10'
    }

})