import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface IconProps {
  name: string;
  style?: object;
  type: 'AntDesign' | 'FontAwesome' | 'MaterialIcons'; // Adicione os pacotes que você quer suportar
}

const Icone = ({ name, style, type }: IconProps) => {
  const IconComponent = {
    AntDesign,
    FontAwesome,
    MaterialIcons,
  }[type];

  return IconComponent ? (
    <IconComponent name={name} style={style} />
  ) : (
    <AntDesign name="question" style={style} /> // Ícone padrão se o tipo não for encontrado
  );
};

export default Icone;
