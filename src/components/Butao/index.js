import React from 'react';
import { ActivityIndicator } from 'react-native';

 import { Container,TextoButao } from './styles';

export default function Butao({ children, loading, ...rest}) { // children é o texto do butão, loading é uma propridade que vai ser false ou true e rest são as demais propridades
  return ( //verificando se o loadig é true e se for vai rederizar o AtivityIdicator
   <Container {...rest}>
     {loading ? (
       <ActivityIndicator size="small" color="#fff" />
     ) : (
      <TextoButao>{children}</TextoButao>
     )}
   </Container>
  );
}
