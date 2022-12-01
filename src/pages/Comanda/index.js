import { Link } from "react-router-dom";
function Comandas (){
  return(
  <div >
  
    <Link to ='/comanda1'>Mesa 1</Link>  
  
    <Link to ='/comanda2'>Mesa 2</Link>  
  
    <Link to ='/comanda3'>Mesa 3</Link>  
  
    </div>
  )
}
export default Comandas;