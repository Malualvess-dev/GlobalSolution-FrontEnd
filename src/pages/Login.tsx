import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();

  const [tipo, setTipo] = useState("funcionario");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [lembrar, setLembrar] = useState(false);

  // Carrega CPF salvo no navegador
  useEffect(() => {
    const salvo = localStorage.getItem("cpfLembrado");
    if (salvo) {
      setCpf(salvo);
      setLembrar(true);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const rota =
      tipo === "funcionario"
        ? "http://localhost:8080/Funcionarios/loginFuncionario"
        : "http://localhost:8080/Gerentes/loginGerente";

    try {
      const response = await fetch(rota, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cpf, senha }),
      });

      if (!response.ok) {
        alert("CPF ou senha incorretos!");
        return;
      }

      // Salvar ou remover CPF
      if (lembrar) {
        localStorage.setItem("cpfLembrado", cpf);
      } else {
        localStorage.removeItem("cpfLembrado");
      }

      if (tipo === "funcionario") {
        navigate("/TelaInicialFuncionario");
      } else {
        navigate("/TelaInicialGerente");
      }
    } catch (error) {
      alert("Erro ao conectar ao servidor.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e6f5ff] relative">

      {/* FUNDO DE LINHAS TECH */}
        <div
          className="
            absolute inset-0 
            bg-[url('/tech-lines.png')] 
            bg-cover
            opacity-100
            pointer-events-none
          "
        ></div>

      <div className="relative bg-white p-10 rounded-3xl shadow-xl w-[540px] z-10">

        {/* Ícone */}
        <div className="flex justify-center mb-4">
          <img src="/iconeSegurança.png" alt="Icone Login" className="w-16" />
        </div>

        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-3">
          Login
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Escolha seu tipo de acesso e entre com seus dados.
        </p>

        <form onSubmit={handleLogin}>

         {/* HOME / VOLTAR */}
        <div className="absolute left-6 top-6">
            <Link
            to="/"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
                >
        <img src="/iconeCasinha.png" alt="Home" className="w-6 h-6" />
        <span className="font-medium text-sm">Voltar</span>
            </Link>
        </div>    
          
          {/* Seleção*/}
          <label className="font-medium text-gray-700">Entrar como:</label>
          <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className="w-full mt-1 mb-6 p-3 rounded-lg border border-gray-300 bg-gray-50"
          >
            <option value="funcionario">Funcionário</option>
            <option value="gerente">Gerente</option>
          </select>

          {/* CPF + Senha */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-medium text-gray-700">CPF</label>
              <input
                type="text"
                placeholder="000.000.000-00"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                className="w-full mt-1 p-3 rounded-lg border border-gray-300 bg-gray-50"
                required
              />
            </div>

            <div>
              <label className="font-medium text-gray-700">Senha</label>
              <input
                type="password"
                placeholder="********"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full mt-1 p-3 rounded-lg border border-gray-300 bg-gray-50"
                required
              />
            </div>
          </div>

          {/* Lembrar-me + Esqueci senha */}
          <div className="flex justify-between items-center mt-4">

            <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                checked={lembrar}
                onChange={() => setLembrar(!lembrar)}
                className="w-4 h-4"
              />
              Lembrar-me
            </label>

             <button
                type="button"
                onClick={() => navigate("/atualizarSenha")}
                className="
                text-blue-600 font-medium hover:text-blue-800
                transition-all duration-300 hover:underline
                "
                >
                Esqueci minha senha →
                </button>

          </div>

          {/* Botão neon */}
          <button
            type="submit"
            className="
              w-full mt-8 py-3 text-white text-lg font-semibold rounded-lg
              bg-gradient-to-r from-blue-500 to-indigo-600
              shadow-[0_0_10px_rgba(59,130,246,0.7)]
              hover:shadow-[0_0_20px_rgba(59,130,246,1)]
              hover:scale-[1.03]
              transition-all duration-300
              animate-pulse
            "
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
