import React from "react";
import { View, Text, TextInput, TouchableOpacity, StatusBar, StyleSheet, ScrollView } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DeliveryOrder from "./DeliveryOrder";
import NewOrder from "./NewOrder";
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    
    return (
        // <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="NEW"
                component={NewOrder}
                options={{
                    tabBarLabel: 'NEW',
                    tabBarActiveTintColor: '#F12A10',
                    tabBarInactiveTintColor: '#677890',
                    tabBarLabelStyle: { fontSize: 15, fontWeight: 'bold' }
                }}
            />
            <Tab.Screen name="COMPLETED"
                component={DeliveryOrder}
                options={{
                    tabBarLabel: 'COMPLETED',
                    tabBarActiveTintColor: '#F12A10',
                    tabBarInactiveTintColor: '#677890',
                    tabBarLabelStyle: { fontSize: 15, fontWeight: 'bold' }
                }}
            />
        </Tab.Navigator>
        // </NavigationContainer>
    )
}
export default function OrderTabNavigation() {
    const navigation = useNavigation();
    return (
        // <NavigationContainer>
        <View style={styles.container}>

            <StatusBar />
            <View style={styles.Header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={40} color="#f12a10" />
                </TouchableOpacity>
                <Text style={styles.Heading}>ORDER </Text>
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
        // justifyContent: 'space-between',
        paddingHorizontal: 20,
        // marginBottom: 20
    },
    Heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#F12A10',
        paddingHorizontal: 90
    },
})