import React, { useState,useRef } from 'react';
import {
  SafeAreaView, StyleSheet, ImageBackground, ScrollView,
  View, Text, StatusBar, TextInput, TouchableOpacity,Alert,Button
} from 'react-native';

import api from './services/api';
import { Formik } from 'formik';
import * as Yup from 'yup';


/*const App = () => {
const [email , setEmail] = useState('');
const [usuario , setUsuario] = useState('');
const [senha , setSenha] = useState('');

async function cadastrar() {
 api.post('/user', ({
    
      email: `${email}`,
      usuario: `${usuario}`,
      senha: `${senha}`
    
  }))
  .then( res => {Alert.alert('Cadastrado com Sucesso!')})
  .catch( err => {Alert.alert('Falha no cadastro,Tente novamente mais tarde!')});

  setEmail('')
  setUsuario('')
  setSenha('')
}*/

  function App(){
    const user = useRef(null);
    const password = useRef(null);

    const FormSchema = Yup.object().shape({
      user:Yup.string()
        .required('Campo Obrigatório'),
      password:Yup.string()
        .required('Campo Obrigatório')
        .min(8,'Digite pelo menos 8 caracteres'),
    })

  return (
    <>
      <StatusBar />
      <ImageBackground
        style={styles.container}
        source={require('../assets/TelaCadastrar.png')}>

      <Formik
        initialValues={{
          user:'',
          password:'',
        }}
        onSubmit={values=>{
          console.log(values)
          Alert.alert('batata');
        }
      }
        validationSchema={FormSchema}
        >
        

       {({values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          setFieldTouched,
        })=> (

          <View>
            <Text>Usuário</Text>
            <TextInput
              ref={user}
              value={values.user}
              onChangeText={handleChange('user')}
              onBlur={()=>setFieldTouched('user',true)}
            />
            {errors.user && touched.user && <Text>{errors.user}</Text>}
            <Text>Senha</Text>
            <TextInput
              ref={password}
              value={values.password}
              onChangeText={handleChange('password')}
            />
            {errors.password && <Text>{errors.password}</Text>}
            <TouchableOpacity 
              onPress={handleSubmit}
              >
                <Text>Cadastrar</Text>
            </TouchableOpacity>
          </View>

       )}
      </Formik>

      </ImageBackground>

    </>
  )
        };

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 5,
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: 'white',
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
    color: 'white',
    fontWeight: 'bold'
  },

  viewbotao: {
    marginLeft: 5,
    width: 100
  },
  viewbotao1: {
    marginRight: 5,
    width: 100,
  },

  viewbotao2: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },

  logintext: {
    backgroundColor: "#454140",
    color: "white",
    width: 210,
    height: 40,
    textAlign: "center",
    borderRadius: 3,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom:4
  },

  textinput: {
    justifyContent: 'space-between',
    width: 200,
    height: 100,
    marginTop: 90
  },

});

export default App;