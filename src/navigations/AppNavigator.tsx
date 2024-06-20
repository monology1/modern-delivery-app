import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import BottomTabs from "../components/BottomTabs";

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <>
            <NavigationContainer>
                <BottomTabs />
            </NavigationContainer>
        </>
    )
}
