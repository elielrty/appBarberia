import styled from 'styled-components'

export const Container = styled.View`
    flex: 1;
`
export const Lista = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false, //tirando barra de rolagem que vem por padrão
    contentContainerStyle: { padding: 30 }
})``

