import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView, StyleSheet, ImageBackground, ScrollView,
  View, Text, StatusBar, TextInput, TouchableOpacity, Alert
} from 'react-native';

import api from './services/api';



const HomeScreen = ({ navigation }) => {
  const [user,setUser] = useState('');
  const [pass,setPass] = useState('');
  const [usuario,setUsuario] = useState('');
async function logar() {
 const resultado = await api.post('/users',{
    user: `${user}`
  })
  const res = resultado.data[0]
  setUsuario(res.usuario);
  if (res == null) {
    Alert.alert('Usuario Incorreto ou não existente')
    
  }

  else if (res.usuario == user) {
    if (res.senha == pass) {
      navigation.navigate('Logado',{
        user: `${res.usuario}`
      })
    }
    else{
      Alert.alert('Senha Incorreta,Tente Novamente!')
    }
    
  }
  
  
  
  
}

  return (
    <>
      <StatusBar />
      <ImageBackground
        style={styles.container}
        source={require('../assets/TelaLogin.png')}>


        <View style={styles.textinput}>
          <View>
            <TextInput
              style={styles.logintext}
              placeholder="Nome de usuário"
              placeholderTextColor="#cdc9ca"
              onChangeText={text => setUser(text)}
              value = {user}
            >
            </TextInput>
          </View>
          <View>
            <TextInput
              style={styles.logintext}
              placeholder="Senha"
              placeholderTextColor="#cdc9ca"
              secureTextEntry={true}
              onChangeText={text => setPass(text)}
              value = {pass}
            >
            </TextInput>
          </View>
          <View>
            <TouchableOpacity
              onPress={logar}
              style={styles.botao}
            >
              <Text style={styles.texto}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cadastrar}>
          <Text style={styles.cadastrese}>Ainda não é um corno?</Text>
          <TouchableOpacity
            onPress={()=>navigation.navigate('Cadastro')}
            style={styles.cadastre}> 
          
          <Text style={styles.textocad}> Cadastre-se.</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

    </>
  )
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 5,
    paddingTop: 20,
    backgroundColor: '#222222',
    justifyContent: 'center',
    alignItems: 'center'
  },

  view: {
    flex: 1,
  },

  botao: {
    marginTop: 5,
    backgroundColor: '#992000',
    borderRadius: 3,
    alignItems: 'center',
    width: 210,
    height: 40,
    justifyContent: 'center'
  },

  texto: {
    color: "white",
    fontWeight: 'bold',
    textAlign: "center",
  },

  logintext: {
    backgroundColor: "#454140",
    color: "white",
    width: 210,
    height: 40,
    borderRadius: 3,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom:4,
    textAlign: 'center'

  },
  textinput: {
    width: 200,
    height: 100,
    marginTop: 350,
  },

  cadastrese: {
    color: '#cdc9ca',
    marginTop: 25
  },

  cadastrar: {
    flexDirection: 'row',
    flex: 1,
    alignItems:'center',
    marginTop:16,
    marginLeft:12
  },
  cadastre: {
    marginTop: 25,
  },

  textocad:{
    color:'white',
    fontWeight: 'bold'
  }

});

export default HomeScreen;
