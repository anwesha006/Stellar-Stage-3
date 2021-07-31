import * as React from "react";
import {View,Text,TouchableOpacity,StyleSheest} from "react-native";
import DailyPicScreen from './screens/DailyPic';
import HomeScreen from "./Screens/Home";
import SpaceCraftScreen from './screens/SpaceCrafts';
import StarMapScreen from './screens/StarMap';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class App extends React.Component{
  render() {
    function App() {
    return (
      <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
        }}>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="DailyPic" component={DailyPicScreen}/>
      <Stack.Screen name="SpaceCraft" component={SpaceCraftScreen}/>
      <Stack.Screen name="StarMap" component={StarMapScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
    }
  }
}

const Stack= createStackNavigator()