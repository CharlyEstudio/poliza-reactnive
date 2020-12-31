import React from 'react'
import { StatusBar } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

// Theme
import { PrimaryColor, BackGroundLight } from './theme/colors'

// Pages
import {
  Login as LoginScreen,
  Register as RegisterScreen,
  AuthLoading,
  Home as HomeScreen,
  Perfil as PerfilScreen,
  NewPoliza,
} from './pages'

LoginScreen.navigationOptions = {
  title: '',
  headerStyle: {
    height: 0,
  }
}

RegisterScreen.navigationOptions = {
  title: 'SingIn',
  headerStyle: {
    backgroundColor: BackGroundLight,
    elevation: 0,
    shadowOpacity: 0
  }
}

const OnBoardingNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen
  },
  {
    initialRouteName: 'Login'
  }
)

// Navegación Tabs
const TabNavigator = createBottomTabNavigator(
  {
    Dashboard: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Dashboard'
      }
    },
    Nuevo: {
      screen: NewPoliza,
      navigationOptions: {
        tabBarLabel: 'Nueva Póliza',
      }
    },
    Perfil: {
      screen: PerfilScreen,
      navigationOptions: {
        tabBarLabel: 'Perfil'
      }
    }
  },
  {
    initialRouteName: 'Dashboard',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor, horizontal, focused }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Dashboard') {
          iconName = `ios-cube`
        } else if (routeName === 'Perfil') {
          iconName = `md-settings`
        } else {
          iconName = `md-add-circle`
        }
        return <Ionicons name={iconName} size={ 30 } color={ tintColor } />
      },
      tabBarOptions: {
        activeTintColor: PrimaryColor,
        style: {
          backgroundColor: BackGroundLight,
          height: 60,
        },
        labelStyle: {
          margin: 0,
        },
        tabStyle: {
          padding: 0,
          margin:0,
        }
      }
    })
  }
)

const RootStack = createStackNavigator(
  {
    Main: TabNavigator,
    MiModal: () => <Text>Modal 1</Text>
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)

const BaseStack = createSwitchNavigator(
  {
    AuthLoading,
    OnBoarding: OnBoardingNavigator,
    Root: RootStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
)

export default createAppContainer(BaseStack)

// Para navegar
// navigation.push('<nombre_ruta>')
// Para navegar con valores
// navigation.push('<nombre_ruta>', { lala: 'lele', user_id: 2 })
// Para obtener los datos que envían por la navegación
// const lala = navigation.getParam('lala', 'un valor por defecto, esto si no encuentra el valor de lala')
// Para regresar
// navigation.goBack()
