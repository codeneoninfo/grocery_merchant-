import React from "react";
import { View, Text, TextInput, TouchableOpacity, StatusBar, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import DeliveryOrderList from "./DeliveryOrderList";
export default function DeliveryOrder() {

    const ListItem = ({ DeliveryOrderList, }) => {
        return (
            <View style={styles.Container1}>

                <View style={styles.Box}>
                    <Text style={styles.Status}>{DeliveryOrderList.status}</Text>
                    <View style={styles.imagecontainer}>
                        <Image style={styles.img} source={DeliveryOrderList.image} />
                    </View>
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '70%' }}>
                        <Text style={styles.name}>{DeliveryOrderList.name}</Text>
                        <Text style={styles.date}>{DeliveryOrderList.date}</Text>
                    </View>
                    <Text style={styles.saverz}>{DeliveryOrderList.saverz}</Text>
                    <Text style={styles.location}>{DeliveryOrderList.location}</Text>
                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.dtime}>Delivery Time : </Text>
                    <Text>{DeliveryOrderList.dtime}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.dtime}>Pickup Time : </Text>
                    <Text>{DeliveryOrderList.ptime}</Text>
                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.view}>{DeliveryOrderList.view}</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }


    return (
        <View style={styles.Container}>
            <StatusBar />
            <View style={styles.Header}>
                <TouchableOpacity>
                    <Entypo name="chevron-left" size={40} color="#f12a10" />
                </TouchableOpacity>
                <Text style={styles.Heading}>ORDER </Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={DeliveryOrderList}
                numColumns={1}
                renderItem={({ item }) => <ListItem DeliveryOrderList={item} />}
                keyExtractor={(item) => { item.id }}
            // horizontal={true}
            />


        </View>
    )
}
const styles = StyleSheet.create({
    Container: {
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
        paddingHorizontal: 20,
        marginBottom: 20
    },
    Heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#F12A10',
        paddingHorizontal: 90
    },
    Container1: {
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row',
        borderBottomWidth:1,
        borderColor:'#f0f0f0'
       
    },
    imagecontainer: {
        backgroundColor: '#fff',
        height: 70,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        flexDirection: 'row'
    },
    Box: {
        height: 120,
        width: 120,
        backgroundColor: '#FFF2CA',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    Status: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000',
        paddingVertical: 5,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000',
        width:'80%'
    },
    date: {
        fontSize: 11,
        color: '#f12a10'
    },
    saverz: {
        fontSize: 14,
        color: '#000',
        marginBottom: 10
    },
    location: {
        fontSize: 13,
        color: '#6b6b6b',
        marginBottom: 10
    },
    view: {
        fontSize: 10,
        color: '#f12a10'
    },
    btn: {
        borderColor: '#f12a10',
        borderWidth: 1,
        width: 70,
        alignItems: 'center',
        borderRadius: 20,
        height: 20,
        justifyContent: 'center',
        marginBottom:10
    },
    dtime:{
        fontSize:15,
        color:'#000',
        fontWeight:'bold',
        marginBottom:3
    }

})