import { Link } from "react-router-dom";
import {useState} from "react";

function Comanda1() {

  var taxa = 2.50;
  const [pedidopreco, setPedidopreco] = useState()
  const [userPedidopreco, setUserPedidoPreco] = useState()

  var select = document.querySelector("select#produto");
  const [pedidotxt, setPedidoTxt] = useState()
  

  function CalcularPedido(e) {
    e.preventDefault();
    setUserPedidoPreco(pedidopreco);

    pedidopreco += taxa;
    setPedidoTxt(select.options[select.selectedIndex].text);

  }

  function finalizarComanda(e) {
    setUserPedidoPreco()
  }

  return(
    <div>

    <Link to ='/comanda'>voltar</Link> 
    <form onSubmit={CalcularPedido}>
      
    
        <h1> Comanda 1</h1>
        <label>Pedidos: </label>

        <select name="pedido" value={pedidopreco} onChange={(e) => setPedidopreco(e.target.value)}>
          <option value="">Selecione...</option>
          <option value="1">prato1</option>
          <option value="2">prato2</option>
          <option value="3">prato3</option>
          <option value="4">prato4</option>
          <option value="5">prato5</option>
        </select><br></br><br></br>

        <button type="submit">BORAAAAA</button>

      </form>

      {userPedidopreco && (
        <>
          <p> Pedido: {pedidotxt}</p>

          <p> Preço: {userPedidopreco}</p>

          <button onClick={finalizarComanda}> Finalizar Compra</button>
        </>
        )
      }

    </div>
    
  )
}

export default Comanda1;