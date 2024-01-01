

const Users = [
    {
        id: 1,
        nome: "Thiago",
        idade: 23,
        sexo: "Maculino"
    },
    {
        id: 2,
        nome: "Denilso",
        idade: 23,
        sexo: "Maculino"
    },
    {
        id: 3,
        nome: "Bruna",
        idade: 23,
        sexo: "Maculino"
    },
    {
        id: 4,
        nome: "Bianca",
        idade: 23,
        sexo: "Maculino"
    },
    {
        id: 5,
        nome: "Vozinha",
        idade: 23,
        sexo: "Maculino"
    }
]


function Teste() {
    if (Users) {
        
    }



    return (
        <div style={{padding: 150}}>
            <h1> Olá Mundo!</h1>
            <ol>
                {Users.map((user, index) => (
                    <li key={index}>
                        <div>id: {user.id}</div>
                        <div>Nome: {user.nome}</div>
                        <div>Idade {user.idade}</div>
                        <div>Sexo: {user.sexo}</div>
                    </li>
                ))}
            </ol>

        </div>
    )
}

export default Teste