import React from 'react';
import Icone from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native'
import { Container, Titulo } from './styles'
import Fundo from '~/components/telaDeFundo'
// import ItemLista from '~/components/itensLista'
import ItemMenu from '~/components/menu'


// const data = [1, 2, 3, 4, 5]

export default function Agendamento({ navigation }) {
  return (
    <Fundo>
      <Container>
        <Titulo>Menu</Titulo>
        <TouchableOpacity onPress={() => {navigation.navigate('Lista')}}>
          <ItemMenu Titulo="Cabelo"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }}>
          <ItemMenu Titulo="Barba"/>
        </TouchableOpacity>
      </Container>
    </Fundo>

  );

}
Agendamento.navigationOptions = {
  tabBarLabel: 'Agendamento',
  tabBarIcon: ({ tintColor }) => (
    <Icone name="event" size={20} color={tintColor} />
  )
}
