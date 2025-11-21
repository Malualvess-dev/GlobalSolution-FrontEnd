import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Funcionario {
  id_funcionario: number;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  departamento: string;
  dt_nascimento: string;
  id_gerente: number;
  id_departamento: number;
}

export default function TelaInicialGerente() {
  const navigate = useNavigate();

  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
  const [novoDept, setNovoDept] = useState("");
  const [idGerenteInput, setIdGerenteInput] = useState("");

  const [open, setOpen] = useState(false);

  // Box criação departamento
  const [boxDeptOpen, setBoxDeptOpen] = useState(false);

  // ------------------- GET FUNCIONÁRIOS -------------------
  async function carregarFuncionarios() {
    try {
      const resp = await fetch("http://localhost:8080/Funcionarios");
      const data = await resp.json();
      setFuncionarios(data);
    } catch (error) {
      console.log("Erro ao carregar funcionários:", error);
    }
  }

  useEffect(() => {
    carregarFuncionarios();
  }, []);

  // ------------------- CRIAR DEPARTAMENTO -------------------
  async function criarDepartamento(e: React.FormEvent) {
    e.preventDefault();

    if (!novoDept.trim() || !idGerenteInput.trim()) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      const resp = await fetch("http://localhost:8080/Departamentos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome_departamento: novoDept,
          id_gerente: Number(idGerenteInput),
        }),
      });

      if (resp.ok) {
        navigate("/sucesso-departamento")
        setNovoDept("");
        setIdGerenteInput("");
        setBoxDeptOpen(false);
      } else {
        alert("Erro ao criar departamento");
      }
    } catch (error) {
      alert("Erro ao criar departamento!");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 text-gray-900 relative">

      {/* Fundo Tech */}
      <div className="absolute inset-0 bg-[url('/tech-lines.png')] bg-cover opacity-20 pointer-events-none"></div>

      {/* Botão Menu */}
      <button
        onClick={() => setOpen(!open)}
        className="absolute top-6 left-6 z-30 p-3 rounded-xl bg-white shadow border hover:scale-105 transition"
      >
        <img src="/menu.jpeg" alt="menu" className="w-6" />
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-72
          bg-white/80 backdrop-blur-xl border-r border-gray-300
          p-10 flex flex-col gap-8 shadow-xl z-20
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <h1 className="text-3xl font-extrabold text-center text-blue-700">Menu</h1>

        <nav className="flex flex-col gap-5 text-gray-700 font-semibold text-lg">
          <button onClick={() => navigate("/tela-inicial-gerente")} className="hover:text-blue-600 transition">Início</button>
          <button onClick={() => navigate("/gerenciar-humor")} className="hover:text-blue-600 transition">Gerenciador Humor</button>
          <button onClick={() => navigate("/faq")} className="hover:text-blue-600 transition">FAQ</button>
          <button onClick={() => navigate("/integrantes")} className="hover:text-blue-600 transition">Integrantes</button>
          <button onClick={() => navigate("/sobre")} className="hover:text-blue-600 transition">Sobre</button>
          <button onClick={() => navigate("/contato")} className="hover:text-blue-600 transition">Contato</button>
          <button onClick={() => navigate("/login")} className="hover:text-red-600 transition">Logout</button>
          <button onClick={() => navigate("/lista-departamento")} className="hover:text-red-600 transition">Lista departamentos</button>
        </nav>
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 p-14 relative z-10">

        <h2 className="text-center text-5xl font-extrabold text-blue-800 mb-16 tracking-wide drop-shadow-sm">
          Painel do Gerente
        </h2>

        {/* TÍTULO + BOTÃO VERDE */}
        <div className="flex justify-between items-center max-w-5xl mx-auto mb-10 px-4">
          <h3 className="text-4xl font-bold text-blue-700">Funcionários Cadastrados</h3>

          <button
            onClick={() => setBoxDeptOpen(true)}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow hover:scale-105 transition"
          >
            ➕ Criar Departamento
          </button>
        </div>

        {/* LISTA DE FUNCIONÁRIOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-5 max-w-6xl mx-auto">
          {funcionarios.map((f) => (
            <div
              key={f.id_funcionario}
              className="p-10 bg-white rounded-3xl shadow-lg border hover:shadow-2xl transition-all duration-200"
            >
              <h3 className="text-3xl font-bold text-blue-700 mb-6">
                {f.nome}
              </h3>

              <p><b>CPF:</b> {f.cpf}</p>
              <p><b>Email:</b> {f.email}</p>
              <p><b>Telefone:</b> {f.telefone}</p>
              <p><b>Departamento:</b> {f.departamento}</p>
              <p><b>Nascimento:</b> {f.dt_nascimento}</p>
              <p><b>ID Gerente:</b> {f.id_gerente}</p>
              <p><b>ID Departamento:</b> {f.id_departamento}</p>

            
            </div>
          ))}
        </div>

      </main>

      {/* BOX DE CRIAÇÃO DE DEPARTAMENTO */}
      {boxDeptOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

          <div className="bg-white/90 backdrop-blur-xl p-8 rounded-2xl shadow-2xl w-[380px] border border-gray-200">

            <h2 className="text-2xl font-bold text-blue-700 text-center mb-4">
              Criar Departamento
            </h2>

            <form onSubmit={criarDepartamento} className="space-y-4">

              <input
                type="text"
                placeholder="Nome do departamento"
                value={novoDept}
                onChange={(e) => setNovoDept(e.target.value)}
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-300 outline-none"
              />

              <input
                type="number"
                placeholder="ID do gerente"
                value={idGerenteInput}
                onChange={(e) => setIdGerenteInput(e.target.value)}
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-300 outline-none"
              />

              <div className="flex justify-between pt-3">
                <button
                  type="button"
                  onClick={() => setBoxDeptOpen(false)}
                  className="px-5 py-2 bg-gray-300 text-gray-800 rounded-xl hover:bg-gray-400 transition"
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  className="px-5 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
                >
                  Criar
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}
