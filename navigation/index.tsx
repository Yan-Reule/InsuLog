import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Rotas from './tab-navigator'; // Certifique-se de que este é o Tab Navigator
import TelaIncial from 'screens/login';
import Toast from 'react-native-toast-message';
import TelaLogin from 'screens/login/entrar';
import TelaCadastro from 'screens/login/cadastrar';
import TelaRegistro from 'screens/Insulina/registro';
import TelaAlarmes from 'screens/Alarmes';
import TelaNovoAlarme from 'screens/Alarmes/novoAlarme';
import TelaGrafico from 'screens/grafico';

export type RootStackParamList = {
  Rotas: undefined; // Nome da tela como "Rotas"
  TelaIncial: undefined;
  TelaLogin: undefined;
  TelaCadastro: undefined;
  TelaRegistro: undefined;
  TelaAlarmes: undefined;
  TelaNovoAlarme: undefined;
  TelaGrafico: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaIncial">
        <Stack.Screen
          name="TelaIncial"
          component={TelaIncial}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaAlarmes"
          component={TelaAlarmes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaLogin"
          component={TelaLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaCadastro"
          component={TelaCadastro}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="TelaGrafico"
          component={TelaGrafico}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaNovoAlarme"
          component={TelaNovoAlarme}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaRegistro"
          component={TelaRegistro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Rotas"
          component={Rotas} // Certifique-se de que este é o Tab Navigator correto
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}
