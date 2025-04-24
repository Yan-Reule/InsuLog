import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParamList } from '.';
import { HeaderButton } from '../components/HeaderButton';
import { TabBarIcon } from '../components/TabBarIcon';

import TelaRegistro from 'screens/Insulina/registro';
import Home from 'screens/Home';
import { FontAwesome } from '@expo/vector-icons';
import TelaGrafico from 'screens/grafico';
import Relatorios from 'screens/relatorio';
import Opcoes from 'screens/opcoes';

const Tab = createBottomTabNavigator();

type Props = StackScreenProps<RootStackParamList, 'Rotas'>;

export default function Rotas({ navigation }: Props) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#91C788', // Cor da aba ativa
        tabBarInactiveTintColor: '#A0A0A0', // Cor da aba inativa
      }}>
      <Tab.Screen
        name="Home"
        component={Home}

        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
          headerShown: false, // Oculta o título (header)
        }}
      />
      <Tab.Screen
        name="TelaGrafico"
        component={TelaGrafico}

        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="pie-chart" size={size} color={color} />
          ),
          headerShown: false, // Oculta o título (header)
        }}
      />
      <Tab.Screen
        name="TelaRegistro"
        component={TelaRegistro}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="file-text" size={size} color={color} />
          ),
          headerShown: false, // Oculta o título (header)
        }}
      />
      <Tab.Screen
        name="Relatorios"
        component={Relatorios}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bar-chart" size={size} color={color} />
          ),
          headerShown: false, // Oculta o título (header)
        }}
      />
      <Tab.Screen
        name="Opcoes"
        component={Opcoes}
        options={{
          tabBarIcon: ({ color, size }) => <FontAwesome name="cogs" size={size} color={color} />,
          headerShown: false, // Oculta o título (header)
        }}
      />
    </Tab.Navigator>
  );
}

// Note: The suggested code change "expo install expo-linear-gradient" is a command to install a package and does not directly modify the code in this file.
