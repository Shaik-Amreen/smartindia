import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import { ScrollView } from 'react-native-web';




function HomeScreen() {


    const [farmdata, setfarmdata] = useState([
        {
            discount: { quantity: '10kg', price: '200' },
            image: require("../assets/carrot.gif"),
            price: { vegtype: 'carrot', price: '100' },
            typeid: "12",
            _id: "62278e73e3197fd5361e388d"
        },
        {
            discount: { quantity: '10kg', price: '200' },
            image: require("../assets/tomato.gif"),
            price: { vegtype: 'tomato', price: '100' },
            typeid: "12",
            _id: "62278e73e3197fd5361e388e"
        }
    ])


    useEffect(() => {
        fetchdata()
    }, [])
    const fetchdata = () => {
        // axios.post(`http://localhost:4000/farmer/finddetails`).then((response) => {
        //     setfarmdata(response.data)
        //     console.log(response.data)
        // });
        // console.log(farmdata)


    }
    return (
        <ScrollView style={{ margin: 30 }}>
            <ScrollView>
                {farmdata.map((e) =>
                    <View key={e._id}>
                        <View>
                            <Image
                                source={e.image}
                                style={{ width: 320, height: 320 }}
                            />
                        </View>

                        <Text style={styles.heading}>{e.price.vegtype.toLocaleUpperCase()}</Text>
                        <Text>{e.price.price}</Text>
                        <Text> {e.discount.quantity} {e.discount.price}</Text>
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
                            iconName = focused ? 'ios-list-box' : 'ios-list';
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
