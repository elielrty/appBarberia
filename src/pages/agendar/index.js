import React, { Component } from 'react';
import Fundo from '~/components/telaDeFundo'
import Icone from 'react-native-vector-icons/MaterialIcons'

import DataInput from 'react-native-datepicker'
import { StyleSheet, Text, View } from 'react-native'
import { Container, ContainerInput, Titulo, ContainerBotao, BotaoSelecionar, ContainerText, FormInput } from './styles';



export default class Agendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: "",
      hora: ""

    }
  }
  static navigationOptions = {
    tabBarLabel: 'Agendar',
    tabBarIcon: ({ tintColor }) => (
      <Icone name="add" size={20} color={tintColor} />
    )
  }

  dataSelecionada = (data) => {
    this.setState({ data: data })

  }

  render() {
    return (
      <Fundo>
        <Titulo>Selecione a Data</Titulo>
        <Container>
          <ContainerInput>
            <DataInput
              style={styles.dataComponente}
              date={this.state.data}
              format="DD/MM/YYYY"
              minDate={new Date()}
              onDateChange={this.dataSelecionada}
            />

            <ContainerBotao>
              <FormInput
                keyboardType="numeric"
                placeholder="Hora"
                mask={"[00]{:}[00]"}
                onChangeText={(horaFormatada, extracted ) => {
                  let verificar = parseInt(extracted)
                  if(verificar >= 2399){
                     this.setState({hora: horaFormatada})
                  }else{
                    this.setState({hora: extracted})
                  }
                }}
              />
              <BotaoSelecionar>
                <ContainerText>
                <Text>{ this.state.hora}</Text>
                </ContainerText>
              </BotaoSelecionar>           
            </ContainerBotao>
          </ContainerInput>
        </Container>
      </Fundo>
    );
  }
}

const styles = StyleSheet.create({
  dataComponente: {
    width: 300,
    backgroundColor: "#D2D7D9",
    borderColor: "#222",
  }
})