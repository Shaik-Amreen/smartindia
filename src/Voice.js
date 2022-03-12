import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as Speech from 'expo-speech';

export default function Voice(props) {

    const speak = (content) => {
        Speech.speak(content);
    };

    //Price is , ${props.name.price.price} per kg. If you buy more than ${props.name.discount.quantity} , you get at ${props.name.discount.price} rupees only`

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button} onPress={() => speak(props.name)}>

                <Text style={styles.text}>Click here</Text>
            </TouchableOpacity>

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