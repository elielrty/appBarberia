import React, {useRef} from 'react';
import { Image } from 'react-native';

import logo from "~/img/logo.png"
import Fundo from '~/components/telaDeFundo'

 import { Container, Form, FormInput, SubmitButton, NavLink, NavLinkText } from './styles';

export default function Login({ navigation }) {
  const passowrdRef = useRef()

  function handleSubmit() {

  }

  return (
    <Fundo>
        <Container>
          <Image source={logo} />
          <Form>
              <FormInput
                icon="mail-outline"
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Digite seu e-mail"
                returnKeyType="next"
                onSubmitEditing={() => passowrdRef.current.focus()}
              />
              <FormInput
                icon="lock-outline"
                secureTextEntry
                placeholder="Digite sua senha"
                ref={passowrdRef}
                returnKeyType="send"
                onSubmitEditing={handleSubmit}
              />

            <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
          </Form>

          <NavLink onPress={ () => navigation.navigate('Cadastro') }>
            <NavLinkText>Criar conta</NavLinkText>
          </NavLink>
        </Container>
    </Fundo>
    );
}
