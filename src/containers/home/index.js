
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import People from "../../assets/people.svg";
import Arrow from "../../assets/arrow.svg";
import H1 from "../../components/Title"

import {
  Button,
  Container,
  ContainerItens,
  Image,
  Input,
  InputLabel,
  ErrorParagraph
} from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const inputName = useRef();
  const inputCpf = useRef();

  async function addNewUsers() {
    if (!inputName.current.value || !inputCpf.current.value) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const { data: newUser } = await axios.post("http://localhost:3001/users", {
        name: inputName.current.value,
        cpf: inputCpf.current.value
      });

      setUsers([...users, newUser]);

      navigate("/users");
    } catch (error) {
      console.error('Erro ao adicionar novo usuário:', error);
      setError('Erro ao adicionar novo usuário. Por favor, tente novamente.');
    }
  }

  return (
    <Container>
      <Image alt="logo-img" src={People} />
      <ContainerItens>
        <H1>USER LOGIN</H1>

        <InputLabel>Name</InputLabel>
        <Input ref={inputName} placeholder="Enter your name"></Input>

        <InputLabel>CPF</InputLabel>
        <Input ref={inputCpf} placeholder="Enter your CPF"></Input>

        {error && <ErrorParagraph>{error}</ErrorParagraph>}

        <Button onClick={addNewUsers}>
          Login<img alt="seta" src={Arrow} ></img>
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default App;
