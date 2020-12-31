import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { BackGroundLight, PrimaryColor } from '../theme/colors'
import Header from '../components/header/Header'
import { HeaderComponent, FiltroPolizas, InfoGnalPoliza } from '../components/'

const HomeScreen = ({ navigation }) => {
  const [ filtro, setFiltro ] = useState('Todos')
  return(
    <View style={ styles.fondo }>
      <Header navigation={ navigation } />
      <View style={ styles.body }>
        <HeaderComponent titulo='Pólizas Recientes' subtitulo={ filtro } />
        <FiltroPolizas />
        <InfoGnalPoliza />
      </View>
    </View>
  )
}

HomeScreen.navigationOptions = {
  title: '',
  headerStyle: {
    backgroundColor: PrimaryColor,
    height: 20,
    elevation: 0,
    shadowOpacity: 0
  }
}

const PageDemo = ({ navigation }) => {
  return(
    <Text>PageDemo</Text>
  )
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Cartera: {
      screen: PageDemo
    },
    Vencidas: {
      screen: PageDemo
    },
    Buscar: {
      screen: PageDemo
    },
    Agenda: {
      screen: PageDemo
    },
    Notificacion: {
      screen: PageDemo
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: PrimaryColor,
        elevation: 0,
        shadowOpacity: 0,
      },
      headerTintColor: BackGroundLight,
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  }
)

const RootStack = createStackNavigator(
  {
    Main: AppNavigator,
    MiModal: () => <Text>Modal 1</Text>
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)

export default createAppContainer(RootStack)

/*export default ({ navigation }) => {
  const [ filtro, setFiltro ] = useState('Todos')
  return(
    <View style={ styles.fondo }>
      <Header navigation={ navigation } />
      <View style={ styles.body }>
        <HeaderComponent titulo='Pólizas Recientes' subtitulo={ filtro } />
        <FiltroPolizas />
        <InfoGnalPoliza />
      </View>
    </View>
  )
}*/

const styles = StyleSheet.create({
  fondo: {
    backgroundColor: PrimaryColor,
    height: Dimensions.get('window').height - 290,
  },
  body: {
    // paddingTop: 20,
    paddingLeft: 25,
    paddingRight: 25,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: BackGroundLight,
    height: Dimensions.get('window').height - 290
  },
})
