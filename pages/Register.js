import React from 'react'
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native'

import useForm from '../hooks/useForm'

import { PrimaryColor, BackGroundLight } from '../theme/colors'

export default ({ navigation }) => {
  const initialState = {
    email: '',
    password: '',
    nombre: '',
    activo: true,
    img: '',
    google: false,
    salt: '?'
  }

  const onSubmit = values => {
    fetch(
      'https://pingestudio.com.mx:8345/api/v1/usuarios/',
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
        console.log(x)
        if (x.status) {
          return Alert.alert('Exito', 'Usuario creado con éxito', [
            {
              text: 'Ir al inicio',
              onPress: () => navigation.navigate('Login')
            }
          ])
        }

        Alert.alert('Error', x.payload)
      })
  }

  const { subscribe, handleSubmit, inputs } = useForm(initialState, onSubmit)

  return(
    <View style={ styles.container }>
      <Text style={ styles.title }>Registrarse</Text>
      <TextInput
        autoCapitalize='none'
        value={ inputs.email }
        onChangeText={ subscribe('email') }
        style={ styles.input }
        placeholder='Email'
      />
      <TextInput
        autoCapitalize='none'
        value={ inputs.password }
        onChangeText={ subscribe('password') }
        style={ styles.input }
        placeholder='Password'
        secureTextEntry={ true }
      />
      <TextInput
        value={ inputs.nombre }
        onChangeText={ subscribe('nombre') }
        style={ styles.input }
        placeholder='Nombre'
      />
      <Button title='Enviar' onPress={ handleSubmit } />
    </View>
  )
}

// Data de enviar para registrarse
/*
  *"nombre": "Charly Ramirez",
    "email": "pingestudio@gmail.com",
    "password": "Charly098",
    "activo": true,
    "img": "https://pbs.twimg.com/profile_images/1242471476638420992/7wR6kj-R_400x400.jpg",
    "role": "ADMIN_ROLE",
    "google": false,
    "salt": "?"
  * */

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 26,
    color: PrimaryColor,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    backgroundColor: BackGroundLight,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15
  },
  input: {
    height: 40,
    borderColor: PrimaryColor,
    color: PrimaryColor,
    borderWidth: 1,
    marginTop: 10,
    alignSelf: 'stretch',
    paddingHorizontal: 5,
  }
})
