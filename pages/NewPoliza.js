import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'

import HeaderComponent from '../components/headerComponent/HeaderComponent'
import { FormNewPoliza } from '../components/'

import { BackGroundLight } from '../theme/colors'

export default () => {
  return(
    <View style={ styles.body }>
      <View style={ styles.header } />
      <View style={ styles.principal }>
        <HeaderComponent titulo='Nueva Póliza' subtitulo='' />
        <FormNewPoliza /> 
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    height: Dimensions.get('window').height,
  },
  header: {
    height: 20,
  },
  principal: {
    borderRadius: 20,
    backgroundColor: BackGroundLight,
    height: Dimensions.get('window').height,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  text: {
    color: '#000',
    fontSize: 50
  },
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
