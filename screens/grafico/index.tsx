import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { NavigationProp } from '@react-navigation/native';

export type Props = {
  navigation: NavigationProp<any>;
};

export default function TelaGrafico({ navigation }: Props): React.ReactNode {
    return (
        <View className="flex-1 bg-white">
            {/* Cabeçalho */}
            <View className="bg-[#5C8354] pt-9 pb-3 px-6 rounded-t-lg flex-row items-center">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text className="text-white text-3xl font-bold ml-4">Gráfico</Text>
            </View>

            <ScrollView className="flex-1 px-6 pt-6">
                <View className="flex-row items-center justify-between mb-2">
                    <Text className="text-2xl font-bold">Resultados</Text>
                    <View className="bg-[#5C8354] px-4 py-1 rounded-full">
                        <Text className="text-white font-bold text-base">2024</Text>
                    </View>
                </View>
                <Text className="text-base text-black mb-2">Média de nível glicemico</Text>

                {/* Imagem do gráfico */}
                <View className="items-center mb-6">
                    <Image
                        source={require('../../assets/Grafico.png')}
                        style={{ width: 320, height: 180, resizeMode: 'contain' }}
                    />
                </View>

                <Text className="text-xl font-bold mb-2">Exportar relatório</Text>
                <TouchableOpacity className="border border-gray-400 rounded-lg px-4 py-3 mb-2 flex-row items-center">
                    <Ionicons name="cloud-download-outline" size={22} color="#5C8354" />
                    <Text className="ml-3 text-base font-semibold">Exportar em PDF</Text>
                </TouchableOpacity>
                <TouchableOpacity className="border border-gray-400 rounded-lg px-4 py-3 mb-10 flex-row items-center">
                    <FontAwesome name="file-excel-o" size={22} color="#5C8354" />
                    <Text className="ml-3 text-base font-semibold">Exportar em Excel</Text>
                </TouchableOpacity>
            </ScrollView>

            {/* Botão flutuante */}
            <TouchableOpacity
                className="absolute bottom-8 right-6 bg-[#5C8354] w-14 h-14 rounded-lg items-center justify-center"
                onPress={() => { navigation.navigate('TelaRegistro') }}
            >
                <Ionicons name="add" size={32} color="white" />
            </TouchableOpacity>
        </View>
    );
}
