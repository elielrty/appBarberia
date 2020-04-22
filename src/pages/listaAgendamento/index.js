import React from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native'
import { Container, Lista } from './styles';
import ItemLista from '~/components/itensLista'
import Fundo from '~/components/telaDeFundo'
import  Icone  from 'react-native-vector-icons/MaterialIcons';


export default class ListaAgendamento extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isLoading: true,
      
            service: '',
            hour: '',
            date: '',
            status: false
      
          };
    }

    async connectApi() {
        await fetch('https://barber-apirest.herokuapp.com/api/agendamento', {
          method: "GET"
        })
          .then((response) => response.json())
          .then((json) => {
            this.setState({ data: json });
          })
          .catch((error) => console.error(error))
          .finally(() => {
            this.setState({ isLoading: false });
          });
      }
      componentDidMount = async() => {
        await this.connectApi();
      }
      
    render() {
        if(this.state.isLoading){
            return <ActivityIndicator size={50} style={{ justifyContent: 'center', padding: '50%', }}/>
          }    
        return (
            <Fundo>
                <Container>
                    <Lista
                        data={this.state.data}
                        keyExtractor={item => JSON.stringify(item)}
                        renderItem={({ item }) => (
                            <ItemLista data={item} />
                        )}
                    />
                </Container>
            </Fundo>
        );
    }
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