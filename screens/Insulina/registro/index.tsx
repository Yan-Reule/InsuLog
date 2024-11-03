import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { ScreenContent } from "components/ScreenContent";
import React from "react";
import { View, Text, Pressable, ScrollView, TouchableOpacity } from "react-native";

export default function TelaRegistro() {
    return (
        <View className="flex-1 bg-white ">

            {/* Cabeçalho */}
            <View className="bg-[#5C8354] pt-9 pb-3 px-6 rounded-t-lg">
                <Text className="text-white text-4xl font-bold">Registro</Text>
            </View>

            <ScrollView className='px-5' contentContainerStyle={{ paddingVertical: 20 }}>
                {/* Seção de Data do Registro */}
                <View className="flex-row justify-between items-center py-3 border-b border-gray-200">
                    <View className="flex-row items-center">
                        <FontAwesome name="calendar" size={20} color="black" />
                        <Text className="ml-4 text-lg font-semibold">Data do registro</Text>
                    </View>
                    <TouchableOpacity className="bg-[#5C8354] px-3 py-1 rounded-full">
                        <Text className="text-white font-semibold">Agora</Text>
                    </TouchableOpacity>
                </View>

                {/* Seção de Nível de Glicose */}
                <View className="flex-row justify-between items-center py-3 border-b border-gray-200">
                    <View className="flex-row items-center">
                        <MaterialCommunityIcons name="blood-bag" size={20} color="black" />
                        <Text className="ml-4 text-lg font-semibold">Nível de glicose</Text>
                    </View>
                    <TouchableOpacity className="bg-[#5C8354] px-3 py-1 rounded-full">
                        <Text className="text-white font-semibold">mg/dL</Text>
                    </TouchableOpacity>
                </View>

                {/* Seção de Insulina Rápida */}
                <View className="flex-row justify-between items-center py-3 border-b border-gray-200">
                    <View className="flex-row items-center">
                        <MaterialCommunityIcons name="needle" size={20} color="black" />
                        <Text className="ml-4 text-lg font-semibold">Insulina rápida</Text>
                    </View>
                    <TouchableOpacity className="bg-gray-200 px-3 py-1 rounded-full">
                        <Text className="text-gray-600 font-semibold">-</Text>
                    </TouchableOpacity>
                </View>

                {/* Seção de Insulina Lenta */}
                <View className="flex-row justify-between items-center py-3 border-b border-gray-200">
                    <View className="flex-row items-center">
                        <MaterialCommunityIcons name="needle" size={20} color="black" />
                        <Text className="ml-4 text-lg font-semibold">Insulina lenta</Text>
                    </View>
                    <TouchableOpacity className="bg-gray-200 px-3 py-1 rounded-full">
                        <Text className="text-gray-600 font-semibold">-</Text>
                    </TouchableOpacity>
                </View>

                {/* Seção de Períodos */}
                <Text className="text-lg font-semibold mt-6 mb-4">Períodos</Text>
                <View className="flex-row flex-wrap justify-between">
                    {["Café", "Brunch", "Almoço", "Lanche", "Intervalo", "Janta"].map((periodo, index) => (
                        <View key={index} className="flex items-center mb-4">
                            <TouchableOpacity className="bg-gray-100 p-4 rounded-full">
                                <MaterialCommunityIcons name="food" size={24} color="gray" />
                            </TouchableOpacity>
                            <Text className="mt-2 text-gray-600">{periodo}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>

            {/* Botão Salvar Registro */}
            <TouchableOpacity className="
                absolute bottom-6 right-4  bg-[#5C8354] py-3 px-4
                rounded-lg flex-row justify-center items-center  h-[60]
            " onPress={() => {

                }}>
                <FontAwesome name="plus" size={16} color="white" />
                <Text className="text-white text-xl font-semibold ml-2">Salvar Registro</Text>
            </TouchableOpacity>
        </View>
    );
}