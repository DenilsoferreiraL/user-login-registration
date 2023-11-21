import React from "react"
import { Container, ContainerItens, Image, H1, InputLabel, Input, Button } from "./styles"
import People from "./assets/people.svg"
import Arrow from "./assets/arrow.svg"

const App = () => {
  const users = [{ id: Math.random(), name: "Denilso", age: 23 },
  { id: Math.random(), name: "Bianca", age: 24 },
  { id: Math.random(), name: "Lucas", age: 44 }
  ]
  return (
    <Container>
      <Image alt="logo-img" src={People} />
      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade"></Input>

        <Button>Cadastrar<img alt="seta" src={Arrow} ></img></Button>

        <ul>
          {users.map((user) => (

            <li key={user.id}>
              {user.name} - {user.age}</li>
          ))}
        </ul>

      </ContainerItens>

    </Container>)
}

export default App