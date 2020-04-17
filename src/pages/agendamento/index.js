import React from 'react';
import { Text } from 'react-native';

import Icone from 'react-native-vector-icons/MaterialIcons'
import { Container, Titulo, Lista } from './styles'
import Fundo from '~/components/telaDeFundo'
import ItemLista from '~/components/itensLista'

const data = [1, 2, 3, 4, 5]

export default function Agendamento() {
  return (
    <Fundo>
        <Container>
          <Titulo>Agendamento</Titulo>

          <Lista
            data={data}
            keyExtractor={ item => String(item)}
            renderItem={({item}) => (
              <ItemLista info={item}/>
            )}
          />
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
