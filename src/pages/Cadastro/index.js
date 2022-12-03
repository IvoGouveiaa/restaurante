import React, {useState} from 'react';

function Cadastro(){

    

    const [nome, setNome]= useState('.....');

    const [perfil, setPerfil] = useState();

    const [senha, setSenha]= useState('.....');

    const [dadosCliente, setDadosCliente]=useState({
        nomeCliente:"-----------",
        perfilCliente:"-----------",
        senhaCliente:"-----------",
      })

      const confirmaPerfil = e =>{
        e.preventDefault();
      }


    function cadastrarCliente(evento){

        


        evento.preventDefault();
        alert("Cliente cadastrado com sucesso!!!!");

        setDadosCliente({


            nomeCliente:nome,
            perfilCliente: perfil,
            senhaCliente:senha,
        })
    }



    return(
        <div classNAME= "Cadastro">
            <h1>Pagina Cadastro</h1>
            <form onSubmit={cadastrarCliente}> 
            
            <label> Nome do cliente: </label>
            <input placeholder="Informe o nome do cliente"  valeu={nome} 
            onChange={(evento)=>setNome(evento.target.value)}>
           </input>
            <br/>

            <label>Qual o perfil do usuario: </label>
            <select name = "perfil" value = {perfil} onChange = {texto => setPerfil(texto.target.value)}>
            <option value = "">Selecione...</option>
            <option value = "1">Adminim</option>
            <option value = "2">Garçom</option>
            <option value = "3">Cozinheiro</option>
            <option value = "4">Gerente</option>
            </select>


            <br/>
            <label> Senha do cliente: </label>
            <input placeholder="Informe a senha do cliente"  valeu={senha} 
            onChange={(evento)=>setSenha(evento.target.value)}></input>

            <br/>
            <button type="submit">Cadastrar</button>
            
            </form>
            <br></br>

            <div>

                <span>Nome do cliente: {dadosCliente.nomeCliente} </span>
                <br/>
                <span>Senha do cliente: {dadosCliente.senhaCliente} </span>
                <br/>
                <span>Perfil do cliente: {dadosCliente.perfilCliente} </span>
            </div>

            
        </div>
        
    )
}

export default Cadastro;