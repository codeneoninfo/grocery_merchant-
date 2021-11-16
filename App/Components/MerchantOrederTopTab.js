import React,{useEffect,useState} from "react";
import { View, Text, TextInput, TouchableOpacity, StatusBar, StyleSheet, ScrollView } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MerchantAcceptedOrder from "./MerchantAcceptedOrder";
import MerchantRejectedOrder from "./MerchantRejectedOrder";
import MerchantNewOrder from "./MerchantNewOrder";
import Feather from 'react-native-vector-icons/Feather';

const Tab = createMaterialTopTabNavigator();


function MyTabs() {

    return (
        // <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="ALL"
                component={MerchantAcceptedOrder}
                // component={MerchantAcceptedOrder}
                options={{
                    tabBarLabel: 'New',
                    tabBarActiveTintColor: '#F12A10',
                    tabBarInactiveTintColor: '#677890',
                    tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' }
                }}
            />
            <Tab.Screen name="ACCEPTED"
                component={MerchantAcceptedOrder}
                style={styles.Box}
                options={{
                    tabBarLabel: 'Completed',
                    tabBarActiveTintColor: '#F12A10',
                    tabBarInactiveTintColor: '#677890',
                    tabBarLabelStyle: { fontSize: 13, fontWeight: 'bold' }
                }}
            />
            <Tab.Screen name="REJECTED"
                component={MerchantRejectedOrder}
                options={{
                    tabBarLabel: 'Rejected',
                    tabBarActiveTintColor: '#F12A10',
                    tabBarInactiveTintColor: '#677890',
                    tabBarLabelStyle: { fontSize: 14 ,fontWeight: 'bold' }
                }}
            />
        </Tab.Navigator>
        // </NavigationContainer>
    )
}
export default function MerchantOrederTopTab() {
    const navigation = useNavigation();
    const [search, setSearch] = useState(false)
    const HideSearchBtn = () => {
        setSearch(!search)
    }
    return (
        // <NavigationContainer>
        <View style={styles.container}>

            <StatusBar />
            <View style={styles.Header}>
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


            <MyTabs />
        </View>
        // </NavigationContainer>

    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
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
        // marginBottom: 20
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
})