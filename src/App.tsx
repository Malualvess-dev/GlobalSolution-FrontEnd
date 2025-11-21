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
import Contato from "./components/Contato";
import GerenciadorHumor from "./pages/GerenciadorHumor";
import SucessoHumor from "./pages/SucessoHumor";
import Integrantes from "./components/Integrantes";
import TelaGerente from "./pages/TelaInicialGerente";
import SuccessDepartamento from "./pages/SucessoDepartamento";
import ListarDepartamentos from "./pages/ListaDepartamentos";
import ListaTarefas from "./pages/ListaTarefas";
import ExcluirFuncionario from "./pages/ExcluirFuncionario";


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
       <Route path="/contato" element={<Contato />} />
       <Route path="/humor" element={<GerenciadorHumor />} />
       <Route path="/sucesso-humor" element={<SucessoHumor />} />
       <Route path="/integrantes" element={<Integrantes />} />
       <Route path="/TelaInicialGerente" element={<TelaGerente />} />
       <Route path="/sucesso-departamento" element={<SuccessDepartamento />} />
       <Route path="/lista-departamento" element={<ListarDepartamentos/>} />
       <Route path="/lista-tarefas" element={<ListaTarefas/>} />
       <Route path="/excluir-funcionario" element={<ExcluirFuncionario/>} />


      </Routes>
    </Router>
  );
}

export default App;
