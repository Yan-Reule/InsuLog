import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { ScreenContent } from "components/ScreenContent";
import React from "react";
import { View, Text, Pressable } from "react-native";

export default function TelaMedicao() {
    return (
        <ScreenContent path="screens/one.tsx" title="Tela login" children={teste()} />
    );
}

function teste(): React.ReactNode {
    return (
        <View className="bg-white h-full flex flex-col justify-between">
            <Text>
                alo
            </Text>
        </View>
    );
}