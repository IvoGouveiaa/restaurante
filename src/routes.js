import { BrowserRouter, Router, Routes, Route } from "react-router-dom";


        import Cadastro from './pages/Cadastro';
        import Cardapio from './pages/Cardapio';
        import Comanda from './pages/Comanda';
        import Cozinha from './pages/Cozinha';
        import Home from "./pages/Home";
        import Login from './pages/Login';
        import Header from "./components/Header";
        import Comanda1 from './pages/Comanda1';
        import Comanda2 from './pages/Comanda2';
        import Comanda3 from './pages/Comanda3';        



        function RouterApp (){
                return (
                
                <BrowserRouter>
                <Header/>
                <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/cardapio" element={<Cardapio/>}/>
                <Route path="/comanda" element={<Comanda/>}/>
                <Route path="/cozinha" element={<Cozinha/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/comanda1" element={<Comanda1/>}/>
                <Route path="/comanda2" element={<Comanda2/>}/>
                <Route path="/comanda3" element={<Comanda3/>}/>

                </Routes>

                </BrowserRouter>

                )
        }
        export default RouterApp;