import {Text, View, SafeAreaView, Pressable, Image} from 'react-native';
import React, {useLayoutEffect} from "react";
import {StatusBar} from "expo-status-bar";
import {useNavigation} from "@react-navigation/native";
import {flex} from "nativewind/dist/postcss/to-react-native/properties/flex";

const HomeScreen = ({navigation}) =>{
    const nav= useNavigation();

    useLayoutEffect(() => {
        nav.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView className=" bg-white-700 ">
            <StatusBar style="light" />
            <View style={{display: "flex", flexDirection: "column"}}
                className='w-screen h-screen relative flex flex-column'>
                <Text className="relative text-5xl tracking-widest text-center
                     w-100 top-48 font-bold  text-zinc-700">
                    InnovateTeam
                </Text>
                <Text className="relative text-lg tracking-widest text-center p-2
                     w-100 top-52 font-bold  text-zinc-600">
                    Unlock a world of knowledge with your team – learn anything, anywhere, anytime.
                </Text>
                <View className=" w-100 h-15 flex flex-row mt-48 top-96 -left-24">
                    <Pressable
                        className="bg-white-400 border border-zinc-400 rounded-full rounded-{50}
                        w-44 ml-2 left-28 h-12"
                        onPress={() =>
                            navigation.navigate('RegisterScreen')
                        }>
                        <Text className="text-xl text-center text-zinc-500 top-2 ">SIGN IN</Text>
                    </Pressable>
                    <Pressable
                        onPress={() =>
                            navigation.navigate('LoginScreen')
                        }
                        className="bg-zinc-600 w-44 ml-5 left-28 rounded-full rounded-{50} h-12">
                        <Text className="text-xl text-center text-white top-2 ">LOG IN</Text>
                    </Pressable>
                </View>

            </View>
            {/*
            <View className=" w-100 h-40 fixed inset-x-0 bottom-0">
                <Image
                    className="w-100 h-full object-cover object-center"
                    source={require("../assets/welcome-group-asset.jpg")}
                />
            </View>
            */}

        </SafeAreaView>

    );
}

export default HomeScreen;