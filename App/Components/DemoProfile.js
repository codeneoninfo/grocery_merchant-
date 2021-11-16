import React, { useState, useEffect } from 'react';
import { View, ScrollView, TextInput, Text, TouchableOpacity, StatusBar, StyleSheet, Image, FlatList } from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
import CheckBox from 'react-native-check-box';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useNavigation } from '@react-navigation/core';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/core';
export default function DemoProfile() {
    const [userInfo, setUserInfo] = useState({
        image: '',
    })
    const navigation = useNavigation();
    const [image, setImage] = useState(null);
    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            base64: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
            var pieces = result.uri.split(".");
            var l = pieces.length;
            var extention = pieces[l - 1]
            let imageUrl = result ? `data:image/${extention};base64,${result.base64}` : null;
            setUserInfo({ ...userInfo, ['image']: imageUrl })
        }
    };
    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.header}>
                <TouchableOpacity style={styles.Headericon} onPress={() => navigation.navigate('Offer')} >
                    <AntDesign name="left" size={20} color={"#FFF"} />
                </TouchableOpacity>

                {/* <TextInput style={styles.Headertext} placeholder='Search here' /> */}
                <Text style={styles.Headertext}>PROFILE</Text>

            </View>
            <ScrollView>
                <View style={styles.body}>
                    <View style={{ flexDirection: "row", width: '100%', marginBottom: 20, paddingHorizontal: 5, }}>
                        <View style={{ alignItems: 'flex-end', width: '60%', flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <View style={{ position: 'relative' }}>
                                {image ? <Image source={{ uri: image }} style={styles.img} /> : <Image style={styles.img} source={require('../Images/profileuser.png')} />}
                                <TouchableOpacity style={styles.icon} onPress={pickImage} >
                                    <SimpleLineIcons name="camera" size={22} color={'#fff'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ width: '40%', alignItems: "flex-end" }}>
                            <TouchableOpacity style={styles.Btn}>
                                <Text style={{
                                    color: "white",
                                    fontSize: 13, width: '100%',
                                    textAlign: 'center'
                                }}>SAVE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <TouchableOpacity style={styles.Touch} >
                            <Ionicons style={{ width: '10%' }} name="person-remove-outline" size={20} color={"#41C9F2"} />
                            {/* <Image resizeMode="contain" style={styles.footerImg} source={require('../../Images/activeOrder.png')} /> */}

                            <TextInput style={styles.text} placeholder="john smith" placeholderTextColor="#000" />
                            <Feather style={{ width: '10%' }} name="edit-3" size={20} color={"#000"} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Touch} >
                            <Fontisto style={{ width: '10%' }} name="email" size={20} color={"#41C9F2"} />
                            {/* <Image resizeMode="contain" style={styles.footerImg} source={require('../../Images/activeOrder.png')} /> */}

                            <TextInput style={styles.text} placeholder="abc23@gmail.com" placeholderTextColor="#000" />
                            <MaterialIcons style={{ width: '10%' }} name="keyboard-arrow-right" size={25} color={"#000"} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Touch} >
                            <Feather style={{ width: '10%' }} name="phone" size={20} color={"#41C9F2"} />
                            {/* <Image resizeMode="contain" style={styles.footerImg} source={require('../../Images/activeOrder.png')} /> */}

                            <TextInput style={styles.text} placeholder="Moblie no." placeholderTextColor="#000" maxLength={10} keyboardType='numeric' />
                            <MaterialIcons style={{ width: '10%' }} name="keyboard-arrow-right" size={25} color={"#000"} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Touch} >
                            <Ionicons style={{ width: '10%' }} name="location-outline" size={22} color={"#41C9F2"} />
                            {/* <Image resizeMode="contain" style={styles.footerImg} source={require('../../Images/activeOrder.png')} /> */}

                            <TextInput style={styles.text} placeholder="Manikbaugh pune-411051" placeholderTextColor="#000" />
                            <MaterialIcons style={{ width: '10%' }} name="keyboard-arrow-right" size={25} color={"#000"} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Touch} onPress={() => navigation.navigate('OrderStatus')}  >
                            <Ionicons name="ios-person-circle-outline" color={"#41C9F2"} size={22} />
                            {/* <Image resizeMode="contain" style={styles.footerImg} source={require('../../Images/activeOrder.png')} /> */}
                            {/* <TouchableOpacity style={styles.text}> */}
                            <Text style={styles.text}> My orders</Text>
                            {/* </TouchableOpacity> */}
                            <MaterialIcons style={{ width: '10%' }} name="keyboard-arrow-right" size={25} color={"#000"} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Touch} >
                            {/* <FontAwesome style={{ width: '10%' }} name="envelope-o" size={25} color={"#41C9F2"} /> */}
                            <Image resizeMode="contain" style={styles.footerImg} source={require('../Images/Rename.png')} />

                            <TextInput style={styles.text} placeholder="Payment" placeholderTextColor="#000" />
                            <MaterialIcons style={{ width: '10%' }} name="keyboard-arrow-right" size={25} color={"#000"} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <View
                style={styles.footer}
            >

                <TouchableOpacity style={styles.alignFooter}
                    onPress={() => navigation.navigate('Offer')}
                >

                    <Image resizeMode="contain" style={styles.footerImg} source={require('../Images/home.png')} />

                    <Text style={styles.footertxt}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.alignFooter}
                    onPress={() => navigation.navigate('OrderStatus')}
                >

                    <Image resizeMode="contain" style={styles.footerImg} source={require('../Images/order.png')} />

                    <Text style={styles.footertxt}>My order</Text>
                </TouchableOpacity>




                <TouchableOpacity style={styles.alignFooter}
                    onPress={() => navigation.navigate('AddToCart')}
                >
                    <Image resizeMode='contain' style={styles.footerImg} source={require('../Images/cart.png')} />

                    <Text style={styles.footertxt}>My Order</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.alignFooter}
                    onPress={() => navigation.navigate('Profile')}
                >
                    <View style={styles.activefooter}>
                        <Image resizeMode="contain" style={styles.footerImg} source={require('../Images/activeprofile.png')} />
                    </View>
                    <Text style={styles.footertxt}>Profile</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingBottom: 60,
        backgroundColor: '#fff',
    },
    body: {
        flex: 1,
        alignItems: 'center',

        backgroundColor: '#fff',
        // paddingHorizontal: 10
    },
    header: {
        height: 70,
        width: '100%',
        backgroundColor: '#41C9F2',
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5

    },
    Headericon: {
        width: '10%'
    },
    Touch: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        height: 85,
        paddingHorizontal: 14,
        borderBottomWidth: 1,
        borderColor: '#c4c4c4',
        justifyContent: 'space-between'
    },
    text: {
        color: '#000',
        width: '80%',
        paddingHorizontal: 20,
        fontSize: 15,

    },
   
    Headertext: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        width: '80%',
        // textAlign: 'center'
    },
    Btn: {
        backgroundColor: '#41C9F2',
        // height: 25,
        paddingVertical: 3,
        paddingHorizontal: 10,
        // width: 70,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { weight: 1, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5,
        // borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        height: 80,
        width: 80,
        borderRadius: 100,
        position: 'relative',
    },
    icon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#41C9F2',
        borderRadius: 100,
        height: 32,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center'
    }, box: {
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { weight: 1, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 10,
        elevation: 5,
        width: '80%',
        // borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    footer: {
        width: '100%',
        height: 70,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        left: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16
    }, activefooter: {
        // alignItems: 'center',
        borderRadius: 100,
        padding: 5,
        backgroundColor: '#41C9F2'
    },

    footerImg: {
        width: 30,
        height: 30,
    },
    footertxt: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#677890',
        fontSize: 13
    },
    alignFooter: {
        alignItems: 'center',

    },
})