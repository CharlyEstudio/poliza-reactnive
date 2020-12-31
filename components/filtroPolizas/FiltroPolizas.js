import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { GreenSucess, Warning } from '../../theme/colors'

export default () => {
  return(
    <View style={ styles.selector }>
      <View style={ styles.botonSelector }>
        <TouchableOpacity style={ styles.textButton } onPress={() => console.log('Ver todas las pólizas')}>
          <Text>Todos</Text>
        </TouchableOpacity>
      </View>
      <View style={ styles.botonSelector }>
        <Icon name='add-circle' type='material' size={ 20 } color={ GreenSucess } />
        <TouchableOpacity style={ styles.textButton } onPress={() => console.log('Ver Pólizas Nuevas')}>
          <Text>Nuevos</Text>
        </TouchableOpacity>
      </View>
      <View style={ styles.botonSelector }>
        <Icon name='remove-circle' type='material' size={ 20 } color={ Warning } />
        <TouchableOpacity style={ styles.textButton } onPress={() => console.log('Pólizas Canceladas')}>
          <Text>Cancelados</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  selector: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  botonSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginRight: 12,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  textButton: {
    fontSize: 7,
    paddingTop: 6,
    paddingRight: 7,
    paddingBottom: 6,
    paddingLeft: 7
  },
})
