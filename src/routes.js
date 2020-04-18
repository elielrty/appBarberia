import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Login from './pages/login';
import Cadastro from './pages/cadastro';
import Agendamento from './pages/agendamento'
import Agendar from './pages/agendar'

export default ( logando = false ) => createAppContainer(
  createSwitchNavigator({
    autenticar: createSwitchNavigator({
      Login,
      Cadastro,
    }),
    App: createBottomTabNavigator({
      Agendamento,
      Agendar
    },{
      tabBarOptions: {
        keyboardHidesTabBar: true, //quando tecla do abrir vai passar por cima da tab
        activeTintColor: '#FBD068',
        inactiveTintColor: '#F2F2F2',
        style: {
          backgroundColor: '#000000'
        }
      }
    })
  },{
    initialRouteName: logando ? 'App' : 'autenticar' 
  })
);
