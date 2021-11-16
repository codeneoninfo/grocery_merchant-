// import React from "react";
// import { View, Text, TextInput, TouchableOpacity, StatusBar, StyleSheet, ScrollView, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native'
// export default function MerchantLogin() {
//     const navigation = useNavigation();
//     return (
//         <View style={styles.Container}>
//             <StatusBar />
//             <ScrollView showsVerticalScrollIndicator={false}>
//                 <View style={{ alignItems: 'center', paddingVertical: 50 }}>
//                     <Image style={styles.Image}
//                         source={require('../Images/Grocery.png')}
//                     />
//                 </View>

//                 <Text style={styles.Text}>Enter your Email</Text>
//                 <TextInput
//                     style={styles.Input}
//                     placeholder=""
//                 />
//                 <Text style={styles.Text}>Enter mobile number</Text>
//                 <TextInput
//                     style={styles.Input}
//                     placeholder=""
//                     maxLength={10}
//                     keyboardType={'number-pad'}
//                 />
//                 <View style={{ flexDirection: 'row', justifyContent: "center", marginBottom: 30 }}>
//                     {/* <Text style={styles.account}>Alreday have an account ? </Text> */}
//                     <Text style={styles.account}>Don’t have an account? </Text>

//                     <TouchableOpacity onPress={() => navigation.navigate('MerchantRegister')}>
//                         <Text style={styles.login}>Register</Text>
//                     </TouchableOpacity>
//                 </View>
//                 <View style={{ alignItems: 'center' }}>
//                     <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('BottomTabNavigation')}>
//                         <Text style={styles.Text2}>Login</Text>
//                     </TouchableOpacity>
//                 </View>
//             </ScrollView>

//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     Container: {
//         height: '100%',
//         width: '100%',
//         backgroundColor: '#f12a10',
//         paddingHorizontal: 30
//         // alignItems:'center'
//     },
//     Input: {
//         fontSize: 15,
//         fontWeight: 'bold',
//         color: '#f12a10',
//         // borderWidth: 1.5,
//         // borderColor: '#f12a10',
//         width: '100%',
//         alignItems: 'center',
//         borderRadius: 10,
//         height: 60,
//         paddingHorizontal: 20,
//         marginBottom: 10,
//         backgroundColor: '#fff'

//     },
//     Text: {
//         fontWeight: 'bold',
//         fontSize: 18,
//         color: '#fff',
//         marginBottom: 10,
//     },
//     account: {
//         fontSize: 15,
//         fontWeight: 'bold',
//         color: '#000'
//     },
//     login: {
//         fontSize: 15,
//         fontWeight: 'bold',
//         color: '#fff'
//     },
//     btn: {
//         height: 60,
//         width: '50%',
//         backgroundColor: '#f67362',
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: 20,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 3 },
//         shadowOpacity: 1.0,
//         shadowRadius: 8,
//         elevation: 5,
//         marginBottom: 10
//     },
//     Text2: {
//         fontWeight: 'bold',
//         fontSize: 19,
//         color: '#fff',
//     }
// })










import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
export default function MerchantLogin() {
    const navigation = useNavigation();
    return (
        <View style={styles.conatiner}>
            <StatusBar />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <View style={styles.imgcontainer}>
                        <Image style={styles.logo} source={require('../Images/Grocery.png')} />
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={{ width: '100%', marginBottom: 10 }}>
                        <Text style={styles.enteremailtxt}>Enter your Email</Text>
                        <TextInput
                            style={styles.Textinput}
                            // placeholder="codeneonsolution@gmail.com"
                            placeholderTextColor="#C4C4C4" />
                    </View>
                    <View style={{ width: '100%', marginBottom: 20, }}>
                        <Text style={styles.enteremailtxt}>Enter mobile number</Text>
                        <TextInput
                            style={styles.Textinput}
                            // placeholder="+91 ****10"3
                            maxLength={10}
                            keyboardType="numeric"
                            placeholderTextColor="#C4C4C4" />
                    </View>
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', marginBottom: 30 }}>
                        <Text style={styles.Alredaytxt}>Don’t have an account ?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('MerchantRegister')}>
                            <Text style={styles.registertxt}>Register</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '100%', alignItems: 'center', marginBottom: 20 }}>
                        <TouchableOpacity style={styles.btncontainer} onPress={() => navigation.navigate('BottomTabNavigation')}>
                            <Text style={styles.otptxt}> Login </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </View>

    )

}
const styles = StyleSheet.create({
    conatiner: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F12A10',
    },
    header: {
        width: '100%',
        height: 300,
        justifyContent: 'center',
        alignItems: 'center'
    },
    // imgcontainer: {
    //     width: 170,
    //     height: 170,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     shadowColor: '#F12A10',
    //     shadowOffset: { width: 0, height: 3 },
    //     shadowOpacity: 0.8,
    //     shadowRadius: 2,
    //     elevation: 8,
    //     backgroundColor: '#fff',
    //     borderRadius: 100
    // },
    // logo: {
    //     height: 140,
    //     width: 140,
    // },
    body: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 10
    },
    enteremailtxt: {
        fontSize: 18,
        color: 'white',
        marginBottom: 10,
        fontWeight: 'bold'
    },
    Textinput: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 5,
        width: '100%',
        height: 60,
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 17,
        color: '#F12A10'
    },
    otptxt: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
        color: '#fff',
    },
    btncontainer: {
        backgroundColor: '#F9A89D',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: '50%',
        height: 50,
        shadowColor: '#000',
        shadowOffset: { weight: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 11,
        // paddingVertical: 10,
        // paddingHorizontal: 10,
        elevation: 5,
    },
    registertxt: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff'
    },
    Alredaytxt: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000'
    },
})