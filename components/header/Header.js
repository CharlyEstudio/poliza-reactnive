import React from 'react'
import { View, StyleSheet } from 'react-native'
import { PrimaryColor } from '../../theme/colors'

import { ImporteCancelacion, Notification, IconPerfil, MenuIcons } from '..'

export default ({ navigation }) => {
  return(
    <View style={ styles.fondo }>
      <View style={ styles.row }>
        <View style={ styles.columnLeft }>
          <ImporteCancelacion /> 
        </View>
        <View style={ styles.columnRight }>
          <Notification navigation={ navigation } />
          <IconPerfil />
        </View>
      </View>
      <View style={ styles.row }>
        <MenuIcons navigation={ navigation } />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  fondo: {
    paddingTop: 40,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: PrimaryColor,
    height: 250
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  columnLeft: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  columnRight: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  } 
})
