import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from "./screens/LoginScreen";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import * as Font from 'expo-font';
import RegisterScreen from "./screens/RegisterScreen";


const Stack = createNativeStackNavigator();


export default function App() {



    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="HomeScreen">
              <Stack.Screen
                  name="HomeScreen"
                  component={HomeScreen}
                  options={{title: 'Welcome'}}
              />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}


