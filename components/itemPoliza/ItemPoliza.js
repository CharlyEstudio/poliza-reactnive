import React from 'react'
import { Icon } from 'react-native-elements'
import { StyleSheet, View, Text } from 'react-native'

import { PrimaryColorLight, PrimaryColorDark, Subtitle, Warning, GreenSucess } from '../../theme/colors'

export default ({ nameIcon, typeIcon, sizeIcon, colorIcon, titulo, subtitulo, precio, fechaPrecio, saldo }) => {
  return(
    <View style={ styles.poliza }>
      <View style={ styles.columnLeft }>
        <View style={ styles.fondoBotom }>
          <Icon
            name={ nameIcon }
            type={ typeIcon }
            size={ sizeIcon }
            color={ colorIcon }
            onPress={() => console.log(`Ver ${ titulo }`)}
          />
        </View>
        <View>
          <Text style={ styles.titlePoliza }>{ titulo }</Text>
          <Text style={ styles.subtitlePoliza }>{ subtitulo }</Text>
        </View>
      </View>
      <View style={ styles.columnRigth }>
        {
          saldo === 'positivo'
          ?
            <Text style={ styles.titlePolizaPositivo }>+ $ { precio }</Text>
          :
            <Text style={ styles.titlePolizaNegativo }>- $ { precio }</Text>
        }
        <Text style={ styles.subtitlePoliza }>{ fechaPrecio }</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  poliza: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  columnLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  columnRigth: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  fondoBotom: {
    width: 50,
    height: 50,
    backgroundColor: PrimaryColorLight,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15
  },
  titlePoliza: {
    fontWeight: 'bold',
    color: PrimaryColorDark,
    fontSize: 15,
    marginBottom: 5
  },
  titlePolizaPositivo: {
    fontWeight: 'bold',
    color: GreenSucess,
    fontSize: 15,
    marginBottom: 5
  },
  titlePolizaNegativo: {
    fontWeight: 'bold',
    color: Warning,
    fontSize: 15,
    marginBottom: 5
  },
  subtitlePoliza: {
    fontWeight: '500',
    color: Subtitle,
    fontSize: 12,
    letterSpacing: 1
  }
})
