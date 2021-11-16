import React from "react";
import {View,Text,TextInput,TouchableOpacity,StatusBar,StyleSheet,ScrollView}from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
export default function MerchantOrders(){

    return(
        <View style={styles.Container}>
            <StatusBar/>
            <View style={styles.Header}>
                <TouchableOpacity>
                    <Feather name="chevron-left" size={35} color="#f12a10" />
                </TouchableOpacity>
                <Text style={styles.Heading}>Orders</Text>
                <TouchableOpacity>
                    <Feather name="search" size={30} color="#f12a10" />
                </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    Container:{
        height:'100%',
        width:'100%',
        backgroundColor:'#fff'
    },
    Header: {
        height: 60,
        width: '100%',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1.0,
        shadowRadius: 8,
        elevation: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginBottom: 20
    },
    Heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#F12A10'
    },
})