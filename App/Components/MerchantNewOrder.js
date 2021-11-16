import React,{useState} from "react";
import { View, Text, TextInput, TouchableOpacity, StatusBar, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
// import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'
import AcceptedOrdersList from "./AcceptedOrdersList";
export default function MerchantNewOrder() {

    const navigation = useNavigation();

    const [search, setSearch] = useState(false)
    const HideSearchBtn = () => {
        setSearch(!search)
    }

    const ListItem = ({ AcceptedOrdersList, }) => {

        return (
            <View style={{ alignItems: 'center', width: '100%', marginBottom: 20, paddingHorizontal: 10, paddingVertical: 5 }}>
                <StatusBar />
                <View style={styles.Boxshadow}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, }}>
                        <Text style={styles.order}>{AcceptedOrdersList.order}</Text>
                        <Text style={styles.Date}>{AcceptedOrdersList.Date}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderColor: '#c2c2c2', marginBottom: 15 }}>
                        <Image style={styles.img} source={AcceptedOrdersList.image} />
                        <View style={{ paddingHorizontal: 10 }}>
                            <Text style={styles.item}>{AcceptedOrdersList.item}</Text>
                            <Text style={styles.quantity}>{AcceptedOrdersList.quantity}</Text>
                            <Text style={styles.price}>{AcceptedOrdersList.price}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                            <Octicons name="primitive-dot" size={20} color="#f12a10" />
                            <Text style={styles.Status}>{AcceptedOrdersList.status}</Text>
                        </View>
                        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('MerchantOrderDetails')}>
                            <Text style={styles.Details}>{AcceptedOrdersList.details}</Text>
                            <Feather name="chevron-right" size={26} color="#f12a10" />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }


    return (
        <View style={styles.Container}>
            <StatusBar />
            {/* <View style={styles.Header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name="chevron-left" size={35} color="#f12a10" />
                </TouchableOpacity>
                {search ?
                    (<TextInput autoFocus={true} style={styles.Heading} placeholder='Search here' />) :
                    <Text style={styles.Heading}>ORDER</Text>
                }
                <TouchableOpacity onPress={HideSearchBtn}>
                    <Feather name="search" size={30} color="#f12a10" />
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, borderBottomWidth: 1, borderColor: '#c2c2c2', marginBottom: 20 }}>
                <TouchableOpacity style={styles.Box2} >
                    <Text style={styles.Text2}>All(1)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Box2} >
                    <Text style={styles.Text2}>Accepted(1)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Box} onPress={() => navigation.navigate('MerchantRejectedOrder')}>
                    <Text style={styles.Text}>Rejected</Text>
                </TouchableOpacity>
            </View> */}
            {/* <Text style={styles.rejected}>New Order</Text> */}

            <FlatList
                showsVerticalScrollIndicator={false}
                data={AcceptedOrdersList}
                numColumns={1}
                renderItem={({ item }) => <ListItem AcceptedOrdersList={item} />}
                keyExtractor={(item) => item.id }
            // horizontal={true}
            />

            {/* <View>
                <TouchableOpacity>
                    <Text>Report</Text>
                </TouchableOpacity>
            </View> */}


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
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 20
    },
    Heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#F12A10',
        width:'80%',
        textAlign:'center'
    },
    Box: {
        borderWidth: 1,
        borderColor: '#f12a10',
        paddingHorizontal: 20,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginBottom: 20
    },
    Box2: {
        paddingHorizontal: 20,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#f12a10',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1.0,
        shadowRadius: 8,
        elevation: 5,
    },
    Text: {
        fontSize: 16,
        color: '#f12a10',
        fontWeight: 'bold'
    },
    Text2: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff'
    },
    rejected: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        paddingHorizontal: 20,
        marginBottom: 10
    },
    Boxshadow: {
        backgroundColor: '#fff',
        width: '100%',
        // borderWidth: 1,
        // borderColor: '#000',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1.0,
        shadowRadius: 8,
        elevation: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10
    },
    order: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000'
    },
    Date: {
        fontSize: 13,
        // fontWeight:'bold',
        color: '#000'
    },
    item: {
        fontSize: 18,
        color: '#000',
        marginBottom: 5
    },
    quantity: {
        fontSize: 15,
        color: '#616161',
        marginBottom: 5
    },
    price: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5
    },
    Status: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#000',
        paddingHorizontal: 10
    },
    box: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#c2c2c2',
        paddingHorizontal: 10,
        borderRadius: 20,
        height: 30,
        alignItems: 'center'
    },
    img: {
        height: 80,
        width: '30%',
        alignItems: 'center'
    }
})