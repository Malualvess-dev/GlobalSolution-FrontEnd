import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import CadastroFuncionario from "./pages/CadastroFuncionario";
import SucessoFuncionario from "./pages/SucessoFuncionario";
import CadastroGerente from "./pages/CadastroGerente";
import SucessoGerente from "./pages/SucessoGerente";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro-funcionario" element={<CadastroFuncionario />} />
        <Route path="/sucesso-funcionario" element={<SucessoFuncionario />} />
        <Route path="/cadastro-gerente" element = {<CadastroGerente/>}/>
        <Route path="/sucesso-gerente" element = {<SucessoGerente/>}/>
      </Routes>
    </Router>
  );
}

export default App;
