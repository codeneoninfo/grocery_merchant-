import React from "react";
import { View, Text, TextInput, TouchableOpacity, StatusBar, StyleSheet, ScrollView, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native'
export default function MerchantOrderDetails() {
    const navigation = useNavigation();

    return (
        <View style={styles.Container}>
            <StatusBar />
            <View style={styles.Header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name="chevron-left" size={35} color="#f12a10" />
                </TouchableOpacity>
                <Text style={styles.Heading}>ORDER DETAILS</Text>
            </View>
            <View style={styles.Body}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: "#c2c2c2", marginBottom: 10 }}>
                        <Text style={styles.dateandtime}>Aug27,05.45PM</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Fontisto name="radio-btn-active" size={20} color="#f12a10" />
                            <Text style={styles.accepted}>Completed</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.dateandtime}>1 Item</Text>
                        <Text style={styles.accepted}>RECEIPT</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={styles.Image}
                            source={require('../Images/shimlamirch.png')} />
                        <View style={{ paddingHorizontal: 15 }}>
                            <Text style={styles.name}>Bell papper red & yellow</Text>
                            <Text style={styles.Gm}>500gm</Text>
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderColor: '#c2c2c2', marginBottom: 20 }}>
                        <Text style={styles.price}>₹130</Text>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderColor: '#c2c2c2', marginBottom: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
                            <Text style={styles.text}>Item Total</Text>
                            <Text style={styles.price}>₹130</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
                            <Text style={styles.Text2}>Delivery</Text>
                            <Text>FREE</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
                            <Text style={styles.text}>Grand Total</Text>
                            <Text style={styles.price}>₹130</Text>
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderColor: '#c2c2c2', marginBottom: 10 }}>
                        <Text style={styles.maintext}>CUSTOMER DETAILS</Text>
                        <Text style={styles.maintext1}>Rupesh Row</Text>
                        <Text style={styles.information}>+91-8758754447</Text>
                        <Text style={styles.maintext1}>Address</Text>
                        <Text style={styles.information}>Mumbai</Text>
                        <Text style={styles.maintext1}>City</Text>
                        <Text style={styles.information}>Mumbai</Text>
                        <Text style={styles.maintext1}>Pincode</Text>
                        <Text style={styles.information}>415008</Text>
                        <Text style={styles.maintext1}>Payment</Text>
                        <Text style={styles.information}>Cash on Delivery</Text>
                        {/* <Text>CUSTOMER DETAILS</Text> */}
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <TouchableOpacity style={{ marginBottom: 20 }} onPress={() => navigation.goBack()}>
                            <Text style={styles.cancel}>cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            {/* <Text style={styles.btntext}>Shipped</Text> */}
                            <Text style={styles.btntext}>Accepted</Text>

                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    Container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
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

        paddingHorizontal: 10,
        marginBottom: 20
    },
    Heading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#F12A10',
        paddingHorizontal: 60
    },
    Body: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20
    },
    dateandtime: {
        fontSize: 16,
        color: '#000',
        marginBottom: 10
    },
    accepted: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#f12a10'
    },
    name: {
        fontSize: 17,
        color: '#000',

    },
    Gm: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#616161'
    },
    Image: {
        height: 70,
        width: '30%'
    },
    price: {
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#222222',
        marginBottom: 10
    },
    text: {
        fontSize: 18
    },
    Text2: {
        fontSize: 16
    },
    maintext: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20
    },
    maintext1: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5
    },
    information: {
        fontSize: 15,
        color: '#000',
        marginBottom: 9
    },
    cancel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        paddingHorizontal: 20
    },
    btn: {
        height: 45,
        width: '40%',
        backgroundColor: '#f12a10',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1.0,
        shadowRadius: 8,
        elevation: 5,
    },
    btntext: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',

    }



})