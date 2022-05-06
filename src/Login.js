import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet, Button, TouchableOpacity, Image, Alert } from 'react-native';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import Automatedvoice from './Automatedvoice';

// import { StackNavigator } from 'react-navigation';
1
// import { StackNavigator } from 'react-navigation';r

const Login = () => {
    const [number, onChangeNumber] = React.useState('');
    const [valid, setValid] = useState('')
    useEffect(() => {

        _retrieveData()

    }, [])



    const press = () => {
        if (number.length == 10) {
            _storeData()
            setValid(null)
        }
        else {
            setValid('Enter a valid phone number')
        }
    }
    _retrieveData = async () => {
        try {

            const value = await AsyncStorage.getItem('typeid');

            if (value !== null) {

                console.log(value, "hyhello");
            }
        } catch (error) {
            // Error retrieving data
        }
    };

    const change = (e) => {
        onChangeNumber(e)
        setValid(100)
    }
    _storeData = async () => {
        try {
            await AsyncStorage.setItem(
                'typeid',
                number
            );
            _retrieveData()
        } catch (error) {
            // Error saving data
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>AGRI MARKET</Text>
            <Image
                source={require('../assets/farmer.gif')}
                style={{ width: 300, height: 200 }}
            />

            {(valid != 100) ? <Text style={{ color: 'crimson' }}>{valid}</Text> : null}
            <TextInput
                style={styles.input}
                onChangeText={(e) => { change(e) }}
                value={number}
                placeholder="enter your phone number"
                keyboardType="numeric"
            />
            <TouchableOpacity
                style={styles.button} onPress={press}>
                <Text style={styles.text}>SUBMIT</Text>
            </TouchableOpacity>
            {(valid == '' && valid != 100) ? <Automatedvoice name="Please enter phone number , , , , , ," /> : (valid != 100 && valid != null) ?
                <Automatedvoice name="Enter a valid phone number . This number no longers exists " /> : null}

        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        width: '100%',
        marginBottom: 30,
        borderColor: '#d3d3d3'
    },
    container: {
        flex: 3,
        width: '85%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: "center",
        backgroundColor: "green",
        padding: 10,

    },
    text: {
        color: 'white',

        fontWeight: "700"
    },
    heading: {
        fontSize: 30,
        color: 'green',
    }

});

export default Login;