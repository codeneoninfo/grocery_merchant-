import React, { useState, useEffect } from 'react';
import { View, ScrollView, TextInput, Text, TouchableOpacity, StatusBar, StyleSheet, Image, FlatList } from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
import CheckBox from 'react-native-check-box';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
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
import { useNavigation } from '@react-navigation/native'
export default function MerchantProfile() {
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
                    // alert('Sorry, we need camera roll permissions to make this work!');
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
            <View style={styles.Header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name="chevron-left" size={35} color="#f12a10" />
                </TouchableOpacity>
                <Text style={styles.Heading}>PROFILE</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
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
                        {/* <View style={{ width: '40%', alignItems: "flex-end" }}>
                            <TouchableOpacity style={styles.Btn}>
                                <Text style={{
                                    color: "white",
                                    fontSize: 13, width: '100%',
                                    textAlign: 'center'
                                }}>SAVE</Text>
                            </TouchableOpacity>
                        </View> */}
                    </View>
                    <View style={styles.box}>
                        <TouchableOpacity style={styles.Touch} >
                            <Ionicons name="person-remove-outline" size={25} color={"#F12a10"} />
                            <TextInput style={styles.text} placeholder="john smith" placeholderTextColor="#000" />
                            {/* <Feather style={{ width: '10%' }} name="edit-3" size={20} color={"#000"} /> */}
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Touch} >
                            <Entypo name="shop" size={25} color={"#F12a10"} />
                            <TextInput style={styles.text} placeholder="Grocery Delight" placeholderTextColor="#000" />
                            {/* <Feather style={{ width: '10%' }} name="edit-3" size={20} color={"#000"} /> */}
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Touch} >
                            <Feather name="phone" size={25} color={"#F12a10"} />
                            <TextInput style={styles.text} placeholder="9889988998" placeholderTextColor="#000" maxLength={10} keyboardType={'number-pad'} />
                            {/* <Feather style={{ width: '10%' }} name="edit-3" size={20} color={"#000"} /> */}
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Touch} >
                            <SimpleLineIcons name="location-pin" size={25} color={"#F12a10"} />
                            <TextInput style={styles.text} placeholder="Satavwadi,Pune-411028" placeholderTextColor="#000" />
                            {/* <Feather style={{ width: '10%' }} name="edit-3" size={20} color={"#000"} /> */}
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Touch} >
                            <Feather name="mail" size={25} color={"#F12a10"} />
                            <TextInput style={styles.text} placeholder="abc@gmail.com" placeholderTextColor="#000" />
                            {/* <Feather style={{ width: '10%' }} name="edit-3" size={20} color={"#000"} /> */}
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Touch} >
                            <Feather name="codesandbox" size={25} color={"#F12a10"} />
                            <Text style={{ width: '60%' }}>My Order History</Text>
                            <MaterialIcons style={{ width: '10%' }} name="keyboard-arrow-right" size={25} color={"#000"} />
                            {/* <Feather style={{ width: '10%' }} name="edit-3" size={20} color={"#000"} /> */}
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Touch} >
                            <Ionicons name="add-circle-outline" size={25} color={"#F12a10"} />
                            <Text style={{ width: '60%' }}>My Product</Text>
                            <MaterialIcons style={{ width: '10%' }} name="keyboard-arrow-right" size={25} color={"#000"} />
                        </TouchableOpacity>

                    </View>
                    {/* <View style={{ alignItems: 'center' }}> */}
                        <TouchableOpacity style={styles.Btn2} onPress={() => navigation.navigate('BottomTabNavigation')}>
                            <Text style={styles.save}>Save</Text>
                        </TouchableOpacity>
                    {/* </View> */}
                </View>
            </ScrollView>
            {/* <View
                style={styles.footer}
            > */}

            {/* <TouchableOpacity style={styles.alignFooter}
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
                </TouchableOpacity> */}




            {/* <TouchableOpacity style={styles.alignFooter}
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
                </TouchableOpacity> */}
            {/* </View> */}

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        // paddingBottom: 60,
        backgroundColor: '#fff',
    },
    body: {
        flex: 1,
        alignItems: 'center',

        backgroundColor: '#fff',
        // paddingHorizontal: 10
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

        paddingHorizontal: 10,
        marginBottom: 20
    },
    Heading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#F12A10',
        width: '100%',
        paddingHorizontal: 100
    },
    Headericon: {
        width: '10%'
    },
    Touch: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        height: 70,
        paddingHorizontal: 14,
        borderBottomWidth: 1,
        borderColor: '#c4c4c4',
        justifyContent: 'space-between'
    },
    text: {
        color: '#000',
        width: '80%',
        // paddingHorizontal: 20,
        fontSize: 15,

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
        backgroundColor: '#f12a10',
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
    Btn2:{
        height:50,
        width:'70%',
        backgroundColor:'#f12a10',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1.0,
        shadowRadius: 8,
        elevation: 5,
        marginBottom:20
    },
    save:{
        fontSize:20,
        fontWeight:'bold',
        color:"#fff"
    }
})