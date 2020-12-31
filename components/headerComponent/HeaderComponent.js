import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { PrimaryColor, PrimaryColorDark } from '../../theme/colors'

export default ({ titulo, subtitulo }) => {
  return(
    <View style={ styles.header }>
      <Text style={ styles.titleHeader }>{ titulo }</Text>
      <Text style={ styles.small }>{ subtitulo }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleHeader: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: PrimaryColorDark
  },
  small: {
    fontSize: 12,
    fontWeight: 'bold',
    color: PrimaryColor
  }
})
