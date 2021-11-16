// import React from "react";
// import {View,Text,TextInput,TouchableOpacity,StatusBar,ScrollView,StyleSheet} from 'react-native';
// export default function DeliveryLiveTracking(){

//     return(
//         <View style={styles.Container}>
//             <StatusBar/>

//         </View>
//     )
// }
// const styles = StyleSheet.create({

// })





import * as React from 'react'
import MapView from 'react-native-maps'
import * as Location from 'expo-location'
import { StyleSheet, Text, TextInput, View, StatusBar, SafeAreaView } from 'react-native'
// import { StatusBar } from 'expo-status-bar'
// import AsyncStorage from '@react-native-async-storage/async-storage';
import Slider from '@react-native-community/slider';
const { useState, useEffect } = React

export default function DeliveryLiveTracking() {
    // const { sell_id } = route.params;
    const [sliderValue, setSliderValue] = useState(15);
    // const [books, setBooks] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    // const STORAGE_KEY = 'Token'

    // const getData = async () => {
    //     setIsLoading(true)
    //     var LOGIN_TOKEN = await AsyncStorage.getItem(STORAGE_KEY);

    //     await fetch(`https://bookjee.com/BookJee/public/api/get-resipantUser/${sell_id}`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json',
    //             'Authorization': 'Bearer ' + LOGIN_TOKEN
    //         },
    //     }).then(res => res.json())
    //         .then(resData => {
    //             if (resData.success == true) {
    //                 setBooks(resData.data)
    //                 setIsLoading(false)
    //             }
    //             setIsLoading(false)
    //         }).catch((error) => {
    //             alert(error)
    //             setIsLoading(false)
    //         })

    // }

    // useEffect(() => {
    //     getData()
    // }, [])

    // const [locationResult, setLocation] = useState(null)
    const [mapRegion, setRegion] = useState(null)
    const [userLocation, setCurrentLoaction] = useState({
        latitude: 39.97343096953564,
        latitudeDelta: 1,
        longitude: -75.12520805829233,
        longitudeDelta: 1,
    })
    // const [hasLocationPermissions, setLocationPermission] = useState(false)
    // const getLocationAsync = async () => {
    //     let { status } = await Location.requestForegroundPermissionsAsync();
    //     if (status !== 'granted') {
    //         setErrorMsg('Permission to access location was denied');
    //         return;
    //     } else {
    //         setLocationPermission(true);
    //     }

    //     let { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});
    //     setLocation(JSON.stringify({ latitude, longitude }))

    //     // Center the map on the location we just fetched.
    //     setRegion({ latitude, longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 });
    //     setCurrentLoaction({...userLocation , ['latitude']: latitude , ['longitude']: longitude})
    // }
    // useEffect(() => {
    //     getLocationAsync()
    // }, [])

    // if (locationResult === null) {
    //     return <Text>Finding your current location...</Text>
    // }

    // if (hasLocationPermissions === false) {
    //     return <Text>Location permissions are not granted.</Text>
    // }

    // if (mapRegion === null) {
    //     return <Text>Map region doesn't exist.</Text>
    // }

    return (
        <View style={styles.container}>

            <StatusBar />
            <View style={styles.header}>
                <Text style={styles.Headertext}>Live Tracking</Text>
            </View>
            <View style={styles.body}>
                <View style={{ width: '100%', height: 340}}>
                    <MapView
                        showsUserLocation={true}
                        style={styles.container}
                        region={mapRegion}
                        zoomEnabled={true}
                        zoomControlEnabled={true}
                        initialRegion={userLocation}
                        followsUserLocation
                        userLocationUpdateInterval

                    >
                        {/* {books.map((items , index)=>(
                <MapView.Marker
                key={index}
                title={`User Location ${index + 1}`}
                coordinate={{ latitude: parseFloat(items.latitude), longitude: parseFloat(items.longitude) }} */}
                        {/* /> */}
                        {/* ))} */}
                    </MapView>
                </View>
                <View>
                    <Text style={styles.text1}>
                        Route
                    </Text>
                    <Text style={styles.text}>
                        Order ID :  2345423432
                    </Text>
                </View>
                <View style={{ flexDirection: 'row',width: '100%', marginBottom:15, }}>
                    <Text style={styles.Pizza}>
                        Pizza hut street 2
                    </Text>
                    <View style={{ width: '40%', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                        <SafeAreaView style={{ width: '100%', marginBottom: 30 }}>
                            {/* <Text style={styles.radiustxt}>Radius</Text> */}
                            <Slider
                                maximumValue={30}
                                minimumValue={0}
                                disabled={true}
                                // style={{ height: 40,color:'red'}}
                                minimumTrackTintColor="#015DD3"
                                maximumTrackTintColor="#41C9F2"
                                step={1}
                                value={8}
                            // onValueChange={(sliderValue) => setSliderValue(sliderValue)}
                            />
                            <View style={{ alignItems: 'center', width: '100%' }}>
                                {/* <Text style={{ width: '86%', fontWeight: '500', fontSize: 16, color: '#000' }}>0</Text> */}
                                <Text style={{ fontWeight: '500', fontSize: 16, color: '#000' }}> {8}KM</Text>
                                <Text style={{ fontWeight: '500', fontSize: 16, color: '#000' }}>(10min)</Text>

                            </View>
                        </SafeAreaView>
                    </View>
                    <Text style={styles.Pizza}>
                        Nazier city street 7
                    </Text>
                </View>
              
            </View>
              <View style={styles.footer}>


                  
                    <Text style={styles.Headertext}>Delivery here</Text>

                </View>
        </View>

    )
}

DeliveryLiveTracking.navigationOptions = {
    header: null
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: '100%',
        position: 'relative'
    }, header: {
        height: 70,
        width: '100%',
        backgroundColor: '#41C9F2',
        shadowColor: '#000',
        shadowOffset: { weight: 1, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center'

    }, Headertext: {
        color: '#fff',
        fontSize: 25,
        fontWeight: '700',
        width: '84%',
        textAlign: 'center'
    },
    footer: {
        height: 70,
        width: '100%',
        backgroundColor: '#41C9F2',
        bottom: 0,
        position: 'absolute',
        // marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'

    }, body: {
        flex: 1,
        // backgroundColor:'red'
    },
    text: {
        fontSize: 20,
        paddingHorizontal: 10,
        width: '100%',
        marginBottom:15,
    },
    text1: {
        fontSize: 20,
        // height:30,
        textAlign: 'center',
        paddingHorizontal: 10,
        width: '100%',
        marginBottom:15,
    }, Pizza: {
        fontSize: 17,
        color: '#000',
        // backgroundColor: 'red',
        // height:30,
        textAlign: 'center',
        paddingHorizontal: 10,
        width: '30%'
    },
    radiustxt: {
        color: '#015DD3',
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 20
    },
})