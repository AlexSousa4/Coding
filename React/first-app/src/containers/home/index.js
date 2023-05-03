import { useState, useRef } from 'react'
import { useNavigate } from 'react-router';

import axios from 'axios'

import People from '../../Assets/people.svg'
import Arrow from '../../Assets/arrow.svg'
import H1 from '../../components/Title'
import { Container, Image, InputLabel, Input}
  from "./styles";
import ContainerItens from '../../components/ContainerItens';
import Button from '../../components/Button';

function App() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const inputName = useRef();
  const inputAge = useRef();
  //primeira posição criar a variavel
  //segunda posição função auxiliar a atualizar a variavel


  async function addNewUser() {
    // TODA VEZ QUE FOR USAR O AWAIT, O ASYNC TEM QUE ESTAR JUNTO.
    try {
      const { data: newUser } = await axios.post("http://localhost:3001/users", {
        name: inputName.current.value,
        age: inputAge.current.value,
      });
      setUsers([...users, newUser]);
      navigate('/usuarios');
    } catch (error) {
      console.log(error);
    }
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