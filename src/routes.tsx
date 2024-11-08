import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/access-account" replace />} />
    <Route path="/access-account" element={ <Login /> } />
    <Route path="/create-account" element={ <Cadastro /> } />
  </Routes>
)

export default Rotas
