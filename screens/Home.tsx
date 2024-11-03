import { FontAwesome } from "@expo/vector-icons";
import navigation from "navigation";
import { View, Text, TouchableOpacity } from "react-native";
import { Props } from "./login";

export default function Home({ navigation }: Props): React.ReactNode {
    return (
        <View className="flex-1 bg-white ">

            {/* Cabeçalho */}
            <View className="bg-[#5C8354] pt-9 pb-3 px-6 rounded-t-lg">
                <Text className="text-white text-4xl font-bold">Insulog</Text>
            </View>

            {/* Conteúdo principal */}
            <View className="px-6 py-6 flex">

                {/* Seção de título e descrição */}
                <View className="flex-row justify-between">
                    <Text className="text-3xl font-bold">Dashboard</Text>
                    <View className="flex-row items-center mt-1">
                        <Text className="text-gray-700 font-semibold text-md mr-1">Relevante</Text>
                        <FontAwesome name="info-circle" size={14} color="gray" />
                    </View>
                </View>
                <Text className="text-gray-600 mt-2">
                    Bem-vindo ao app mobile <Text className="font-bold text-[#91C788]">Insulog</Text>. Ao manter um registro regular de suas leituras de glicose, você poderá acompanhar as tendências ao longo do tempo e identificar padrões importantes.
                </Text>

                {/* Seção de registros recentes */}
                <Text className="text-lg font-bold mt-6">Registros recentes</Text>

                <View className="mt-4 space-y-3">
                    {/* Registro 1 */}
                    <View className="flex-row justify-between items-center bg-gray-100 px-4 py-2 rounded-md shadow-sm">
                        <Text className="text-lg font-semibold">21:30</Text>
                        <View className="flex-row items-center">
                            <FontAwesome name="circle" size={8} color="green" style={{ marginRight: 5 }} />
                            <Text className="text-gray-700">95 mg/dL</Text>
                        </View>
                        <Text className="text-gray-500">20/03</Text>
                    </View>

                    {/* Registro 2 */}
                    <View className="flex-row justify-between items-center bg-gray-100 px-4 py-2 rounded-md shadow-sm">
                        <Text className="text-lg font-semibold">18:00</Text>
                        <View className="flex-row items-center">
                            <FontAwesome name="circle" size={8} color="red" style={{ marginRight: 5 }} />
                            <Text className="text-gray-700">58 mg/dL</Text>
                        </View>
                        <Text className="text-gray-500">20/03</Text>
                    </View>
                </View>

                {/* Ver mais */}
                <Text className="text-center text-gray-500 mt-4">ver mais</Text>
            </View>

            {/* Botão Novo Registro */}
            <TouchableOpacity className="
                absolute bottom-6 right-4  bg-[#5C8354] py-3
                rounded-lg flex-row justify-center items-center w-[150px] h-[60]
            " onPress={() => {
                    navigation.navigate('TelaRegistro')
                }}>
                <FontAwesome name="plus" size={16} color="white" />
                <Text className="text-white text-xl font-semibold ml-2">Novo Registro</Text>
            </TouchableOpacity>
        </View>
    )
}