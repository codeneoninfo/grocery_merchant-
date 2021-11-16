import React,{useState} from "react";
import { View, Text, TextInput, TouchableOpacity, StatusBar, StyleSheet, ScrollView, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import DateTimePicker from '@react-native-community/datetimepicker'
export default function DeliveryAttendence() {




  

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Empty');
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        setText(fDate)
        console.log(fDate)
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };






    return (
        <View style={styles.Conatiner}>
            <StatusBar />
            <View style={styles.Header}>
                <TouchableOpacity>
                    <Feather name="chevron-left" size={35} color="#f12a10" />
                </TouchableOpacity>
                <Text style={styles.Heading}>ATTENDANCE</Text>
                <TouchableOpacity>
                    <Image style={styles.Image}
                        source={require('../Images/Bell.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.Body}>
                <View style={styles.Box}>
                    <View style={{ flexDirection: 'row',alignItems:'center' }}>
                        <Entypo name="dot-single" size={25} color="green" />
                        <Text style={styles.present}>Present</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Entypo name="dot-single" size={25} color="red" />
                        <Text style={styles.present}>Absent</Text>
                    </View>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                    <Text style={styles.Text}>Attendence Summary</Text>
                    <TouchableOpacity style={styles.box2}>
                        <Text style={styles.date} 
                            onChangeText={(dateOfBirth) => setdateOfBirth(dateOfBirth)}>{text}</Text>
                        <Entypo name="chevron-small-down" size={25} color="black" onPress={showDatepicker}/>
                    </TouchableOpacity>
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}
                </View>
                <Text style={styles.days}>Total working Day : 30</Text>
                <Text style={styles.days}>Total working Day : 21</Text>
                <Text style={styles.days}>Total working Day : 09</Text>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    Conatiner: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        // alignItems: 'center'
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
        color: '#F12A10'
    },
    Image: {
        height: 25,
        width: 25
    },
    Body: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10
    },
    Box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        height: 40,
        width: '100%',
        backgroundColor: '#dfdfdf',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#000',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 8,
        elevation: 5,
    },
    present: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000'
    },
    box2: {
        flexDirection: 'row',
        backgroundColor: '#fdeae8',
        borderColor: '#fbcdc7',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        alignItems:'center'
    },
    Text: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#666666'
    },
    days: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#000",
        marginBottom: 10
    }
})