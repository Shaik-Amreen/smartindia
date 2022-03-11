import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';


const Login = () => {
    const [number, onChangeNumber] = React.useState(null);

    return (
        <View style={styles.container}>
<Text>APP NAME</Text>
            <Image
                source={require('../assets/farmer.gif')}
                style={{ width: 300, height: 200 }}
            />
            
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="enter your phone number"
                keyboardType="numeric"
            />
            <TouchableOpacity
                style={styles.button}>
                <Text style={styles.text}>SUBMIT</Text>
            </TouchableOpacity>
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
       justifyContent:'center'
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

export default Login;