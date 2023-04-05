import React, { useState, useRef } from 'react'
// import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import People from '../../Assets/people.svg'
import Arrow from '../../Assets/arrow.svg'
import { Container, H1, Image, ContainerItens, InputLabel, Input, Button }
  from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  //primeira posição criar a variavel
  //segunda posição função auxiliar a atualizar a variavel


  async function addNewUser() {
    // TODA VEZ QUE FOR USAR O AWAIT, O ASYNC TEM QUE ESTAR JUNTO.
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });
    setUsers([...users, newUser]);
  };

  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade"></Input>

        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow}></img>
        </Button>


      </ContainerItens>

    </Container>
  );
}

export default App