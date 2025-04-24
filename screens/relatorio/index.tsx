import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Certifique-se de instalar esta biblioteca

const Relatorios = () => {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Relatórios</Text>
      </View>

      {/* Atividade Hoje */}
      <View style={styles.activityContainer}>
        <View style={styles.activityHeader}>
          <Text style={styles.activityTitle}>Atividade hoje</Text>
          <FontAwesome name="calendar" size={16} color="#000" style={styles.icon} />
          <Text style={styles.monthText}>Março</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
          {['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB', 'DOM'].map((day, index) => (
            <View
              key={index}
              style={[
                styles.dateItem,
                index === 1 && styles.selectedDateTop, // Destaca o dia "TER"
              ]}>
              <View
                style={[
                  styles.dateTop,
                  index === 1 && styles.selectedDateTop, // Parte superior do selecionado
                ]}>
                <Text
                  style={[
                    styles.dateText,
                    index === 1 && styles.selectedDateText, // Texto superior do selecionado
                  ]}>
                  {day}
                </Text>
              </View>
              <View
                style={[
                  styles.dateBottom,
                  index === 1 && styles.selectedDateBottom, // Parte inferior do selecionado
                ]}>
                <Text
                  style={[
                    styles.dateNumber,
                    index === 1 && styles.selectedDateNumber, // Texto inferior do selecionado
                  ]}>
                  {20 + index}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Conteúdo */}
      <View style={styles.content}>
        <View style={styles.listContainer}>
          {[
            { label: 'Glicemia', value: '105 mg/dL', time: '8:30' },
            { label: 'Glicemia', value: '110 mg/dL', time: '11:30' },
            { label: 'Glicemia', value: '160 mg/dL', time: '15:00' },
            { label: 'Glicemia', value: '58 mg/dL', time: '18:00' },
            { label: 'Glicemia', value: '95 mg/dL', time: '21:30' },
          ].map((item, index) => (
            <View key={index} style={styles.listItem}>
              <FontAwesome name="file-text-o" size={20} color="#000" style={styles.listIcon} />
              <Text style={styles.listText}>
                {item.label} • {item.value}
              </Text>
              <Text style={styles.listTime}>{item.time}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Exportar Relatório */}
      <View style={styles.exportContainer}>
        <Text style={styles.exportTitle}>Exportar relatório</Text>
        <View style={styles.exportButton}>
          <FontAwesome name="cloud-download" size={20} color="#000" style={styles.exportIcon} />
          <Text style={styles.exportText}>Exportar em PDF</Text>
        </View>
        <View style={styles.exportButton}>
          <FontAwesome name="lock" size={20} color="#000" style={styles.exportIcon} />
          <Text style={styles.exportText}>Exportar em Excel</Text>
        </View>
      </View>

      {/* Botão Flutuante */}
      <View style={styles.floatingButton}>
        <FontAwesome name="plus" size={24} color="#fff" />
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
    paddingVertical: 39, // Aumente o valor para mover o texto mais para baixo
    paddingHorizontal: 25,
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
    position: 'absolute', // Permite posicionar o texto de forma independente
    top: 25, // Ajuste este valor para mover o texto mais para baixo
    left: 20, // Mantém o alinhamento horizontal
  },
  activityContainer: {
    marginTop: 24, // Adicione um espaçamento maior entre o cabeçalho e "Atividade hoje"
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
  },
  activityHeader: {
    flexDirection: 'row', // Alinha os itens horizontalmente
    alignItems: 'center', // Centraliza verticalmente
    marginBottom: 16, // Aumente o valor para mais espaçamento abaixo do cabeçalho
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 8,
  },
  icon: {
    marginHorizontal: 8, // Espaço entre o ícone e os textos
  },
  monthText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  carousel: {
    flexDirection: 'row',
  },
  dateItem: {
    width: 50,
    marginHorizontal: 13, // Aumente o valor para mais espaçamento horizontal
    borderRadius: 8,
    overflow: 'hidden', // Garante que as bordas fiquem arredondadas
  },
  dateTop: {
    backgroundColor: '#fff', // Parte superior branca
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  dateBottom: {
    backgroundColor: '#000', // Parte inferior preta
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  selectedDateTop: {
    backgroundColor: '#fff', // Parte superior branca para o selecionado
  },
  selectedDateBottom: {
    backgroundColor: '#5C8354', // Parte inferior verde para o selecionado
  },
  dateText: {
    color: '#000', // Texto preto na parte superior
    fontSize: 12,
    fontWeight: 'bold',
  },
  dateNumber: {
    color: '#fff', // Texto branco na parte inferior
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedDateText: {
    color: '#5C8354', // Texto verde para o selecionado na parte superior
    fontSize: 12,
    fontWeight: 'bold',
  },
  selectedDateNumber: {
    color: '#fff', // Texto branco na parte inferior do selecionado
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    padding: 0, // Certifique-se de que não há preenchimento extra
  },
  text: {
    fontSize: 16,
    color: '#000',
    marginBottom: 8,
  },
  listContainer: {
    marginTop: 24, // Adicione um espaçamento maior entre o contêiner de datas e a lista de glicemia
    paddingHorizontal: 16,
  },
  listItem: {
    flexDirection: 'row', // Alinha os itens horizontalmente
    alignItems: 'center', // Centraliza verticalmente
    justifyContent: 'space-between', // Espaço entre os itens
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  listIcon: {
    marginRight: 12, // Espaço entre o ícone e o texto
  },
  listText: {
    flex: 1, // Ocupa o espaço restante
    fontSize: 16,
    color: '#000',
  },
  listTime: {
    fontSize: 14,
    color: '#666',
  },
  exportContainer: {
    marginTop: 40, // Aumente o espaçamento entre a lista de glicemia e o contêiner de exportação
    paddingHorizontal: 16,
  },
  exportTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
  },
  exportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  exportIcon: {
    marginRight: 12,
  },
  exportText: {
    fontSize: 16,
    color: '#000',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 50, // Ajuste a distância da parte inferior (aumente o valor para subir o botão)
    right: 16, // Distância da lateral direita
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#5C8354',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Relatorios;
