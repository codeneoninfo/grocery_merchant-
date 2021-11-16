import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StatusBar, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductList from "./ProductList";
// import Modal from 'react-native-modal';
import { Modal } from "react-native-paper";
// import 
// import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'
export default function MerchantProducts() {
    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);
    // const [disable, setDisable] = useState(true);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const [search, setSearch] = useState(false)
    const HideSearchBtn = () => {
        setSearch(!search)
    };
    // const MerchantProducts = () => {
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    // const containerStyle = {backgroundColor: 'pink', padding: 20,height:20};

    // }



    // const [isModalVisible, setModalVisible] = useState(false);
    // const [disable, setDisable] = useState(true);
    // const toggleModal = () => {
    //     setModalVisible(!isModalVisible);
    // };


    const ListItem = ({ ProductList, index }) => {
        return (
            <View>

                <StatusBar />
                <ScrollView>
                    <View style={styles.Box}>
                        <View key={index} style={styles.container1}>
                            <TouchableOpacity>
                                <Image resizeMode={"contain"} style={styles.image} source={ProductList.image} />
                            </TouchableOpacity>
                            {/* <TouchableOpacity>
                            <MaterialCommunityIcons name="dots-vertical" size={35} color="#f12a10" />
                            </TouchableOpacity> */}
                            <View style={{ backgroundColor: '#fffff' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={styles.name}>{ProductList.name}</Text>
                                    <TouchableOpacity onPress={showModal}  >
                                        <MaterialCommunityIcons name="dots-vertical" size={35} color={'#9c9c9c'} />
                                    </TouchableOpacity>


                                </View>



                                {/* <Modal visible={visible} >
                                    <View Style={styles.modalcontainer}>
                                        <TouchableOpacity style={{ width: '60%', justifyContent: 'flex-end', alignItems: 'flex-end', backgroundColor: 'pink' }} onPress={() => navigation.navigate('AddNewProduct')}>

                                            <Text>I am a Beautiful slient sea.</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ width: '60%', justifyContent: 'flex-end', alignItems: 'flex-end', backgroundColor: 'skyblue' }} onPress={hideModal}>

                                            <Text>I am a Beautiful slient sea.</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ width: '60%', justifyContent: 'flex-end', alignItems: 'flex-end', backgroundColor: 'orange' }} onPress={hideModal}>

                                            <Text>I am a Beautiful slient sea.</Text>
                                        </TouchableOpacity>
                                    </View>
                                </Modal> */}


                                <Text style={styles.name1}>{ProductList.name1}</Text>
                                <Text style={styles.name2}>{ProductList.name2}</Text>
                                <Text style={styles.name3}>{ProductList.name3}</Text>
                            </View>
                            {/* <TouchableOpacity >
                            <MaterialCommunityIcons name="dots-vertical" size={25} color="#c2c2c2" />
                            </TouchableOpacity> */}

                        </View>
                    </View>
                </ScrollView >

            </View >


        );
    }
    return (
        <View style={styles.Container}>
            <StatusBar />
            <View style={styles.Header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name="chevron-left" size={35} color="#f12a10" />
                </TouchableOpacity>
                {search ?
                    (<TextInput autoFocus={true} style={styles.Heading} placeholder='Search here' />) :
                    <Text style={styles.Heading}>PRODUCTS</Text>
                }
                <TouchableOpacity onPress={HideSearchBtn}>
                    <Feather name="search" size={30} color="#f12a10" />
                </TouchableOpacity>
            </View>
            <FlatList showsVerticalScrollIndicator={false}
                data={ProductList}
                numColumns={1}
                renderItem={({ item }) => <ListItem ProductList={item} />}
                keyExtractor={(item) => item.id}
            // horizontal={true}
            />
            <View style={styles.bg}>
                <TouchableOpacity style={styles.Btn} onPress={() => navigation.navigate('AddNewProduct')}>
                    <Text style={styles.Text}>Add New Product</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    Container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        alignContent: 'center',
        position: 'relative'
    },
    bg: {
        width: '100%',
        position: 'absolute',
        bottom: 10,
        left: 0,
        backgroundColor: 'transparent',
        alignItems: 'center'
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
        paddingHorizontal: 10,
        marginBottom: 20
    },
    Heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#F12A10',
        width: '80%',
        textAlign: 'center'
    },
    Box: {
        height: 160,
        alignItems: 'center',
        // backgroundColor:'yellow',
        justifyContent: 'center',
        marginBottom: 10
    },
    container1: {
        flexDirection: 'row',
        height: 150,
        width: '90%',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1.0,
        shadowRadius: 8,
        elevation: 5,
        // borderWidth: 1,
        alignItems: 'center',
        borderRadius: 20,
        // marginBottom:60
    },
    image: {
        height: 160,
        width: 160,
        alignItems: 'center'
    },
    name: {
        fontSize: 18,
        color: '#000',
        width: '60%'
    },
    name1: {
        fontSize: 15,
        color: '#616161'
    },
    name2: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000'
    },
    name3: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#f12a10'
    },
    Btn: {
        width: '80%',
        height: 55,
        backgroundColor: '#f12a10',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1.0,
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
    },
    Text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff'
    },
    ModalContainer: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        height: 100,
        width: '80%',
        backgroundColor: '#fff'
    },
    modalcontainer: {
        width: '80%',
        height: 90,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderRadius: 16,
        // justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        // paddingVertical: 15
    },
    icon: {
        // position: 'absolute',
        // bottom: 0,
        // left: 190,
        // top: 63,
        // backgroundColor: '#C4C4C4',
        // borderRadius: 100,
        // height: 32,
        // width: 30,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
})