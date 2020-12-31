import React from 'react'
import { AsyncStorage, StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native'

import useForm from '../hooks/useForm'

import { PrimaryColor, BackGroundLight } from '../theme/colors'

export default ({ navigation }) => {
  const initialState = {
    email: '',
    password: ''
  }
  const onSubmit = values => {
    fetch(
      'https://pingestudio.com.mx:8345/api/v1/login/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json'
        },
        body: JSON.stringify(values)
      }
    )
      .then(x => x.json())
      .then(x => {
        if (!x.status) {
          return Alert.alert('Error', 'Usuario y/o Contraseña incorrectos.')
        }

        AsyncStorage.setItem('token', x.token)
        navigation.navigate('Dashboard')
      })
      .catch(e => console.log(e))
  }
  const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit)
  return(
    <View style={ styles.container }>
      <Text style={ styles.title }>Iniciar Sesión</Text>
      <TextInput
        autoCapitalize='none'
        value={ inputs.email }
        onChangeText={ subscribe('email') }
        style={ styles.input }
        placeholder='Email'
        placeholderTextColor={ BackGroundLight }
      />
      <TextInput
        autoCapitalize='none'
        value={ inputs.password }
        onChangeText={ subscribe('password') }
        style={ styles.input }
        placeholder='Password'
        placeholderTextColor={ BackGroundLight }
        secureTextEntry={ true }
      />
      <Button title='Login' onPress={ handleSubmit } />
      <Button title='Registrarse' onPress={ () => navigation.navigate('Register') } />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 26,
    color: BackGroundLight,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    backgroundColor: PrimaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15
  },
  input: {
    height: 40,
    borderColor: BackGroundLight,
    color: BackGroundLight,
    borderWidth: 1,
    marginTop: 10,
    alignSelf: 'stretch',
    paddingHorizontal: 5
  },
  boton: {
    backgroundColor: BackGroundLight,
    color: PrimaryColor
  }
})
