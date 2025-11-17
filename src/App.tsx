import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import CadastroFuncionario from "./pages/CadastroFuncionario";
import SucessoFuncionario from "./pages/SucessoFuncionario";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro-funcionario" element={<CadastroFuncionario />} />
        <Route path="/sucesso" element={<SucessoFuncionario />} />
      </Routes>
    </Router>
  );
}

export default App;
