import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import Login from './pages/login';
import Cadastro from './pages/cadastro';
import Menu from './pages/menu'
import Agendar from './pages/agendar'
import ListaAgendamentos from './pages/listaAgendamento'

export default ( logando = false ) => createAppContainer(
  createSwitchNavigator({
    autenticar: createSwitchNavigator({
      Login,
      Cadastro,
    }),
    App: createBottomTabNavigator({
      Menu,
      Agendar,
    },{
      tabBarOptions: {
        keyboardHidesTabBar: true, //quando tecla do abrir vai passar por cima da tab
        activeTintColor: '#FBD068',
        inactiveTintColor: '#F2F2F2',
        style: {
          backgroundColor: '#000000'
        }
      }
    }),
    Lista: createStackNavigator({
      ListaAgendamentos
    }),
  },{
    initialRouteName: logando ? 'App' : 'autenticar' 
  })
);
