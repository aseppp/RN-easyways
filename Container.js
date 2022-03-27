import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import Calculator from "./src/screen/Calculator"
import Profile from "./src/screen/Profile"
import Todos from "./src/screen/Todos"

const Tab = createBottomTabNavigator();
const Container = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({route}) => ({
                tabBarStyle: {backgroundColor: '#F6C2BC'},
                tabBarShowLabel: false,
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;

                    if (route.name === 'Calculator') {
                        iconName = focused ? "calculator" : "calculator"
                    } else if (route.name === 'Profile') {
                        iconName = focused ? "home" : "home"
                    } else if (route.name === 'Todos') {
                        iconName = focused ? "list" : "list"
                    }

                    return <Ionicons name={iconName} size={22}/>
                }
            })}>
                <Tab.Screen options={{headerShown: false}} name="Profile" component={Profile}/>
                <Tab.Screen options={{headerShown: false}} name="Calculator" component={Calculator}/>
                <Tab.Screen options={{headerShown: false}} name="Todos" component={Todos}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}


export default Container