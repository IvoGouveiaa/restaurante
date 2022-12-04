import { Link, useNavigate } from 'react-router-dom';
import React, {useState,} from 'react';

function Header () {
    const [nome, setNome]= useState('.....');
    const [senha, setSenha]= useState('.....');
    const [perfil, setPefil]= useState('.....');
    const navigate= useNavigate();

    var usuario=perfil
    const[Acesso,SetAcesso]=useState(false)

    console.log(perfil)
    console.log(Acesso)

    const [user, setUser]=useState();


    function User(evento){

        evento.preventDefault();

        SetAcesso(true);

        

    if(usuario=="1")
    return (
        <>
        <header>
            <h1 id='logo'>LOGO</h1>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/cadastroCardapio'>Cadastro cardapio</Link>
                <Link to='/sobre'>Sobre Nós</Link>
                <Link to='/CriarLogin'>Cadastrar Usuário</Link>
            </nav>
        </header>
        </>
    )

    if(usuario=="2")
    return (
        <>
        <header>
            <h1 id='logo'>LOGO</h1>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/comanda'>Comanda</Link>
                <Link to='/sobre'>Sobre Nós</Link>
            </nav>
        </header>
        </>
    )

    if(usuario=="3")
    return (
        <>
        <header>
            <h1 id='logo'>LOGO</h1>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/sobre'>Sobre Nós</Link>
                <Link to='/cozinha'>Cozinha</Link>
            </nav>
        </header>
        </>
    )

    if(usuario=="4")
    return (
        <>
        <header>
            <h1 id='logo'>LOGO</h1>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/comanda'>Comanda</Link>
                <Link to='/cadastroCardapio'>Cadastro cardapio</Link>
                <Link to='/sobre'>Sobre Nós</Link>
                <Link to='/cozinha'>Cozinha</Link>
                <Link to='/CriarLogin'>Cadastrar Usuário</Link>
            </nav>
        </header>
        </>
    )
        }
    if(!Acesso || usuario=='.....')
        return(
            <>
            <center>
            <h1>LOGIN</h1>
            <form onSubmit={User} className="results">
            <p> Nome do usuario: </p>
                <input placeholder="Informe o nome do usuario"  valeu={nome} 
                onChange={(evento)=>setNome(evento.target.value)}>
    
                </input>
    
            <p> Senha do usuario: </p>
                <input placeholder="Informe a senha do usuario"  valeu={senha} 
                 onChange={(evento)=>setSenha(evento.target.value)}>
    
            </input>
    
            <br></br>
    
          <select placeholder="Informe o perfil do usuario" 
                 onChange={(evento)=>setPefil(evento.target.value)}>
    
            <option value='----'>------</option>
            <option value='1'>Admin</option>
            <option value='2'>garçom</option>
            <option value='3'>Cozinheiro</option>
            <option value='4'>Gerente</option>
    
    
    
    
          </select>
          
          <br></br>
          <button className="button" type="submit">Cadastrar</button>
          <br></br>
          <Link to='/CriarLogin'>Criar login</Link> 
                </form>
            </center>
            </>
        )
   }
   


export default Header;