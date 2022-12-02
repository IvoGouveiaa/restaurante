import { Link } from "react-router-dom";
function Header(){



    return(
        
      
        <header>
        
          Rendezvous
            
            
        <div className="menu">
            <br/> <Link to ='/'>Home</Link> 
             <Link to ='/cadastro'>Cadastro</Link> 
             <Link to ='/cardapio'>Cardapio</Link>
             <Link to ='/comanda'>Comanda</Link>  
            <Link to ='/cozinha'>Cozinha</Link>
            <Link to ='/login'>Login</Link>

        </div>
        </header>
    )
}

export default Header;