import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, Button, AsyncStorage, Alert } from 'react-native'
import useForm from '../../hooks/useForm'
import { PrimaryColor } from '../../theme/colors'

export default () => { 
  const [ error, setError ] = useState({
    error: false,
    textError: ''
  })
  const initialState = {
    cliente: 0,
    poliza: 0,
    nombre: '',
    vigencia: '',
    prima: 0,
    formaPago: ''
  }
  const onSubmit = async values => {
    if (values.cliente === 0) {
      setError({
        error: true,
        textError: 'Se debe de agregar número de cliente'
      })
      return
    }

    if (values.poliza === 0) {
      setError({
        error: true,
        textError: 'Se debe de agregar número de póliza'
      })
      return
    }

    if (values.nombre === '') {
      setError({
        error: true,
        textError: 'Se debe de agregar el nombre del cliente'
      })
      return
    }

    if (values.nombre.length < 7) {
      setError({
        error: true,
        textError: 'El nombre debe ser mayor de 7 letras'
      })
      return
    }

    if (values.vigencia === '') {
      setError({
        error: true,
        textError: 'Se debe de agregar una fecha de vigencia'
      })
      return
    }

    if (values.vigencia.length < 10) {
      setError({
        error: true,
        textError: 'La fecha de bede ser el siguiente formato: aaaa-mm-dd'
      })
      return
    }

    if (values.prima === 0) {
      setError({
        error: true,
        textError: 'Se debe de agregar el import de la prima'
      })
      return
    }

    if (values.formaPago === '') {
      setError({
        error: true,
        textError: 'Se debe agregar el tipo de forma de pago'
      })
      return
    }
    const token = await AsyncStorage.getItem('token')
    console.log(token)
    fetch(
      'https://pingestudio.com.mx:8345/api/v1/poliza',
      {
        method: 'POST',
        headers: {
          'x-token': token,
          'Content-Type': 'Application/json'
        },
        body: JSON.stringify(values)
      }
    )
      .then(x => x.json())
      .then(x => {
        console.log(x)
        if (!x.status) {
          return Alert.alert('Error', JSON.stringify(x.errors))
        }

        /*AsyncStorage.setItem('token', x.token)
        navigation.navigate('Dashboard')*/
        console.log(x)
      })
      .catch(e => console.log(e))
  }
  const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit)
  const onCleaning = () => {
    setError({
      error: false,
      textError: ''
    })
  }
  return(
    <View style={ styles.container }>
      <Text>Número de Cliente</Text>
      <TextInput
        value={ inputs.cliente }
        onChangeText={ subscribe('cliente') }
        style={ styles.input } 
        placeholder='No Cliente'
        onTouchStart={ onCleaning }
      />
      <Text>Número de Póliza</Text>
      <TextInput
        value={ inputs.poliza }
        onChangeText={ subscribe('poliza') }
        style={ styles.input }
        placeholder='No. Póliza'
        onTouchStart={ onCleaning }
      />
      <Text>Nombre Completo del Cliente</Text>
      <TextInput
        autoCapitalize='words'
        value={ inputs.nombre }
        onChangeText={ subscribe('nombre') }
        style={ styles.input }
        placeholder='Nombre del Cliente'
        onTouchStart={ onCleaning }
      />
      <Text>Fecha de Vigencia</Text>
      <TextInput
        value={ inputs.vigencia }
        onChangeText={ subscribe('vigencia') }
        style={ styles.input }
        placeholder='Fecha de Vigencia'
        onTouchStart={ onCleaning }
      />
      <Text>Prima</Text>
      <TextInput
        value={ inputs.prima }
        onChangeText={ subscribe('prima') }
        style={ styles.input }
        placeholder='Costo de la Prima'
        onTouchStart={ onCleaning }
      />
      <Text>Forma de Pago</Text>
      <TextInput
        autoCapitalize='words'
        value={ inputs.formaPago }
        onChangeText={ subscribe('formaPago') }
        style={ styles.input }
        placeholder='Mensual, Trimestral o Anual'
        onTouchStart={ onCleaning }
      />
      {
        error.error
          ?
            <Text style={ styles.error }>{ error.textError }</Text>
            :
            <></>
      }
      <Button title='Agregar Póliza' onPress={ handleSubmit } />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    marginBottom: 20,
    height: 40,
    borderColor: PrimaryColor,
    borderRadius: 10,
    borderWidth: 1,
    padding: 5
  },
  error: {
    color: 'red',
    textAlign: 'center'
  }
})
