import React from 'react';
import Fundo from '~/components/telaDeFundo'
import Icone from 'react-native-vector-icons/MaterialIcons'
// import { Container } from './styles';

export default function Agendar() {
  return (
    <Fundo>

    </Fundo>
  );
}
Agendar.navigationOptions = {
    tabBarLabel: 'Agendar',
    tabBarIcon: ({ tintColor}) => (
        <Icone name="add" size={20} color={tintColor}/>
    )
}