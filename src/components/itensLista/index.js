import React from 'react';
import { TouchableOpacity } from 'react-native'
import IconeDetalhe from 'react-native-vector-icons/MaterialIcons'

import { Container,Esquerda , Info, Nome, Horario} from './styles';

export default function ItensLista() {
  return (
    <Container>
        <Esquerda>

          <Info>
          <Nome>Eliel Marques</ Nome>
          <Horario> 12:00 </Horario>
        </Info>
        </Esquerda>

      <TouchableOpacity onPress={() => {}}>
          <IconeDetalhe name="event-busy" size={20} color="#f64c75"/>
      </TouchableOpacity>
        
    </Container>
  );
}

