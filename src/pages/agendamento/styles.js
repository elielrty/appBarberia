import styled from 'styled-components'

export const Container = styled.View`
    flex: 1;
`
export const Titulo = styled.Text`
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    align-self: center;
    margin-top: 30px;
`
export const Lista = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false, //tirando barra de rolagem que vem por padrão
    contentContainerStyle: { padding: 30 }
})``