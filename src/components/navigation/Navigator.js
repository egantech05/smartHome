import * as React from 'react';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from "../../pages/Home";
import Temperature from "../../pages/Temperature";
import Electricity from "../../pages/Electricity";
import Water from "../../pages/Water";

const Stack = createNativeStackNavigator();

export default function Navigator(){
    return(
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, contentStyle:{backgroundColor:"#212121"} }} >
    
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Temperature" component={Temperature} />
        <Stack.Screen name="Electricity" component={Electricity} />
        <Stack.Screen name="Water" component={Water} />

      </Stack.Navigator>
    );


};