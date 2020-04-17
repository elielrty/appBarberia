import React, { forwardRef } from 'react' // forwardRef é para ultilizar o ref
import Icone from 'react-native-vector-icons/MaterialIcons'

import { Container, TextInput } from './styles'

function Input({ style, icon, ...rest }, ref) { //style é o intilo que vai ser passado para componet, icon, ...rest são os atributo que vao passar para o componet
  return (// verificando se o icon existe para renderizar
    <Container style={style}>
        { icon && <Icone name={icon} size={20} color="rgba(255, 193, 7, 0.6)"/>}
        <TextInput {...rest} ref={ref}/>
    </Container>
  )
}



export default  forwardRef(Input) // agora a ref vai ser passada como segundo parametro da função
