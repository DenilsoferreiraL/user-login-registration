import React, { useState, useRef } from "react"
import axios from "axios"
import People from "../../assets/people.svg"
import Arrow from "../../assets/arrow.svg"


import {
  Button,
  Container,
  ContainerItens,
  H1,
  Image,
  Input,
  InputLabel
} from "./styles"

function App() {

  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputCpf = useRef()

  async function addNewUsers() {

    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value, cpf: inputCpf.current.value
    });

    setUsers([...users, newUser])
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

       <Button to="/users" onClick={addNewUsers}>
          Login<img alt="seta" src={Arrow} ></img>
        </Button>

      </ContainerItens>
    </Container>)
}

export default App