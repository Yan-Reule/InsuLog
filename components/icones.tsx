import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Use a biblioteca de ícones desejada

export default function ListaIcones({nome = ''}) {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Icon name={nome} />
        </View>
    );
}
