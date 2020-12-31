import React from 'react'
import { StyleSheet, View } from 'react-native'
import IconMenu from './IconMenu'
import { PrimaryColor } from '../../theme/colors'

export default ({ navigation }) => {
  return(
    <View style={ styles.menuIcon }>
      <IconMenu text='Cartera' icono='credit-card' type='evilicon' size={ 35 } color={ PrimaryColor } navigation={ navigation } /> 
      <IconMenu text='Pólizas Vencidas' icono='close-o' type='evilicon' size={ 35 } color={ PrimaryColor } navigation={ navigation } />
      <IconMenu text='Buscar' icono='search' type='evilicon' size={ 35 } color={ PrimaryColor } navigation={ navigation } />
      <IconMenu text='Agenda' icono='calendar' type='evilicon' size={ 35 } color={ PrimaryColor } navigation={ navigation } />
    </View>
  )
}

const styles = StyleSheet.create({
  menuIcon: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  text: {
    color: PrimaryColor,
    fontSize: 10
  }
})
