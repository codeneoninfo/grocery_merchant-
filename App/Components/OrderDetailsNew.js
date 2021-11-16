import React from "react";
import { View, Text, TextInput, TouchableOpacity, StatusBar, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import OrderDetailsList from "./OrderDetailsList";
export default function OrderDetailsNew() {



    const ListItem = ({ AcceptedOrdersList, }) => {

        return (
            <View style={{ alignItems: 'center', width: '100%', marginBottom: 20, paddingHorizontal: 10, paddingVertical: 5 }}>
                <StatusBar />
               
            </View>
        )
    }





    return (
        <View style={styles.Conatiner}>
            <StatusBar/>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={AcceptedOrdersList}
                numColumns={1}
                renderItem={({ item }) => <ListItem AcceptedOrdersList={item} />}
                keyExtractor={(item) => item.id }
            // horizontal={true}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                {/* <TouchableOpacity style={{ marginBottom: 20 }} onPress={() => navigation.goBack()}> */}
                <TouchableOpacity style={{ marginBottom: 20 }}>
                    <Text style={styles.cancel}>cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    {/* <Text style={styles.btntext}>Shipped</Text> */}
                    <Text style={styles.btntext}>Accepted</Text>

                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    Conatiner:{
        height:'100%',
        width:'100%',
        backgroundColor:'#fff'
    },
    cancel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        paddingHorizontal: 20
    },
    btn: {
        height: 50,
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