import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Cadastrar from "./pages/Cadastrar";
import Cadastrado from "./pages/Cadastrado";
import Home from "./pages/Home";

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/access-account" replace />} />
    <Route path="/access-account" element={ <Login /> } />
    <Route path="/create-account" element={ <Cadastrar /> } />
    <Route path="/registered-account" element={ <Cadastrado /> } />
    <Route path="/home/:id" element={ <Home /> } />
  </Routes>
)

export default Rotas
