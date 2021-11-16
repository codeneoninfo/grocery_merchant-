import React from "react";
import { View, Text, TextInput, TouchableOpacity, StatusBar, StyleSheet, ScrollView, Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

export default function MechantGrocery() {

    return (
        <View style={styles.Container}>
            <StatusBar />
            <View style={styles.Heading}>
                <Text style={styles.Header}>GROCERY</Text>
            </View>
            <View style={{ alignItems: "center" }}>
                <View style={styles.box}>
                    <Text style={styles.Grocery}>Grocery</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.Text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam fusce ut sed leo venenatis</Text>
                        <Image style={styles.Image2}
                            source={require('../Images/Grocerycart.png')}
                        />
                    </View>
                </View>
            </View>

            <Text style={styles.Overview}>Overview</Text>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around' }} >
                <LinearGradient colors={['#f8dada', '#fcf0f0']} style={styles.box1}>
                    <Image style={styles.Image}
                        source={require('../Images/OrdersRating.png')}
                    />
                    <Text style={{ color: '#000', fontSize: 13, fontWeight: 'bold' }}>ORDERS</Text>
                    <Text style={{ color: '#000', fontSize: 18, marginBottom: 12, fontWeight: 'bold' }}>1</Text>

                </LinearGradient>
                <LinearGradient colors={['#fae6c7', '#fdf8f1']} style={styles.box1}>
                    <Image style={styles.Image}
                        source={require('../Images/ViewRating.png')}
                    />
                    <Text style={{ color: '#000', fontSize: 13, fontWeight: 'bold' }}>VIEW</Text>
                    <Text style={{ color: '#000', fontSize: 18, marginBottom: 12, fontWeight: 'bold' }}>1</Text>

                </LinearGradient>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around' }} >
                <LinearGradient colors={['#bee5be', '#f1faf1']} style={styles.box1}>
                    <Image style={styles.Image}
                        source={require('../Images/StoreViewRating.png')}
                    />
                    <Text style={{ color: '#000', fontSize: 13, fontWeight: 'bold' }}>SALE VIEW</Text>
                    <Text style={{ color: '#000', fontSize: 18, marginBottom: 12, fontWeight: 'bold' }}>4</Text>

                </LinearGradient>
                <LinearGradient colors={['#c0e4fd', '#e9f5fd']} style={styles.box1}>
                    <Image style={styles.Image}
                        source={require('../Images/SaleRating.png')}
                    />
                    <Text style={{ color: '#000', fontSize: 13, fontWeight: 'bold' }}>TOTAL SALES</Text>
                    <Text style={{ color: '#000', fontSize: 18, marginBottom: 12, fontWeight: 'bold' }}>₹0</Text>

                </LinearGradient>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    Container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        // alignItems:'center'
    },
    Heading: {
        height: 50,
        width: '100%',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 8,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    Header: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#f10a12'
    },
    Overview: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        paddingHorizontal: 10,
        marginBottom: 20
    },
    Box: {
        width: '50%',
        // backgroundColor: 'red',
        alignItems: 'center'
    },
    orders: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'orange',
        paddingHorizontal: 50
    },
    box1: {
        shadowColor: '#000',
        shadowRadius: 6,
        elevation: 6,
        backgroundColor: '#fff',
        width: '45%',
        height: 120,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    Image: {
        height: 50,
        width: 50
    },
    Text: {
        fontSize: 13,
        width: '60%',
        color: '#fff'
    },
    box: {
        width: '90%',
        backgroundColor: '#f45d4a',
        // alignItems:'center',
        // justifyContent: 'center',
        // height: 150,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginBottom: 20
    },
    Grocery: {
        fontSize: 17,
        fontWeight: 'bold',
        color: "#fff",
        marginBottom: 10
    },
    Image2: {
        height: 110,
        width: 150
    }
})