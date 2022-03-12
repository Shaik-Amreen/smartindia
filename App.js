import { StatusBar } from 'expo-status-bar';

import Farmer from './src/Farmer';
import Login from './src/Login';
import ModalDemo from './src/ModalDemo';
import Voice from './src/Voice';
import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet, Button, TouchableOpacity, Image, Alert } from 'react-native';

import Automatedvoice from './src/Automatedvoice';

export default function App() {
  const [status, setStatus] = useState(0)
  const [number, onChangeNumber] = React.useState('');
  const [valid, setValid] = useState('')



  const press = () => {
    if (number.length == 10) {
      setStatus(1)
      setValid(null)
    }
    else {
      setValid('Enter a valid phone number')
    }
  }


  const change = (e) => {
    onChangeNumber(e)
    setValid(100)
  }

  return (
    <View style={styles.cont}>

      {status == 0 ? <View style={styles.container}>
        <Text style={styles.heading}>AGRI MARKET</Text>
        <Image
          source={require('./assets/farmer.gif')}
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
        {(valid == '' && valid != 100) ? <Automatedvoice name="Hello ! Welcome to Agri market .Your cuurent location is Angallu,
    you can grow Tomatoes , corn  Please enter phone number to proceed further" /> : (valid != 100 && valid != null) ?
          <Automatedvoice name="Enter a valid phone number . This number no longers exists " /> : null}

      </View> : <Farmer />}
    </View>
  );
}

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
  cont: {
    flex: 1, width: '100%', justifyContent: 'center'
  },
  container: {
    flex: 3,
    width: '100%',
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
