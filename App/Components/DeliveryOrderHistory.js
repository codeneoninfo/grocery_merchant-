import React from "react";
import { View, Text, TextInput, TouchableOpacity, StatusBar, StyleSheet, ScrollView, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function DeliveryOrderHistory() {

    return (
        <View style={styles.Conatiner}>
            <StatusBar />
            <View style={styles.Header}>
                <TouchableOpacity>
                    <Feather name="chevron-left" size={45} color="#f12a10" />
                </TouchableOpacity>
                <Text style={styles.Heading}>ORDER HISTORY</Text>
            </View>
            <View style={styles.body}>
                <ScrollView>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.Pickup}>Pickup</Text>
                        <Text style={styles.date}>23 june 2021</Text>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderColor: '#f4f4f4', marginBottom: 10 }}>
                        <Text style={styles.address}>MUMBAI 25 HOUSE,GHJH</Text>
                        <Text style={styles.Time}>Pickup Time: 2:00Am </Text>
                        <Text style={styles.status}>Status : Completed</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Text style={styles.Pickup}>Delivery</Text>
                        <Text style={styles.date}>23 june 2021</Text>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderColor: '#f4f4f4', marginBottom: 10 }}>
                        <Text style={styles.address}>MUMBAI 25 HOUSE,GHJH</Text>
                        <Text style={styles.Time}>Delivery Time: 2:30Am </Text>
                        <Text style={styles.status}>Status : Completed</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 30 ,alignItems:'center'}}>
                        <View style={styles.Btn}>
                            <Text style={styles.Text}>Item List</Text>
                        </View>
                        <Text style={styles.item}>(2 item)</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 30 }}>
                        <Image style={styles.Image}
                            source={require('../Images/shimlamirch.png')} />
                        <View style={{ paddingHorizontal: 15 }}>
                            <Text style={styles.name}>Bell papper red & yellow</Text>
                            <Text style={styles.Gm}>500gm(Qty 1)</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 20, }}>
                        <Image style={styles.Image1}
                            source={require('../Images/Kiwi.png')} />
                        <View style={{ paddingHorizontal: 15 }}>
                            <Text style={styles.name}>Kiwi</Text>
                            <Text style={styles.Gm}>500gm(Qty 1)</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={styles.status}>Status : Completed</Text>
                        <Text style={styles.Total}>TOTAL ₹225</Text>
                    </View>
                </ScrollView>

            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    Conatiner: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff'
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
        // justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginBottom: 20
    },
    Heading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#F12A10',
        paddingHorizontal: 60,
    },
    body: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20
    },
    Pickup: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5
    },
    date: {
        fontSize: 13,
        color: '#f12a10'
    },
    address: {
        fontSize: 17,
        color: '#6b6b6b',
        width: '100%',
        marginBottom: 5
    },
    Time: {
        fontSize: 16,
        color: '#000',
        marginBottom: 5
    },
    status: {
        fontSize: 16,
        color: '#000',
        marginBottom: 30
    },
    Btn: {
        height: 40,
        width: '40%',
        backgroundColor: '#f89b8f',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
    Text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff'
    },
    item: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#737373',
        paddingHorizontal: 30
    },
    name: {
        fontSize: 17,
        color: '#000',

    },
    Gm: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#737373'
    },
    Total:{
        fontSize:15,
        fontWeight:'bold',
        color:'#f12a10'
    }
    // Image: {
    //     height: 70,
    //     width: '30%'
    // },
    // Image1:{
    //     height: 75,
    //     width: '35%'
    // }

})