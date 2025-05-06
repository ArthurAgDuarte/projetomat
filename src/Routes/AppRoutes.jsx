
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home.jsx";
import Funcoes from "../Pages/Funcoes";
import Relacoes from "../Pages/Relacoes";
import NotFound from "../Pages/NotFound";
import Conjuntos from "../Pages/Conjuntos";


export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/projetomat/" element={<Home/>} />
        <Route path="/projetomat/funcoes" element={<Funcoes/>} />
        <Route path="/projetomat/relacoes" element={<Relacoes/>} />
        <Route path="/projetomat/conjuntos" element={<Conjuntos/>} />
        <Route path="*" element={<NotFound/>} />
      
        
      </Routes>
    </>
  );
}
