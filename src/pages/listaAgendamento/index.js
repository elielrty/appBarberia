import React from 'react';
import { TouchableOpacity } from 'react-native'
import { Container } from './styles';
import Fundo from '~/components/telaDeFundo'
import  Icone  from 'react-native-vector-icons/MaterialIcons';

export default function ListaAgendamento() {
    return (
        <Fundo>
            <Container>
                <Lista
                    data={data}
                    keyExtractor={item => String(item)}
                    renderItem={({ item }) => (
                        <ItemLista info={item} />
                    )}
                />
            </Container>
        </Fundo>
    );
}

ListaAgendamento.navigationOptions = ({ navigation }) => ({
    headerTitleAlign: 'center',
    title: 'Agendamentos',
    headerLeft: () => (
        <TouchableOpacity onPress={() =>  navigation.navigate('App')}>
            <Icone name="chevron-left" size={50} color="#222" />
        </TouchableOpacity>
    ),
})