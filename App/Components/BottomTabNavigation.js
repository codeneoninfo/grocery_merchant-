import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import CustomerHome from './CustomerHome';
// import CustomerCart from './CustomerCart';
// import CustomerShop from './CustomerShop';
// import CustomerMyOrder from './CustomerMyOrder';
import MerchantProfile from './MerchantProfile'
import MechantGrocery from './MechantGrocery';
import MerchantProducts from './MerchantProducts';
import MerchantOrederTopTab from './MerchantOrederTopTab';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
const Tab = createMaterialBottomTabNavigator();
function MyTabs() {
    return (

        <Tab.Navigator
            initialRouteName="MechantGrocery"
            activeColor="#F12A10"
            barStyle={{ backgroundColor: '#fff', width: '100%', height: 60, justifyContent: 'center', }}
        >

            <Tab.Screen
                name="MechantGrocery"
                component={MechantGrocery}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="MerchantProducts"
                component={MerchantProducts}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="shopping-cart" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="order"
                component={MerchantOrederTopTab}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="auto-awesome-motion" color={color} size={26} />
                    ),
                }}
            />
             <Tab.Screen
                name="Profile"
                component={MerchantProfile}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                        name="md-person-circle-outline" color={color} size={26} />
                    ),
                }}
            />
            {/* <Tab.Screen
                name="Profile"
                // component={CustomerProfile}
                options={{
                    // tabBarLabel: 'CustomerCart',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="ios-person-circle-outline" color={color} size={25} />
                    ),
                }}
            /> */}

        </Tab.Navigator>
    );
}
export default function BottomTabNavigation() {
    return (
        // <NavigationContainer>
            <View style={styles.container}>
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

})