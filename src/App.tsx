import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import CadastroFuncionario from "./pages/CadastroFuncionario";
import SucessoFuncionario from "./pages/SucessoFuncionario";
import CadastroGerente from "./pages/CadastroGerente";
import SucessoGerente from "./pages/SucessoGerente";
import AtualizarSenha from "./pages/AtualizarSenha";
import SenhaAlterada from "./pages/SenhaAlterada";
import TelaInicialFuncionario from "./pages/TelaInicialFuncionario";
import CriarTarefa from "./pages/CriarTarefas";
import SucessoTarefa from "./pages/SucessoTarefa";
import FAQ from "./components/FAQ";
import Sobre from "./components/Sobre";

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
        <Route path="/atualizarSenha" element = {<AtualizarSenha/>}/>
        <Route path="/senhaAlterada" element = {<SenhaAlterada/>}/>
       <Route path="/TelaInicialFuncionario" element={<TelaInicialFuncionario />} />
       <Route path="/criar-tarefa" element={<CriarTarefa />} />
       <Route path="/sucesso-tarefa" element={<SucessoTarefa />} />
       <Route path="/faq" element={<FAQ />} />
       <Route path="/sobre" element={<Sobre />} />


      </Routes>
    </Router>
  );
}

export default App;
