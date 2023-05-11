import React from "react";
import {useState, useRef} from 'react';
import {useNavigate} from 'react-router'
import axios from 'axios'

import Logo from '../../Assets/logo.svg'
import H1 from '../../components/Title'
// import ContainerItens from '../../components/ContainerItens';
// import Button from '../../components/Button';


const App = () => {
  return (
    <Container>
      <Image alt="logo" src={Logo} />
      <ContainerItens>
        <H1>Olá</H1>
        
        <InputLabel>Pedido</InputLabel>
        <Input ref={inputName} placeholder="Selecione seu Pedido"></Input>

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputAge} placeholder="Seu Nome"></Input>

        <Button onClick={addNewUser}>
          Finalizar Pedido
        </Button>

      </ContainerItens>

    </Container>
  );
}




export default App
