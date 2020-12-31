import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'

import { PrimaryColor, PrimaryBackGround } from '../theme/colors'

export default () => {
  return(
    <View style={ styles.body }>
      <Text style={ styles.text }>Perfil</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 50
  }
})
