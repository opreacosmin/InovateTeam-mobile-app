import {Text, View, SafeAreaView, Pressable, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useLayoutEffect, useState} from "react";
import {StatusBar} from "expo-status-bar";
import {useNavigation} from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons';


const RegisterScreen = ({navigation}) =>{
    const nav= useNavigation();

    useLayoutEffect(() => {
        nav.setOptions({
            headerShown: false,
        });
    }, []);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
    };

    return (
        <SafeAreaView className="flex-1 bg-white-700 justify-center">
            <StatusBar style="light" />
            <View className='w-screen h-screen relative flex flex-column'>
                <TouchableOpacity
                    className=" w-20 ml-4 top-10 rounded-md h-10"
                    onPress={() =>
                        navigation.navigate('HomeScreen')
                    }>
                    <Icon name="arrow-back" size={30} color="#000" />
                </TouchableOpacity>
                <Text className="relative text-3xl tracking-widest text-center
                     w-100 top-36 font-bold  text-zinc-700">Create account
                </Text>
                <View className='relative top-80'>
                    <View>
                        <View >
                            <TextInput
                                className="w-80 h-14 ml-11 pl-5 border border-zinc-400 rounded rounded-{50} "
                                placeholder="E-mail"
                                placeholderTextColor="#71717a"
                                onChangeText={(text) => setEmail(text)}
                                value={email}
                            />
                        </View>
                        <View >
                            <TextInput
                                className="w-80 h-14 ml-11 pl-5 mt-5 border border-zinc-400 rounded rounded-{50} "
                                placeholder="Name"
                                placeholderTextColor="#71717a"
                                onChangeText={(text) => setUsername(text)}
                                value={username}
                            />
                        </View>
                        <View >
                            <TextInput
                                secureTextEntry
                                className="w-80 h-14 pl-5 ml-11 mt-5 border border-zinc-400 rounded rounded-{40} "
                                placeholder="Password"
                                placeholderTextColor="#71717a"
                                onChangeText={(text) => setPassword(text)}
                                value={password}
                            />
                        </View>
                        <Pressable
                            className="bg-zinc-600 w-44 ml-1 mt-12 left-28 rounded-full rounded-{50} h-12"
                            onPress={handleLogin}>
                            <Text className="text-xl text-center text-white top-2 ">SIGN UP</Text>
                        </Pressable>
                        <View>
                            <Text className="text-sm tracking-widest text-center
                     w-100 top-7  font-bold  text-zinc-400">
                                Or sign up with
                            </Text>
                            <Pressable
                                style="box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
                                className="flex flex-row bg-stone-100 w-64 -ml-8 mt-12 left-28 rounded
                        rounded-{40} h-11 shadow shadow-color-black-900"
                                onPress={handleLogin}>
                                <Text className="text-xl text-center text-gray-500 left-14 top-2 ">Sign in with Google</Text>
                            </Pressable>
                        </View>
                </View>

                </View>
            </View>

        </SafeAreaView>

    );
}

export default RegisterScreen;