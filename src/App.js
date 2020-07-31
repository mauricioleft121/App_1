import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen.js';
import Cadastro from './Cadastro.js';
import Logado from './Logado.js';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false
          }} 
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            headerShown: true,
            headerTintColor: 'white',
            headerTransparent: true,
            title: false
          }}
        />
        <Stack.Screen
          name="Logado"
          component={Logado}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;