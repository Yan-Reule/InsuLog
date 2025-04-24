import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { NavigationProp } from '@react-navigation/native';

export type Props = {
    navigation: NavigationProp<any>;
};

export default function TelaCadastro({ navigation }: Props): React.ReactNode {
    const [showPassword, setShowPassword] = useState(false);
    const [checked, setChecked] = useState(false);

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
                <Text className="text-3xl font-bold mb-8">Cadastro</Text>

                {/* Nome */}
                <TextInput
                    placeholder="Nome"
                    className="border-b border-black mb-6 text-base py-2"
                    placeholderTextColor="#222"
                />

                {/* E-mail */}
                <TextInput
                    placeholder="E-mail"
                    className="border-b border-black mb-6 text-base py-2"
                    placeholderTextColor="#222"
                    keyboardType="email-address"
                    autoCapitalize="none"
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

                {/* Termos de uso */}
                <View className="flex-row items-center mb-6 mt-2">
                    <TouchableOpacity onPress={() => setChecked(!checked)} className="mr-2">
                        <View className={`w-5 h-5 border-2 border-black items-center justify-center ${checked ? 'bg-[#7CAC73]' : 'bg-white'}`}>
                            {checked && <Ionicons name="checkmark" size={16} color="white" />}
                        </View>
                    </TouchableOpacity>
                    <Text className="flex-1 text-xs">
                        Li e estou de acordo com o{' '}
                        <Text className="text-[#7CAC73]">Termo de Uso</Text> e{' '}
                        <Text className="text-[#7CAC73]">Política de Privacidade</Text>
                    </Text>
                </View>

                {/* Botão Cadastrar conta */}
                <TouchableOpacity
                    className="bg-[#7CAC73] py-3 rounded mb-6 items-center"
                    onPress={() => { navigation.navigate('TelaLogin') }}
                    disabled={!checked}
                    style={{ opacity: checked ? 1 : 0.5 }}
                >
                    <Text className="text-white font-semibold text-base">Cadastrar conta</Text>
                </TouchableOpacity>

                {/* Já tem conta? */}
                <View className="flex-row justify-center">
                    <Text className="text-base">Já tem uma conta? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('TelaLogin')}>
                        <Text className="text-[#7CAC73] font-semibold text-base">Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}