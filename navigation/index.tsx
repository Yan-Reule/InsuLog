import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Rotas from './tab-navigator'; // Certifique-se de que este é o Tab Navigator
import TelaLogin from 'screens/login';
import Toast from 'react-native-toast-message';

export type RootStackParamList = {
  Rotas: undefined; // Nome da tela como "Rotas"
  TelaLogin: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaLogin">
        <Stack.Screen
          name="TelaLogin"
          component={TelaLogin}
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
