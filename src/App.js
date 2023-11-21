import React, { useState } from "react"
import {
  Container,
  ContainerItens,
  Image,
  H1,
  InputLabel,
  Input,
  Button,
  User,
  Button2
} from "./styles"

import People from "./assets/people.svg"
import Arrow from "./assets/arrow.svg"
import Trash from "./assets/trash.svg"

const App = () => {

  const [users, setUsers] = useState([])
  const [name, setName] = useState()
  const [age, setAge] = useState()

  function addNewUsers() {
    setUsers([...users, { id: Math.random(), name, age }])
  }

  function changeInputName(event) {
    setName(event.target.value)
  }
  
  function changeInputAge(event) {
    setAge(event.target.value)
  }

  return (
    <Container>
      <Image alt="logo-img" src={People} />
      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input onChange={changeInputName} placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input onChange={changeInputAge} placeholder="Idade"></Input>

        <Button onClick={addNewUsers}>
          Cadastrar<img alt="seta" src={Arrow} ></img>
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p> {user.age}</p>
              <Button2><img alt="Trash" src={Trash}></img></Button2>
            </User>
          ))}
        </ul>


      </ContainerItens>

    </Container>)
}

export default App