import React, { useState, useRef } from "react"
import axios from "axios"
import People from "./assets/people.svg"
import Arrow from "./assets/arrow.svg"
import Trash from "./assets/trash.svg"


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


const App = () => {

  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUsers() {
    const data = await axios("http://localhost:3001/users", { name: inputName.current.value, age: inputAge.current.value });
    setUsers([...users, { id: Math.random(), name: inputName.current.value, age: inputAge.current.value }])
    console.log(data)
  }

  function deleteUser(userId) {
    const newUsers = users.filter((user) => user.id !== userId)

    setUsers(newUsers)
  }

  return (
    <Container>
      <Image alt="logo-img" src={People} />
      <ContainerItens>
        <H1>USER LOGIN</H1>

        <InputLabel>Name</InputLabel>
        <Input ref={inputName} placeholder="Enter your name"></Input>

        <InputLabel>CPF</InputLabel>
        <Input ref={inputAge} placeholder="Enter your CPF"></Input>

        <Button onClick={addNewUsers}>
          Login<img alt="seta" src={Arrow} ></img>
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>

              <p>{user.name}</p> <p> {user.age}</p>

              <Button2 onClick={() => deleteUser(user.id)}>

                <img alt="Trash" src={Trash}></img>

              </Button2>

            </User>
          ))}
        </ul>


      </ContainerItens>

    </Container>)
}

export default App