import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './paginas/home'
import Login from './paginas/login'
import Cadastro from './paginas/cadastro'
import Adm from './paginas/adm'
import Historico from './paginas/historico'
import Carrinho from './paginas/carrinho'
function AppRoutes() {
    return(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={ <PaginaBase /> }>
    <Route index element={ <Home /> }></Route>
    <Route path="/registrar" element = {<Cadastro />}></Route>
    <Route path="/logar" element = {<Login />}></Route>
    <Route path="/adm" element = {<Adm />}></Route>
    <Route path="/historico" element = {<Historico />}></Route>
    <Route path="/carrinho" element = {<Carrinho />}></Route>
    </Route>
    </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes