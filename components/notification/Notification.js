import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { PrimaryColorLight } from '../../theme/colors'

export default ({ navigation }) => {
  return(
    <View>
      <Icon name='notifications' color={ PrimaryColorLight } onPress={ () => navigation.navigate('Notificacion') } />
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#eee'
  }
})
