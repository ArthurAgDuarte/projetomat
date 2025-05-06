
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
        <Route path="/" element={<Home/>} />
        <Route path="/funcoes" element={<Funcoes/>} />
        <Route path="/relacoes" element={<Relacoes/>} />
        <Route path="/conjuntos" element={<Conjuntos/>} />
        <Route path="*" element={<NotFound/>} />
      
        
      </Routes>
    </>
  );
}
