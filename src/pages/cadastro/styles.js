import { Platform } from 'react-native'
import styled from 'styled-components/native';

import Input from '~/components/Input'
import Butao from '~/components/Butao'

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
flex: 1;
justify-content: center;
align-items: center;
padding: 0 30px;
`

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`
export const FormInput = styled(Input)`
  margin-bottom: 10px;
`
export const SubmitButton = styled(Butao)`
  margin-top: 20px;
`
export const NavLink = styled.TouchableOpacity`
  margin-top: 20px;
`
export const NavLinkText = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 16px;
`
