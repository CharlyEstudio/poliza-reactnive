import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { PrimaryTextColor } from '../../theme/colors'

export default () => {
  return(
    <>
      <Text style={ styles.importe }>$ 2,589.50</Text>
      <Text style={ styles.text }>Próximas Cancelaciones</Text>
    </>
  )
}

const styles = StyleSheet.create({
  importe: {
    color: PrimaryTextColor,
    fontWeight: 'bold',
    fontSize: 25
  },
  text: {
    color: PrimaryTextColor,
    fontSize: 10
  }
})
