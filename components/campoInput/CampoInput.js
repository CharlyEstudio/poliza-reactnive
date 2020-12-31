import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

export default () => {
  return(
    <View style={ styles.campo }>
      <Text>Nombre</Text>
      <TextInput style={ styles.input } />
    </View>
  )
}

const styles = StyleSheet.create({
  campo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  input: {
    marginLeft: 10,
    height: 40,
    padding: 5,
    width: '82%',
    backgroundColor: 'white'
  }
})
