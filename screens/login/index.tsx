import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { ScreenContent } from "components/ScreenContent";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationProp } from '@react-navigation/native';

export type Props = {
  navigation: NavigationProp<any>; // Substitua `any` pelo tipo correto da navegação, se você estiver usando um tipo específico
};

export default function TelaLogin({ navigation }: Props): React.ReactNode {
    return (
        <View className="bg-white h-full flex flex-col justify-between">
            <View className="flex-1 flex justify-center items-center">
                <Text className="border-b font-bold text-[#91C788] text-[42px]">
                    INSULOG
                </Text>
                <Text>
                    GERENCIADOR DE GLICOSE
                </Text>
            </View>
            <View className="flex-1 flex justify-center items-center">
                <Text className="font-bold text-[#91C788] text-[42px]">
                    BEM-VINDO!
                </Text>
                <Text className="font-semibold">
                    Contamos com a sua participação
                </Text>
                <Text className="font-semibold">
                    em nosso aplicativo.
                </Text>
            </View>

            {/* Botões de opções de login / cadastro */}
            <View className="mb-4">
                
                {/* Botão Google */}
                <View className="border-2 border-gray-200 py-1 h-[40px] mx-8 my-1 flex-row items-center justify-center">
                    <TouchableOpacity 
                        className="w-full h-full flex-row items-center justify-center"
                        onPress={() => navigation.navigate('Rotas')}
                    >
                        <AntDesign name="google" size={24} color="black" />
                        <Text className="ml-2 text-black font-semibold">Entrar com Google</Text>
                    </TouchableOpacity>
                </View>

                {/* Botão Facebook */}
                <View className="border-2 border-[#1977F3] py-1 h-[40px] mx-8 my-1 flex-row items-center justify-center">
                    <TouchableOpacity 
                        className="w-full h-full flex-row items-center justify-center"
                        onPress={() => console.log('botão 2')}
                    >
                        <FontAwesome5 name="facebook" size={24} color="#1977F3" />
                        <Text className="ml-2 text-[#1977F3] font-semibold">Entrar com Facebook</Text>
                    </TouchableOpacity>
                </View>

                {/* Botão Fazer login */}
                <View className="border-2 border-[#7CAC73] py-1 h-[40px] mx-8 my-1">
                    <TouchableOpacity 
                        className="w-full h-full items-center justify-center"
                        onPress={() => console.log('botão 3')}
                    >
                        <Text className="text-[#7CAC73] font-semibold">Fazer login</Text>
                    </TouchableOpacity>
                </View>

                {/* Botão Cadastrar conta */}
                <View className="border-2 border-[#7CAC73] bg-[#7CAC73] h-[40px] mx-8 my-1 items-center justify-center">
                    <TouchableOpacity 
                        className="w-full h-full items-center justify-center"
                        onPress={() => console.log('botão 4')}
                    >
                        <Text className="text-center font-semibold text-white">Cadastrar conta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
