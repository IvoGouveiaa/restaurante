import {useState} from 'react';

function Cadastro(){

    

    const [nome, setNome]= useState('.....');

    const [senha, setSenha]= useState('.....');

    const [dadosCliente, setDadosCliente]=useState({
        nomeCliente:"-----------",
        senhaCliente:"-----------",
      })




    function cadastrarCliente(evento){

        


        evento.preventDefault();
        alert("Cliente cadastrado com sucesso!!!!");

        setDadosCliente({

            nomeCliente:nome,
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
            <label> Senha do cliente: </label>
            <input placeholder="Informe a senha do cliente"  valeu={senha} 
            onChange={(evento)=>setSenha(evento.target.value)}></input>

            
            <button type="submit">Cadastrar</button>
            
            </form>
            <br></br>

            <div>

                <span>Nome do cliente: {dadosCliente.nomeCliente} </span>
                <br/>
                <span>Senha do cliente: {dadosCliente.senhaCliente} </span>
            </div>

            
        </div>
        
    )
}

export default Cadastro;