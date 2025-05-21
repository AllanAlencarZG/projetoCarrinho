import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../pages/login"
import CriarLogin from "../pages/criarlogin"
import Produtos from "../pages/produtos";
import PrivateRoute from "./privateRoute";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/criarlogin" element={<CriarLogin/>}/>
                <Route path="/produtos" element={
                    <PrivateRoute>
                        <Produtos/>
                    </PrivateRoute>
                    }/>
            </Routes>
        </BrowserRouter>
    )
}