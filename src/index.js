import React from 'react';
import { StatusBar } from 'react-native'

import criarRota from './routes';


export default function App() {
  const logando = true //autecação aqui
  const Rotas = criarRota(logando)
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1D2126" />
      <Rotas />
    </>
    )
}
