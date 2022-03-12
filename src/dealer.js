import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';

import Voice from './Voice';




function HomeScreen() {


    const [farmdata, setfarmdata] = useState([
        {
            discount: { quantity: '10kg', price: '200' },
            image: require("../assets/plus.gif"),
            price: { vegtype: 'You can click here to proceed with separate category', price: '100' },
            typeid: "12",
            _id: "62278e73e3197fd5361e388e"
        },
        {
            discount: { quantity: '10kg', price: '200' },
            image: require("../assets/Carrot.gif"),
            price: { vegtype: 'carrot', price: '100' },
            typeid: "12",
            _id: "62278e73e3197fd5361e388d"
        },

        {
            discount: { quantity: '10kg', price: '200' },
            image: require("../assets/Tomato.gif"),
            price: { vegtype: 'tomato', price: '100' },
            typeid: "12",
            _id: "62278e73e3197fd5361e388e"
        },
        {
            discount: { quantity: '10kg', price: '200' },
            image: require("../assets/pumpkin.gif"),
            price: { vegtype: 'Pumpkin', price: '100' },
            typeid: "12",
            _id: "62278e73e3197fd5361e388e"
        },
        {
            discount: { quantity: '10kg', price: '200' },
            image: require("../assets/Beans.jpg"),
            price: { vegtype: 'Beans', price: '100' },
            typeid: "12",
            _id: "62278e73e3197fd5361e388e"
        }
        , {
            discount: { quantity: '10kg', price: '200' },
            image: require("../assets/Bittergourd.jpg"),
            price: { vegtype: 'Bitter gourd', price: '100' },
            typeid: "12",
            _id: "62278e73e3197fd5361e388e"
        }
        , {
            discount: { quantity: '10kg', price: '200' },
            image: require("../assets/Bottlegourd.jpg"),
            price: { vegtype: 'Bottle gourd', price: '100' },
            typeid: "12",
            _id: "62278e73e3197fd5361e388e"
        }
        , {
            discount: { quantity: '10kg', price: '200' },
            image: require("../assets/Capsicum.jpg"),
            price: { vegtype: 'Capsicum', price: '100' },
            typeid: "12",
            _id: "62278e73e3197fd5361e388e",
        },
        {
            discount: { quantity: '10kg', price: '200' },
            image: require("../assets/Chilli.jpg"),
            price: { vegtype: 'Chilli', price: '100' },
            typeid: "12",
            _id: "62278e73e3197fd5361e388e"
        },
        {
            discount: { quantity: '10kg', price: '200' },
            image: require("../assets/Cucumber.jpg"),
            price: { vegtype: 'Cucumber', price: '100' },
            typeid: "12",
            _id: "62278e73e3197fd5361e388e"
        }
        , {
            discount: { quantity: '10kg', price: '200' },
            image: require("../assets/Ivygourd.jpg"),
            price: { vegtype: 'Ivy gourd', price: '100' },
            typeid: "12",
            _id: "62278e73e3197fd5361e388e"
        }
        ,
        {
            discount: { quantity: '10kg', price: '200' },
            image: require("../assets/LadyFinger.jpg"),
            price: { vegtype: 'Lady Finger', price: '100' },
            typeid: "12",
            _id: "62278e73e3197fd5361e388e"
        },
        {
            discount: { quantity: '10kg', price: '200' },
            image: require("../assets/Leafyvegetables.jpg"),
            price: { vegtype: 'Leafy vegetables', price: '100' },
            typeid: "12",
            _id: "62278e73e3197fd5361e388e"
        }
        , {
            discount: { quantity: '10kg', price: '200' },
            image: require("../assets/Potato.png"),
            price: { vegtype: 'Potato', price: '100' },
            typeid: "12",
            _id: "62278e73e3197fd5361e388e"
        },
        {
            discount: { quantity: '10kg', price: '200' },
            image: require("../assets/Radish.jpg"),
            price: { vegtype: 'Radish', price: '100' },
            typeid: "12",
            _id: "62278e73e3197fd5361e388e"
        }
    ])


    useEffect(() => {
        fetchdata()
    }, [])
    const fetchdata = () => {
        axios.post(`http://localhost:4000/farmer/finddetails`).then((response) => {
            // setfarmdata(response.data)
            console.log(response.data)
        });
        console.log(farmdata)


    }
    return (
        <ScrollView >
            <ScrollView>
                {farmdata.map((e) =>
                    <View key={e._id} style={{ elevation: 5, backgroundColor: 'white', margin: 30 }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Voice {...{ "name": `Hey buddy , This is ${e.price.vegtype} , Click on it , if you want to proceed to sell your product , in this category .` }} />
                            <Image
                                source={e.image}
                                style={{ width: 320, height: 320 }}
                            />
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 30 }}>
                            <Text style={styles.heading}>{e.price.vegtype.toLocaleUpperCase()}</Text>
                            {/* <Text style={{ color: 'grey' }}>{e.price.price} ruppes per kg</Text>
                            <Text style={{ color: 'grey' }}>  {e.discount.price} rupees only more than {e.discount.quantity} kg</Text> */}
                        </View>
                    </View>)}
            </ScrollView>
        </ScrollView>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function Farmer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'ios-list' : 'ios-list';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'red'
    },
    heading: {
        color: '#1b1c1e',
        fontWeight: '500',
        fontSize: 20
    }
});
