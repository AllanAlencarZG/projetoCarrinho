import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../pages/login";
import CriarLogin from "../pages/criarlogin";
import Produtos from "../pages/produtos";
import PrivateRoute from "./privateRoute";
import CriarProduto from "../pages/criarProduto";
import GerenciarProdutos from "../pages/gerenciarProdutos";
import LerProdutos from "../pages/lerProdutos";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/criarlogin" element={<CriarLogin/>}/>
                <Route path="/produtos" element={
                    <PrivateRoute>
                        <Produtos />
                    </PrivateRoute>
                } />
                <Route path="/criarproduto" element={<CriarProduto/>}/>
                <Route path="/gerenciarprodutos" element={<GerenciarProdutos/>}/>
                <Route path="/lerprodutos" element={<LerProdutos/>}/>
            </Routes>
        </BrowserRouter>
    );
}