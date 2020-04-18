import React from 'react';
import { Image } from 'react-native'
import { Esquerda, ContainerTexto, ContainerMenu, TituloMenu, ImgMenu } from './styles'
import Icone from 'react-native-vector-icons/MaterialIcons'
import { Titulo } from '~/pages/agendamento/styles';

// import { Container } from './styles';

export default function menu({ Titulo, }) {
    function verificarimg(Titulo) {
     if (Titulo === 'Barba') {      
            return <ImgMenu source={require('../../img/navalha.png')}/>
        } else {
            if (Titulo === 'Cabelo') {
                return <ImgMenu source={require('../../img/cabelo.png')}/>
            } else {
                if (Titulo === 'Combo') {

                }
            }
        }
    }
    return (

        <ContainerMenu>
            <Esquerda>
                { verificarimg(Titulo)}
                <ContainerTexto>
                    <TituloMenu>{Titulo}</ TituloMenu>
                </ContainerTexto>
            </Esquerda>
            <Icone name='date-range' size={30} color="#0D0D0D" />
        </ContainerMenu>

    );
}
