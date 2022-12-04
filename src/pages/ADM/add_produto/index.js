import { useState } from "react";

function Login() {

const [produto, setProduto] = useState('.....');
const [categoria, setCategoria] = useState('.....');



    function handleRegister(x) {
        x.preventDefault();


    }
return(
    <div>
    <form onSubmit={handleRegister}>

    <h1>Login</h1>

    <label>Produto </label>
    <input onChange={(x) => {setProduto(x.target.value); }}>

    </input>
    <br/>

    <label>Categoria </label>
    <input onChange={(x) => {setCategoria(x.target.value); }}>
        
    </input>

    <button type='submit'>Login</button>

    </form>

</div>

)

}
export default Login;