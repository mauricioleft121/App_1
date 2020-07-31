import React, { useState } from 'react';
import {
  SafeAreaView, StyleSheet, ImageBackground, ScrollView,
  View, Text, StatusBar, TextInput, TouchableOpacity
} from 'react-native';



const App = ({ route,navigation }) => {
  const { user } = route.params
  return (
    <>
      <StatusBar />
      <ImageBackground
        style={styles.container}
        source={require('../assets/teste8.png')}>
        <Text style={styles.bar}>Bem vindo, {user}</Text>

        <View style={styles.exit}>
          <TouchableOpacity
            onPress={() => navigation.navigate('HomeScreen')}
            style={styles.botao}
          >
            <Text style={styles.texto}>SAIR</Text>
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
    backgroundColor: 'white',
  },

  bar: {
    marginLeft: 30,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },

  exit: {
    alignItems: 'flex-end'
  },

  botao: {
    backgroundColor: 'black',
    borderRadius: 3,
    alignItems: 'center',
    height: 25,
    width: 50,
    marginTop: 480
  },

  texto: {
    color: 'red',
    fontWeight: 'bold'
  }


});

export default App;