import { useState } from "react";

function Login() {

const [senhal, setSenhal] = useState('.....');
const [id, setId] = useState('.....');

//           API AQUI

const cadastrado = ['ivo'];
const cadastros = ['senha'];


    function handleRegister(x) {
        x.preventDefault();

        if (cadastrado.includes(id) && cadastros.includes(senhal))
        alert("Bem vindo senhor: "+cadastrado);

        else{
            alert("Login não encontrado");
        }


    }
return(
    <div>
    <form onSubmit={handleRegister}>

    <h1>Login</h1>

    <label>Insira o ID </label>
    <input onChange={(x) => {setId(x.target.value); }}>

    </input>
    <br/>

    <label>Insira a senha </label>
    <input onChange={(x) => {setSenhal(x.target.value); }}>
        
    </input>

    <button type='submit'>Login</button>

    <p>ID: ivo | senha: senha</p>
    </form>

</div>

)

}
export default Login;