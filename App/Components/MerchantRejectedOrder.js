import React,{useState} from "react";
import { View, Text, TextInput, TouchableOpacity, StatusBar, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import Feather from 'react-native-vector-icons/Feather';
export default function MerchantRejectedOrder() {
    const navigation = useNavigation();

    const [search, setSearch] = useState(false)
    const HideSearchBtn = () => {
        setSearch(!search)
    }
    return (
        <View style={styles.Conatiner}>
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
            </View> */}

            {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, borderBottomWidth: 1, borderColor: '#c2c2c2', marginBottom: 20 }}>
                <TouchableOpacity style={styles.Box}  onPress={() => navigation.navigate('MerchantAcceptedOrder')}>
                    <Text style={styles.Text}>All(1)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Box}  onPress={() => navigation.navigate('MerchantAcceptedOrder')}>
                    <Text style={styles.Text}>Accepted(1)</Text>
                </TouchableOpacity>
                <View style={styles.Box2}>
                    <Text style={styles.Text2}>Rejected</Text>
                </View>
            </View> */}
            <Text style={styles.rejected}>Rejected Order</Text>
            <View style={{ alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <Image style={styles.image}
                    source={require('../Images/Blank.png')} />
            </View>
            <Text style={styles.Text3}>You don,t have any Rejected Orders </Text>

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
        marginBottom: 50
    },
    Text3: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        width: '100%'
    }
})