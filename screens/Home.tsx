import { FontAwesome } from "@expo/vector-icons";
import navigation from "navigation";
import { View, Text, TouchableOpacity } from "react-native";
import { Props } from "./login";
import { getRegistroGlicose } from './services/api'
import { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

interface IRegistros {
    data_hora: string;
    id_periodo: number;
    id_registro: number;
    id_usuario: number;
    nivel_glicose: string;
    tipo_insulina: string | null;
    unidade_insulina: string | null;
}

export default function Home({ navigation }: Props): React.ReactNode {
    const [registros, setRegistros] = useState<IRegistros[]>([]);
    const [verMaisAberto, setVerMaisAberto] = useState<boolean>(false)

    // Função para buscar usuários
    useEffect(() => {
        console.log('buscando')
        const buscaRegistros = async () => {
            try {
                const response = await getRegistroGlicose(); // Busca os usuários da API
                setRegistros(response); // Atualiza o estado com os usuários recebidos
                console.log(response)
            } catch (error) {
                console.error('Erro ao buscar Registros:', error);
            };
        }
        buscaRegistros();
    }, []);

    const buscaRegistros = async () => {
        try {
            const response = await getRegistroGlicose(); // Busca os registros da API
            setRegistros(response); // Atualiza o estado com os registros recebidos
            console.log(response);
        } catch (error) {
            console.error('Erro ao buscar Registros:', error);
        }
    };

    // Chama a função buscaRegistros quando a tela ganhar foco
    useFocusEffect(
        useCallback(() => {
            buscaRegistros();
        }, [])
    );

    const formatDataHora = (dataHora: string) => {
        const dateObj = new Date(dataHora);

        // Obter dia e mês com dois dígitos
        const dia = dateObj.getDate().toString().padStart(2, '0');
        const mes = (dateObj.getMonth() + 1).toString().padStart(2, '0');

        // Obter horas e minutos com dois dígitos
        const horas = dateObj.getHours().toString().padStart(2, '0');
        const minutos = dateObj.getMinutes().toString().padStart(2, '0');

        // Formatar as strings
        const dataFormatada = `${dia}/${mes}`;
        const horaFormatada = `${horas}:${minutos}`;

        return { data: dataFormatada, hora: horaFormatada };
    };

    const limitaLista = () => {
        setRegistros(registros.slice(0, 3))
    }

    return (
        <View className="flex-1 bg-white ">

            {/* Cabeçalho */}
            <View className="bg-[#5C8354] pt-9 pb-3 px-6 rounded-t-lg">
                <Text className="text-white text-4xl font-bold">Insulog</Text>
            </View>

            {/* Conteúdo principal */}
            <View className="px-6 py-6 flex">

                {/* Seção de título e descrição */}
                <View className="flex-row justify-between">
                    <Text className="text-3xl font-bold">Dashboard</Text>
                    <View className="flex-row items-center mt-1">
                        <Text className="text-gray-700 font-semibold text-md mr-1">Relevante</Text>
                        <FontAwesome name="info-circle" size={14} color="gray" />
                    </View>
                </View>
                <Text className="text-gray-600 mt-2">
                    Bem-vindo ao app mobile <Text className="font-bold text-[#91C788]">Insulog</Text>. Ao manter um registro regular de suas leituras de glicose, você poderá acompanhar as tendências ao longo do tempo e identificar padrões importantes.
                </Text>

                {/* Seção de registros recentes */}
                <Text className="text-lg font-bold mt-6">Registros recentes</Text>
                <View className="mt-2 ">
                    {registros.length > 0 ?

                        registros.map((valor, index, lista) => {
                            const { data, hora } = formatDataHora(valor.data_hora);
                            return (
                                <View
                                    key={valor.id_registro || index}
                                >
                                    <TouchableOpacity
                                        className={`
                                        py-2 pr-4 pl-2 bg-gray-100 flex-row justify-between items-center
                                        ${index + 1 === lista.length ? 'rounded-b-lg' : ''} ${index === 0 ? 'rounded-t-lg' : ''}`}
                                        onPress={() => {
                                            console.log({
                                                modoTela: 'Manipular',

                                                PidRegistro: valor.id_registro,
                                                PidUsuario: valor.id_usuario,
                                                PnivelGlicose: valor.nivel_glicose,
                                                PdataHora: valor.data_hora,
                                                PidPeriodo: valor.id_periodo,
                                                PtipoInsulina: valor.tipo_insulina,
                                                Punidade_insulina: String(valor.unidade_insulina),
                                            })
                                            navigation.navigate('TelaRegistro', {
                                                modoTela: 'Manipular',

                                                PidRegistro: valor.id_registro,
                                                PidUsuario: valor.id_usuario,
                                                PnivelGlicose: valor.nivel_glicose,
                                                PdataHora: valor.data_hora,
                                                PidPeriodo: valor.id_periodo,
                                                PtipoInsulina: valor.tipo_insulina,
                                                Punidade_insulina: String(valor.unidade_insulina),
                                            })
                                        }}>
                                        <Text className="text-lg ml-1 text-black font-semibold">{hora}</Text>

                                        <View className="flex-row items-center pr-5">
                                            <View
                                                className={`w-2 h-2 rounded-full ${Number(valor.nivel_glicose) > 70 ? 'bg-green-600' : 'bg-red-500'
                                                    }`}
                                            />
                                            <Text className="ml-1 text-lg">{valor.nivel_glicose}</Text>
                                            <Text className="ml-1 text-lg">mg/dL</Text>
                                        </View>
                                        <Text className="text-md text-gray-500">{data}</Text>
                                    </TouchableOpacity>
                                </View>
                            );
                        })
                        :
                        <View className={`
                            py-2 pr-4 pl-2 bg-gray-100 flex-row justify-between items-center
                            `}
                        >
                            <Text>
                                Sem Registros..
                            </Text>
                        </View>
                    }
                </View>
                <TouchableOpacity
                    className=''
                    onPress={() => {
                        if (registros.length > 0) {
                            setVerMaisAberto(!verMaisAberto)

                            if (verMaisAberto) {
                                buscaRegistros();
                            } else {

                                limitaLista()
                            }
                        }
                    }}>

                    <Text className="text-center text-lg">ver mais</Text>
                </TouchableOpacity>
            </View>

            {/* Botão Novo Registro */}
            <TouchableOpacity className="
                absolute bottom-6 right-4  bg-[#5C8354] py-3
                rounded-lg flex-row justify-center items-center w-[150px] h-[60]
            " onPress={() => {
                    navigation.navigate('TelaRegistro')
                }}>
                <FontAwesome name="plus" size={16} color="white" />
                <Text className="text-white text-xl font-semibold ml-2">Novo Registro</Text>
            </TouchableOpacity>
        </View>
    )
}