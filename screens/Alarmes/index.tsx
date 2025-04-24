import React from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { NavigationProp } from '@react-navigation/native';

export type Props = {
    navigation: NavigationProp<any>;
};

const ALARMES = [
    { id: '1', nome: 'Alarme 1', hora: '8:00', ativo: false },
    { id: '2', nome: 'Alarme 2', hora: '10:00', ativo: false },
    { id: '3', nome: 'Alarme 3', hora: '13:00', ativo: false },
];

export default function TelaAlarmes({ navigation }: Props): React.ReactNode {
    const [alarmes, setAlarmes] = React.useState(ALARMES);

    const toggleAtivo = (id: string) => {
        setAlarmes(alarmes.map(a => a.id === id ? { ...a, ativo: !a.ativo } : a));
    };

    return (
        <View className="flex-1 bg-white">
            {/* Cabeçalho */}
            <View className="bg-[#5C8354] pt-9 pb-3 px-6 rounded-t-lg flex-row items-center">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text className="text-white text-3xl font-bold ml-4">Alarmes</Text>
            </View>

            <View className="flex-1 px-6 pt-8">
                <Text className="text-xl font-bold mb-4">Alarmes existentes</Text>

                {alarmes.map(item => (
                    <View
                        key={item.id}
                        className="flex-row items-center justify-between bg-white border border-gray-200 rounded-lg px-4 py-0 mb-3 shadow-sm">
                        <View className="flex-row items-center">
                            <Ionicons name="notifications-outline" size={22} color="#222" />
                            <Text className="ml-2 font-semibold">{item.nome}</Text>
                        </View>
                        <View className="flex-row items-center">
                            <Text className="mr-3 font-semibold">{item.hora}</Text>
                            <Switch
                                value={item.ativo}
                                onValueChange={() => toggleAtivo(item.id)}
                                trackColor={{ false: "#ccc", true: "#91C788" }}
                                thumbColor={item.ativo ? "#5C8354" : "#f4f3f4"}
                            />
                        </View>
                    </View>
                ))}

                <TouchableOpacity className="
                    absolute bottom-6 right-4  bg-[#5C8354] py-3
                    rounded-lg flex-row justify-center items-center w-[150px] h-[60]
                " onPress={() => {
                        navigation.navigate('TelaNovoAlarme')
                    }}>
                    <FontAwesome name="plus" size={16} color="white" />
                    <Text className="text-white text-xl font-semibold ml-2">Novo Alarme</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}