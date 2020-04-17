import React, { useRef } from 'react';
import { Image } from 'react-native';

import logo from '~/img/logo.png'
import Fundo from '~/components/telaDeFundo'

import { Container, Form, FormInput, SubmitButton, NavLink, NavLinkText } from './styles';

export default function Cadastro({ navigation }) {
  const emailRef = useRef()
  const passowordRef = useRef()

  function handleSubmit() {

  }

  return (
    <Fundo>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="nome Completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passowordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            ref={passowordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
        </Form>

        <NavLink onPress={() => navigation.navigate('Login')}>
          <NavLinkText>Ja tenho conta</NavLinkText>
        </NavLink>
      </Container>
    </Fundo>
  );
}
