import ListaIcones from "components/icones";
import { ScreenContent } from "components/ScreenContent";
import React from "react";
import { View, Text, Pressable } from "react-native";

export default function TelaLogin() {
    return (
        <ScreenContent path="screens/one.tsx" title="Tela login" children={teste()} />
    );
}

function teste(): React.ReactNode {
    return (
        <View className="bg-white h-full flex flex-col justify-between">
            <View className="flex-1 flex justify-center items-center">
                <Text className=" border-b font-bold text-[#91C788] text-[42px]">
                    INSULOG
                </Text>
                <Text className=" ">
                    GERENCIADOR DE GLICOSE
                </Text>
            </View>
            <View className="flex-1 flex justify-center items-center">
                <Text className="  font-bold text-[#91C788] text-[42px]">
                    BEM-VINDO!
                </Text>
                <Text className="font-semibold ">
                    Contamos com a sua participação
                </Text>
                <Text className="font-semibold ">
                    em nosso aplicativo.
                </Text>
            </View>
            

            {/* Botões de opções de login / cadastro */}
            <View className="mb-4">
                <View className="border h-[30px] mx-8 my-1">
                    <Pressable className=" w-full h-full" onPress={() => {
                        console.log('botão 1')
                    }}>
                        <ListaIcones nome="star"/>
                    </Pressable>
                </View>
                <View className="border h-[30px] mx-8 my-1">
                    <Pressable className=" w-full h-full" onPress={() => {
                        console.log('botão 2')
                    }}>

                    </Pressable>
                </View>
                <View className="border h-[30px] mx-8 my-1">
                    <Pressable className=" w-full h-full" onPress={() => {
                        console.log('botão 3')
                    }}>

                    </Pressable>
                </View>
                <View className="border h-[30px] mx-8 my-1">
                    <Pressable className=" w-full h-full" onPress={() => {
                        console.log('botão 4')
                    }}>

                    </Pressable>
                </View>
            </View>
        </View>
    );
}
