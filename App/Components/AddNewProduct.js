import React, { useState, useEffect } from "react";
import { View, Text,  TouchableOpacity, StatusBar, StyleSheet, ScrollView, Image } from 'react-native';
import { RadioButton } from "react-native-paper";
import Feather from 'react-native-vector-icons/Feather';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    TextInput
} from 'react-native-paper'
export default function AddNewProduct() {
    const [checked, setChecked] = React.useState('first');
    const navigation = useNavigation();

    const [search, setSearch] = useState(false)
    const HideSearchBtn = () => {
        setSearch(!search)
    }

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
            aspect: [4, 4],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    }


    return (
        <View style={styles.Conatiner}>
            <StatusBar />

            <View style={styles.Header}>
                {/* <TouchableOpacity onPress={() => navigation.goBack()}> */}
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name="chevron-left" size={35} color="#f12a10" />
                </TouchableOpacity>
                {search ?
                    (<TextInput autoFocus={true} style={styles.Heading} placeholder='Search here' />) :
                    <Text style={styles.Heading}>ADD NEW PRODUCTS</Text>
                }
                {/* <TouchableOpacity onPress={HideSearchBtn}>
                    <Feather name="search" size={30} color="#f12a10" />
                </TouchableOpacity> */}
            </View>
            <ScrollView>
                <View>

                <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>

                        {/* <Text style={styles.text}>Product Id</Text> */}
                        <TextInput
                        style={styles.Textinput}
                        mode="outlined"
                        label="Product Id"
                        
                        theme={{ colors: { primary: '#f12a10' } }}
                        underlineColor={'white'}
                        placeholderTextColor="#f12a10"
                        
                    />
                         <TextInput
                        style={styles.Textinput}
                        mode="outlined"
                        label="Product Name"
                        
                        theme={{ colors: { primary: '#f12a10' } }}
                        underlineColor={'white'}
                        placeholderTextColor="gray"
                        
                    />
                        <TextInput
                        style={styles.Textinput}
                        mode="outlined"
                        label="Product Price"
                        
                        theme={{ colors: { primary: '#f12a10' } }}
                        underlineColor={'white'}
                        placeholderTextColor="gray"
                        keyboardType='number-pad'
                        
                    />
                    </View>
                    <View style={{ paddingHorizontal: 20, }}>
                        <Text style={styles.text}>Stock Status</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                            <RadioButton
                                value="first"
                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('first')}
                            />
                            <Text style={styles.name1}>In Stock</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30 }}>
                            <RadioButton
                                value="first"
                                status={checked === 'Second' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('Second')}
                            />
                            <Text style={styles.name1}>Out of Stock</Text>
                        </View>

                    </View>
                    <View style={{ paddingHorizontal: 20, }}>
                        <Text style={styles.text}>Add Product Image*</Text>
                        <Text style={styles.format}>*Format: .png,.jpg,.svg,.jpeg</Text>
                        {/* <View style={{ alignItems: 'center' }}> */}
                            {image ? <Image source={{ uri: image }} style={styles.img} /> : null}
                            <TouchableOpacity style={styles.Btn} onPress={pickImage}>
                                <Feather name="upload" size={25} color="#f12a10" />
                                <Text style={styles.Upload}>Upload File</Text>
                            </TouchableOpacity>
                        {/* </View> */}
                    </View>
                    <View style={{alignItems:'center'}}>
                <TouchableOpacity style={styles.Btn2} onPress={() => navigation.navigate('BottomTabNavigation')}>
                    <Text style={styles.save}>Save</Text>
                </TouchableOpacity>
            </View>

                </View>
            </ScrollView>

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
        // justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginBottom: 20
    },
    Heading: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#F12A10',
        paddingHorizontal: 30
        // textAlign: 'center'
    },
    input: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#f12a10',
        borderWidth: 1,
        borderColor: '#8e8e8e',
        width: '100%',
        alignItems: 'center',
        borderRadius: 10,
        // height: 55,
        paddingHorizontal: 20,
        marginBottom: 10
    },
    text: {
        fontSize: 17,
        // fontWeight: 'bold',
        color: "#000",
        marginBottom: 10
    },
    name1: {
        fontWeight: 'bold',
        fontSize: 16,
        // marginBottom: 20,
        alignItems: 'center'
    },
    Btn: {
        // height: 40,
        // width: '50%',
        // backgroundColor: '#f12a10',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        // paddingHorizontal: 25,
        // borderRadius: 10,
        marginBottom: 30

    },
    format: {
        fontSize: 13,
        color: '#000',
        marginBottom: 10
    },
    Upload: {
        fontSize: 14,
        color: '#f12a10',
        fontWeight: 'bold',
        paddingHorizontal:10
    },
    Btn2:{
        height:50,
        width:'80%',
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
    }, 
     Textinput: {
        backgroundColor: 'white',
        borderRadius: 20,
        marginBottom: 16,

        width: '100%',
        fontSize: 16,

    },
})