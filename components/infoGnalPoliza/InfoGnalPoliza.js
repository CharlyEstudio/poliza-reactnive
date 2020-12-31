import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import Card from '../card/Card'
import ItemPoliza from '../itemPoliza/ItemPoliza'

import { PrimaryColor, PrimaryColorLight, PrimaryColorDark, PrimaryColorTrans, Subtitle } from '../../theme/colors'

export default () => {
  return(
    <View>
      <Text style={ styles.headerToday }>ÚLTIMAS AGREGADAS</Text>
      <Card
        mTop={ 10 }
        bckCol='white'
        brdRds={ 20 }
        ht={ 200 }
        pd={ 20 }
      >
        <ItemPoliza
          nameIcon='directions-car'
          typeIcon='material'
          sizeIcon={ 27 }
          colorIcon={ PrimaryColor }
          titulo='Cliente A'
          subtitulo='29-08-2020'
          precio='1,767.58'
          fechaPrecio='30-08-2020'
          saldo='positivo'
        /> 
        <View style={ styles.divisor } />
        <ItemPoliza
          nameIcon='directions-car'
          typeIcon='material'
          sizeIcon={ 27 }
          colorIcon={ PrimaryColor }
          titulo='Cliente B'
          subtitulo='23-08-2020'
          precio='1,576.89'
          fechaPrecio='24-08-2020'
          saldo='positivo'
        />
      </Card>
      <Text style={ styles.headerToday }>ÚLTIMA CANCELADA</Text>
      <Card
        mTop={ 10 }
        bckCol='white'
        brdRds={ 20 }
        ht={ 100 }
        pd={ 20 }
      >
        <ItemPoliza
          nameIcon='directions-car'
          typeIcon='material'
          sizeIcon={ 27 }
          colorIcon={ PrimaryColor }
          titulo='Cliente C'
          subtitulo='30-08-2020'
          precio='1,231.34'
          fechaPrecio='30-08-2020'
          saldo='negativo'
        />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  headerToday: {
    marginTop: 30,
    color: PrimaryColorTrans,
    letterSpacing: 1
  },
  card: {
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    height: 200,
    padding: 20
  },
  divisor: {
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
    width: '100%',
    borderTopWidth: 1,
    marginTop: 10,
    marginBottom: 10
  },
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
  subtitlePoliza: {
    fontWeight: '500',
    color: Subtitle,
    fontSize: 12,
    letterSpacing: 1
  }
})
