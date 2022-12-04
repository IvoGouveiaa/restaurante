import { Link} from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../api";

function Comandas (){

  const[data, setData] = useState([])

  const getpost = async() => {
    try {
        await api.get("/comandas").then((response)=>{
            setData(response.data)
        })
    } catch (error) {
        console.log(error)
    }
  } 
  useEffect(()=>{getpost()},[]) 
  
  
  return(
    <div >
      <h1>Comandas Existentes</h1>
      {data.map((produto)=>{return (produto.nomeproduto)})}
      <Link to ='/comanda1'>Mesa 1</Link>  

      <Link to ='/comanda2'>Mesa 2</Link>  

      <Link to ='/comanda3'>Mesa 3</Link>  

    </div>
  )
}
export default Comandas;