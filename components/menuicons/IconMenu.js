import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Icon } from 'react-native-elements'

import { PrimaryTextColor, PrimaryBackGround } from '../../theme/colors'

export default ({ text, icono, type, size, color, navigation }) => {
  const handleOpcion = () => {
    onPress(text)
  }

  return(
    <View style={ styles.body }>
      <View style={ styles.fondo }>
        <Icon
          name={ icono }
          type={ type }
          size={ size }
          color={ color }
          onPress={ () => navigation.navigate('Cartera') }
        />
      </View>
      <Text style={ styles.text }>{ text }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    height: 70,
    justifyContent: 'space-between'
  },
  fondo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 15,
    backgroundColor: PrimaryBackGround
  },
  text: {
    color: PrimaryTextColor,
    marginTop: 10,
    fontSize: 10,
  }
})

