import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { NavigationProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export type Props = {
    navigation: NavigationProp<any>;
};

export default function TelaLogin({ navigation }: Props): React.ReactNode {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View className="flex-1 bg-white">
            {/* Cabeçalho */}
            <View className="bg-[#5C8354] pt-9 pb-3 px-6 rounded-t-lg flex-row items-center">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text className="text-white text-4xl font-bold ml-4">Insulog</Text>
            </View>

            <View className="flex-1 px-6 pt-8">
                <Text className="text-3xl font-bold mb-8">Bem-vindo</Text>

                {/* Usuário */}
                <TextInput
                    placeholder="Usuário"
                    className="border-b border-black mb-6 text-base py-2"
                    placeholderTextColor="#222"
                />

                {/* Senha */}
                <View className="flex-row items-center border-b border-black mb-2">
                    <TextInput
                        placeholder="Senha"
                        className="flex-1 text-base py-2"
                        placeholderTextColor="#222"
                        secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Ionicons name={showPassword ? "eye-off" : "eye"} size={22} color="#222" />
                    </TouchableOpacity>
                </View>

                {/* Esqueci minha senha */}
                <TouchableOpacity className="mb-6" onPress={() => { /* ação de esqueci minha senha */ }}>
                    <Text className="text-right text-[#7CAC73] text-sm">Esqueci minha senha</Text>
                </TouchableOpacity>

                {/* Botão Acessar */}
                <TouchableOpacity 
                className="bg-[#7CAC73] py-3 rounded mb-6 items-center" 
                onPress={() => { navigation.navigate('Rotas') }}>
                    <Text className="text-white font-semibold text-base">Acessar</Text>
                </TouchableOpacity>

                {/* Cadastro */}
                <View className="flex-row justify-center">
                    <Text className="text-base">Não tem uma conta? </Text>
                    <TouchableOpacity onPress={() => {navigation.navigate('TelaCadastro') }}>
                        <Text className="text-[#7CAC73] font-semibold text-base">Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
