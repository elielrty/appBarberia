<Container>
          <Titulo>Agendamento</Titulo>

          <Lista
            data={data}
            keyExtractor={ item => String(item)}
            renderItem={({item}) => (
              <ItemLista info={item}/>
            )}
          />
        </Container>