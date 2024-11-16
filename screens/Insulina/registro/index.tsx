import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput, Platform, Alert } from "react-native";
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { editRegistroGlicose, deleteRegistroGlicose, createRegistroGlicose, getUsuarios, getPeriodo } from '../../services/api';
import { RouteProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'; // Import para acessar navegação
import Toast from 'react-native-toast-message';

// Definindo os tipos de navegação esperados
type RootStackParamList = {
    TelaRegistro: {
        modoTela?: string

        PidRegistro?: number
        PidUsuario?: string
        PnivelGlicose?: string
        PdataHora?: Date
        PidPeriodo?: number
        PtipoInsulina?: string
        Punidade_insulina?: string
    };
};

type TelaRegistroRouteProp = RouteProp<RootStackParamList, 'TelaRegistro'>;

interface TelaRegistroProps {
    route: TelaRegistroRouteProp;
}

export default function TelaRegistro({ route }: TelaRegistroProps) {
    const navigation = useNavigation(); // Adiciona o hook de navegação

    const {
        PidRegistro,
        PdataHora,
        PidPeriodo,
        PidUsuario,
        PnivelGlicose,
        PtipoInsulina,
        Punidade_insulina,
        modoTela
    } = route.params || {}; // Certifique-se de que os parâmetros existem

    const [nivelGlicose, setNivelGlicose] = useState('');
    const [dataHora, setDataHora] = useState(new Date());
    const [idUsuario, setIdUsuario] = useState('');
    const [usuarios, setUsuarios] = useState<{ id_usuario: number, nome: string }[]>([]);
    const [idPeriodo, setIdPeriodo] = useState<number>(0);
    const [periodos, setPeriodos] = useState<{ id_periodo: number, descricao: string }[]>([]);
    const [tipo_insulina, setTipo_insulina] = useState<boolean>(false);
    const [unidade_insulina, setunidade_insulina] = useState<string>('');
    const [showDatePicker, setShowDatePicker] = useState(false);

    useEffect(() => {
        if (modoTela === 'Manipular') {
            setDataHora(PdataHora ? new Date(PdataHora) : new Date());
            setIdPeriodo(PidPeriodo || 0)
            setNivelGlicose(PnivelGlicose || '')
            setTipo_insulina(PtipoInsulina == '1')
            setIdUsuario(PidUsuario || '')
            setunidade_insulina(Punidade_insulina ? String(Punidade_insulina) : '');
        } else {
            setDataHora(new Date());
            setIdPeriodo(0)
            setNivelGlicose('')
            setTipo_insulina(false)
            setIdUsuario('')
            setunidade_insulina('')

        }

        console.log(PdataHora,
            PidPeriodo,
            PidUsuario,
            PnivelGlicose,
            PtipoInsulina,
            Punidade_insulina,
            modoTela)
    }, [route])

    // Função para buscar usuários
    useEffect(() => {
        console.log('aaaaaaaaaa',unidade_insulina)
    }, [unidade_insulina]);

    // Função para buscar períodos
    useEffect(() => {
        const fetchPeriodos = async () => {
            try {
                const response = await getPeriodo(); // Busca os períodos da API
                setPeriodos(response); // Atualiza o estado com os períodos recebidos
            } catch (error) {
                Toast.show({
                    type: 'error',
                    text1: 'Erro ao buscar períodos!',
                    visibilityTime: 3000, // Duração do toast (3 segundos)
                });
            }
        };
        fetchPeriodos();
    }, []);

    const criarRegistro = async () => {
        const novoRegistro = {
            id_usuario: parseInt(idUsuario, 10) || 1,
            nivel_glicose: parseFloat(nivelGlicose) || 95.5,
            data_hora: formatDataHora(dataHora),
            id_periodo: idPeriodo || 1,
            tipo_insulina: (tipo_insulina ? 1 : 2),
            unidade_insulina: parseInt(unidade_insulina) || 0,

        };
        console.log(novoRegistro)
        try {
            const resposta = await createRegistroGlicose(novoRegistro);
            Toast.show({
                type: 'success',
                text1: 'Registro criado!',
                visibilityTime: 3000, // Duração do toast (3 segundos)
            });
            navigation.goBack(); // Volta para a tela anterior após a exclusão
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Erro ao criar registro!',
                visibilityTime: 3000, // Duração do toast (3 segundos)
            });
        }
    };

    const delataRegistro = async (id_registro: number) => {
        try {
            const resposta = await deleteRegistroGlicose(id_registro);
            Toast.show({
                type: 'success',
                text1: 'Registro deletado com sucesso!',
                visibilityTime: 3000, // Duração do toast (3 segundos)
            });
            navigation.goBack(); // Volta para a tela anterior após a exclusão
        } catch (error: any) {
            Toast.show({
                type: 'error',
                text1: 'Erro ao deletar registro',
                text2: error.message || 'Ocorreu um erro inesperado',
                visibilityTime: 3000,
            });
        }
    }

    const editarRegistro = async () => {
        const registroEditado = {
            id_usuario: parseInt(idUsuario, 10) || 1,
            nivel_glicose: parseFloat(nivelGlicose) || 95.5,
            data_hora: formatDataHora(dataHora),
            id_periodo: idPeriodo || 1,
            tipo_insulina: (tipo_insulina ? 1 : 2),
            unidade_insulina: parseInt(unidade_insulina) || 0,

        };

        console.log('aquiiiii', registroEditado)
        try {
            const resposta = await editRegistroGlicose(PidRegistro,registroEditado);
            Toast.show({
                type: 'success',
                text1: 'Registro Editado!',
                visibilityTime: 3000, // Duração do toast (3 segundos)
            });
            navigation.goBack(); // Volta para a tela anterior após a exclusão
        } catch (error: any) {
            Toast.show({
                type: 'error',
                text1: 'Erro ao Editar registro',
                text2: error.message || 'Ocorreu um erro inesperado',
                visibilityTime: 3000,
            });
        }
    }

    const onChangeDate = (event: any, selectedDate?: Date) => {
        // Ajuste para capturar eventos corretamente, especialmente no Android
        if (event?.type === 'dismissed' || event?.nativeEvent?.type === 'dismissed') {
            setShowDatePicker(false);
            return;
        }

        setShowDatePicker(false);
        if (selectedDate) {
            setDataHora(selectedDate);
        }
    };

    const formatDataHora = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Ajusta para mês com 2 dígitos
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    };



    return (
        <View className="flex-1  relative">
            {/* Cabeçalho */}
            <View className="bg-[#5C8354] pt-9 pb-3 px-6 rounded-t-lg">
                <Text className="text-white text-4xl font-bold">Registro</Text>
            </View>
            <ScrollView className="mt-4 px-4 mb-[100px]">
                {/* Campo para Nível de Glicose */}
                <View className='items-stretch justify-between'>

                    <View className='flex-1'>

                        <View className="mb-3 pb-3 flex-row border-b  border-gray-300">
                            <View className="flex-row flex-1 items-center">
                                <MaterialCommunityIcons name="blood-bag" size={20} color="black" />
                                <Text className="ml-4 text-lg font-semibold">Nível de glicose</Text>
                            </View>

                            <TextInput
                                className="border flex-1 border-gray-300 py-1 px-2 rounded-lg"
                                placeholder="Digite aqui:"
                                keyboardType="numeric"
                                value={nivelGlicose}
                                onChangeText={setNivelGlicose}
                            />
                        </View>

                        {/* Campo para Data e Hora */}
                        <View className="mb-3 pb-3  border-b  border-gray-300 justify-between flex-row">
                            <View className='flex-1 flex-row'>
                                <View className=' flex justify-center'>
                                    <FontAwesome name="calendar" size={20} color="black" />
                                </View>
                                <View className='flex-1  ml-4'>
                                    <View className=" ">
                                        <Text className="text-lg font-semibold">Data do registro</Text>
                                    </View>
                                    <Text className=' '>{dataHora.toLocaleString()}</Text>
                                </View>

                            </View>
                            <TouchableOpacity onPress={() => setShowDatePicker(true)} className="bg-[#5C8354] px-3 py-1 rounded-full  flex-row w-[120px] justify-center items-center">
                                <Text className="text-white text-lg font-semibold">Data</Text>
                            </TouchableOpacity>

                            {showDatePicker && (
                                <>

                                    <DateTimePicker
                                        value={dataHora}
                                        mode="date" // Ou "time"
                                        display="default"
                                        onChange={onChangeDate}
                                    />
                                </>

                            )}
                        </View>

                        <View className='mb-3 pb-3  border-b  border-gray-300'>
                            <View className='flex-row items-center'>
                                <MaterialCommunityIcons name="needle" size={20} color="black" />
                                <Text className="ml-4 text-lg font-semibold">Tipo insulina</Text>
                            </View>

                            <View className='flex-row'>
                                <TouchableOpacity onPress={() => { setTipo_insulina(true) }}
                                    className={`p-4 border w-[80px] border-gray-400 rounded-l-full border-r-0
                                        ${tipo_insulina ? 'bg-[#5C8354] ' : 'bg-[#f5f5f5] '} `}>
                                    <Text
                                        className={`text-lg text-center font-semibold ${tipo_insulina ? 'text-white ' : 'text-black '}`}
                                    >
                                        Rápida
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { setTipo_insulina(false) }}
                                    className={`p-4 mr-4 border w-[80px] border-gray-400 rounded-r-full border-l-0
                                        ${!tipo_insulina ? 'bg-[#5C8354] ' : 'bg-[#f5f5f5] '}`}>
                                    <Text
                                        className={`text-lg text-center font-semibold ${!tipo_insulina ? 'text-white ' : 'text-black '}`}
                                    >
                                        Lenta
                                    </Text>
                                </TouchableOpacity>
                                <View className='flex-1 h-full '>
                                    <TextInput
                                        className="border h-[55px]   border-gray-400   py-1 px-2 rounded-lg"
                                        placeholder='Digite aqui:'
                                        keyboardType="numeric"
                                        value={unidade_insulina}
                                        onChangeText={setunidade_insulina}
                                    />
                                </View>
                            </View>
                        </View>
                        {/* Campo para ID do Período */}
                        <View className='mb-3 pb-3 '>
                            <Text className="text-lg font-semibold ">Períodos</Text>

                            <View className='flex-row justify-around'>
                                {
                                    periodos.map((periodo, index) => (
                                        <View key={index} className="flex-col ">
                                            <View className='flex w-fit items-center mb-3 pb-3 '>
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        if (periodo.id_periodo === idPeriodo) {
                                                            setIdPeriodo(0)
                                                        } else {
                                                            setIdPeriodo(periodo.id_periodo)
                                                        }
                                                    }}
                                                    className={` p-4 rounded-full ${periodo.id_periodo === idPeriodo ? 'bg-[#5C8354]' : 'bg-gray-300'}`}>
                                                    <MaterialCommunityIcons name="food" size={24} color={`${periodo.id_periodo === idPeriodo ? 'white' : 'gray'}`} />
                                                </TouchableOpacity>
                                                <Text className="mt-2 text-gray-600">{periodo.descricao}</Text>
                                            </View>

                                        </View>
                                    ))

                                }
                            </View>
                        </View>
                    </View>
                </View>
                {
                    modoTela === 'Manipular' ?
                        <View className='flex-row justify-around'>
                            <TouchableOpacity
                                className="bg-slate-400 py-4 px-5 rounded-lg items-center"
                                onPress={() => {
                                    delataRegistro(PidRegistro || 0)
                                }}
                            >
                                <View className="flex-row items-center">
                                    <FontAwesome name="trash" size={25} color="white" />
                                    <Text className="text-white w-fit text-lg font-semibold ml-2">Excluir</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                className="bg-blue-500 py-4 px-5 rounded-lg items-center"
                                onPress={editarRegistro}
                            >
                                <View className="flex-row items-center">
                                    <FontAwesome name="save" size={25} color="white" />
                                    <Text className="text-white text-lg font-semibold ml-2">Editar Registro</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        :
                        <TouchableOpacity
                            className="bg-[#5C8354] py-4 px-5 rounded-lg items-center"
                            onPress={criarRegistro}
                        >
                            <View className="flex-row items-center">
                                <FontAwesome name="plus" size={16} color="white" />
                                <Text className="text-white text-lg font-semibold ml-2">Salvar Registro</Text>
                            </View>
                        </TouchableOpacity>
                }
            </ScrollView>
        </View >
    );
}
