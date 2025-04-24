import React, { useState } from "react";
import { View, Text, TouchableOpacity, Switch, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { NavigationProp } from '@react-navigation/native';

export type Props = {
    navigation: NavigationProp<any>;
};

const diasSemana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

export default function TelaNovoAlarme({ navigation }: Props): React.ReactNode {
    const [hora, setHora] = useState("00");
    const [minuto, setMinuto] = useState("00");
    const [diasSelecionados, setDiasSelecionados] = useState<boolean[]>([false, false, false, false, false, false, false]);
    const [nome, setNome] = useState("");
    const [vibracao, setVibracao] = useState(false);
    const [repetir, setRepetir] = useState(false);

    const toggleDia = (idx: number) => {
        setDiasSelecionados(diasSelecionados.map((v, i) => i === idx ? !v : v));
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
                {/* Horário */}
                <View className="flex-row justify-center items-center mb-4">
                    <Text className="text-6xl font-bold text-[#5C8354]">{hora}</Text>
                    <Text className="text-6xl font-bold text-[#5C8354] mx-2">:</Text>
                    <Text className="text-6xl font-bold text-[#5C8354]">{minuto}</Text>
                </View>

                {/* Dias da semana */}
                <View className="flex-row justify-center mb-6">
                    {diasSemana.map((dia, idx) => (
                        <TouchableOpacity
                            key={dia + idx}
                            className={`mx-1 w-8 h-8 rounded-full border border-gray-300 items-center justify-center ${diasSelecionados[idx] ? 'bg-[#5C8354]' : 'bg-white'}`}
                            onPress={() => toggleDia(idx)}
                        >
                            <Text className={`font-bold ${diasSelecionados[idx] ? 'text-white' : 'text-[#5C8354]'}`}>{dia}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Nome do alarme */}
                <TextInput
                    placeholder="Nome do alarme"
                    className="border-b border-gray-300 mb-4 text-base py-2 font-semibold"
                    placeholderTextColor="#222"
                    value={nome}
                    onChangeText={setNome}
                />

                {/* Vibração */}
                <View className="flex-row items-center justify-between border-b border-gray-300 py-2">
                    <Text className="font-semibold">Vibração</Text>
                    <Switch
                        value={vibracao}
                        onValueChange={setVibracao}
                        trackColor={{ false: "#ccc", true: "#91C788" }}
                        thumbColor={vibracao ? "#5C8354" : "#f4f3f4"}
                    />
                </View>

                {/* Repetir alarme */}
                <View className="flex-row items-center justify-between border-b border-gray-300 py-2">
                    <Text className="font-semibold">Repetir alarme</Text>
                    <Switch
                        value={repetir}
                        onValueChange={setRepetir}
                        trackColor={{ false: "#ccc", true: "#91C788" }}
                        thumbColor={repetir ? "#5C8354" : "#f4f3f4"}
                    />
                </View>

                {/* Botões */}
                <View className="flex-row justify-between mt-8 px-2">
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text className="font-bold text-lg text-[#222]">FECHAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {/* ação de salvar */}}>
                        <Text className="font-bold text-lg text-[#5C8354]">SALVAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
