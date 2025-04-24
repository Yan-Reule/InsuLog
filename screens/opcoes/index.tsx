import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Certifique-se de ter o pacote instalado
import { LinearGradient } from 'expo-linear-gradient'; // Para criar o gradiente

const Opcoes = () => {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Opções</Text>
      </View>

      {/* Componente de Usuário */}
      <View style={styles.userSection}>
        <MaterialIcons name="person-outline" size={40} color="#000" style={styles.userIcon} />
        <View>
          <Text style={styles.userTitle}>Usuário</Text>
          <Text style={styles.userSubtitle}>Senha, segurança, dados pessoais</Text>
        </View>
      </View>

      {/* Sombra abaixo do componente de usuário */}
      <LinearGradient colors={['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0)']} style={styles.shadow} />

      {/* Lista de opções */}
      <View style={styles.optionsList}>
        {[
          { icon: 'apps', label: 'Idioma' },
          { icon: 'alarm', label: 'Alarmes' }, // Novo item adicionado
          { icon: 'tablet', label: 'Interface' },
          { icon: 'notifications-none', label: 'Notificações' },
          { icon: 'info-outline', label: 'Sobre' },
          { icon: 'logout', label: 'Sair' },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.optionItem}>
            <MaterialIcons name={item.icon} size={24} color="#000" style={styles.optionIcon} />
            <Text style={styles.optionLabel}>{item.label}</Text>
            <MaterialIcons name="chevron-right" size={24} color="#000" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#5C8354', // Fundo verde
    paddingVertical: 39, // Altura do cabeçalho
    paddingHorizontal: 25,
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 32, // Tamanho da fonte
    fontWeight: 'bold',
    textAlign: 'left',
    position: 'absolute', // Permite posicionar o texto de forma independente
    top: 25, // Ajuste este valor para mover o texto mais para baixo
    left: 20, // Mantém o alinhamento horizontal
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  shadow: {
    height: 10,
    backgroundColor: 'transparent',
  },
  userIcon: {
    marginRight: 15,
  },
  userTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  userSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  optionsList: {
    marginTop: 10,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  optionIcon: {
    marginRight: 15,
  },
  optionLabel: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
});

export default Opcoes;
