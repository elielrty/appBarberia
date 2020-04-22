import styled from 'styled-components/native';
import InputMascara from 'react-native-text-input-mask'

export const Container = styled.View`
  flex:1;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;
export const ContainerInput = styled.View`
  
  align-items: center;
  justify-content: center;
  align-self: stretch;
  margin: 100px 0 300px 0;
`

export const Titulo = styled.Text`
    font-size: 20px;
    color: #F4CA05;
    font-weight: bold;
    align-self: center;
    margin: 60px 0 40px 0;
`
export const ContainerBotao = styled.View`
  margin-top: 60px;
  align-items: center;
  justify-content: center;
 flex-direction:row;
`
export const BotaoSelecionar = styled.TouchableOpacity`
  background: #F4CA05;
  width:100px;
  height:40px;
  justify-content: center;
  border-radius:125px;
  border: 1px solid yellow;
  margin-left: 50px;
` 
export const ContainerText = styled.Text`
  align-self: center;
`
export const FormInput = styled(InputMascara)`
  width: 100px;
  height: 40px;
  background: #FFF;
  color: #222;
  padding-right:10px;
  border: 1px solid #D2D7D9;
  margin-right:20px;
  background: #D2D7D9;
`