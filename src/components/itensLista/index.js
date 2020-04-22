import React from 'react';
import { TouchableOpacity } from 'react-native'
import IconeDetalhe from 'react-native-vector-icons/MaterialIcons'

import { Container, Esquerda, Info, Nome, Horario } from './styles';

export default class ItensLista extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
    
  }
  render() {
    return (
      <Container>
        <Esquerda>
          <Info>
              <Nome>{this.props.data.id}</Nome>
              <Horario>{this.props.data.hour}</Horario>
          </Info>
        </Esquerda>
        <TouchableOpacity onPress={() => { }}>
          <IconeDetalhe name="event-busy" size={20} color="#f64c75" />
        </TouchableOpacity>
      </Container>
    );
  }


}

