import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as Speech from 'expo-speech';

export default function Automatedvoice(props) {


    useEffect(() => {
        Speech.speak(props.name);
    })


    //Price is , ${props.name.price.price} per kg. If you buy more than ${props.name.discount.quantity} , you get at ${props.name.discount.price} rupees only`

    return (
        <View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 8,
    },
    button: {
        alignItems: "center",
        backgroundColor: "green",
        padding: 10,

    },
    text: {
        color: 'white',

        fontWeight: "700"
    }
});