import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

import { PrimaryColor } from '../../theme/colors'

export default () => {
  return(
    <View>
      <Image
        style={ styles.perfil }
        source={{ uri: 'https://pbs.twimg.com/profile_images/1242471476638420992/7wR6kj-R_400x400.jpg' }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  perfil: {
    height: 50,
    width: 50,
    marginLeft: 30,
    backgroundColor: PrimaryColor,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
  }
})
