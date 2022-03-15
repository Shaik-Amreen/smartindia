import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import Automatedvoice from './Automatedvoice';
import Voice from './Voice';



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
            image: require("../assets/beans.jpg"),
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
            image: require("../assets/cucumber.jpg"),
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
            image: require("../assets/potato.png"),
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
        },
        {
            discount: { quantity: '10kg', price: '200' },
            image: require("../assets/plus.gif"),
            price: { vegtype: ' separate category', price: '100' },
            typeid: "12",
            _id: "62278e73e3197fd5361e388e"
        },
    ])

    const [bill, setbill] = useState()


    const [vis, setvis] = useState(false)
    const [typename, settypename] = useState('')
    const [congo, setcongo] = useState('')
    const [perkg, setperkg] = useState('')
    const [diskg, setdiskg] = useState('')
    const [disprice, setdisprice] = useState('')
    const [avail, setavail] = useState('')
    const presscontent = (e) => {
        setvis(true)
        settypename(e)
        setcongo('')
    }

    const pressbutton = () => {
        setvis(false)
    }


    useEffect(() => {
        fetchdata()
    }, [])


    const pressok = () => {
        setvis(false)
        setcongo('done')
        setbill([...diskg, ...disprice, ...perkg])
        console.log(bill, "hyyyyyy")
    }

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
                    <View key={e.price.vegtype} style={{ elevation: 5, backgroundColor: 'white', margin: 30 }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Voice {...{ "name": `Hello , This is ${e.price.vegtype} , Click on it , if you want to proceed to sell your product , in this category .` }} />

                            <TouchableOpacity onPress={() => presscontent(e.price.vegtype)}>

                                <Image

                                    source={e.image}
                                    style={{ width: 320, height: 320 }}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 30 }}>
                            <Text style={styles.heading}>{e.price.vegtype.toLocaleUpperCase()}</Text>
                            {/* <Text style={{ color: 'grey' }}>{e.price.price} ruppes per kg</Text>
                            <Text style={{ color: 'grey' }}>  {e.discount.price} rupees only more than {e.discount.quantity} kg</Text> */}
                            {vis && typename == e.price.vegtype ?
                                <View>

                                    <Automatedvoice name="Hey ! enter price per kg and discount information in the below fields to proceed further " />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="enter price per kg"
                                        keyboardType="numeric"
                                        onChangeText={setperkg}

                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="enter discount range"
                                        keyboardType="numeric"
                                        onChangeText={setdiskg}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={setdisprice}


                                        placeholder="enter  discount price "
                                        keyboardType="numeric"
                                    />
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={setavail}
                                        placeholder="enter  availability "
                                        keyboardType="numeric"
                                    />
                                    {(congo == 'done') ? <Automatedvoice name="Hey ! enter price per kg and discount information in the below fields to proceed further " /> : null}
                                    <TouchableOpacity
                                        style={styles.button} >
                                        <Text style={styles.text} onPress={pressok}>SUBMIT</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.buttondanger} onPress={pressbutton}>
                                        <Text style={styles.text}>CLOSE</Text>
                                    </TouchableOpacity>



                                </View>

                                : null}
                        </View>

                    </View>)}
            </ScrollView>
        </ScrollView>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 60 }}>
            <Text>Congratulations ! </Text>
            <Text>category : Tomato</Text>
            <Text>Price per kg : 40</Text>
            <Text>Disount kg : 10</Text>
            <Text>Disount price : 30</Text>
        </View>
    );
}

function Fertilizers() {

    return (
        <View style={styles.container}>
            <Voice {...{ "name": `Hello , This is compost , Click on it , to pruchase` }} />
            <Image

                source={require('../assets/fertlizer.jpg')}
                style={{ width: 320, height: 320 }}
            />

        </View>
    )

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
                        } else if (route.name === 'History') {
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
                <Tab.Screen name="History" component={SettingsScreen} />
                <Tab.Screen name="Fertilizersname" component={Fertilizers} />

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
    },
    heading: {
        color: '#1b1c1e',
        fontWeight: '500',
        fontSize: 20
    }, input: {
        height: 40,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        width: '100%',
        marginBottom: 30,
        borderColor: '#d3d3d3'
    },
    button: {
        alignItems: "center",
        backgroundColor: "green",
        padding: 10,
        marginBottom: 20,


    },
    buttondanger: {
        alignItems: "center",
        backgroundColor: "crimson",
        padding: 10,

    }, text: {
        color: 'white'
    }
});
