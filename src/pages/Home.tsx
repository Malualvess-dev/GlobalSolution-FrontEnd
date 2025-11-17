import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const exec = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(exec, 200);
    } else {
      exec();
    }
  };

  return (
    <div className="bg-white text-gray-900">

      {/* ======================== HEADER ======================== */}
      <header className="relative w-full bg-white shadow-sm border-b border-gray-200">

        {/* FUNDO DE LINHAS TECH */}
        <div
          className="
            absolute inset-0 
            bg-[url('/tech-lines.png')] 
            bg-cover
            opacity-20
            pointer-events-none
          "
        ></div>

        {/* LINHA NEON */}
        <div
          className="
            absolute bottom-0 left-0 w-full h-[3px]
            bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400
            animate-neonLine
          "
        />

        <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo-ia.png"
              alt="IA Logo"
              className="
                w-12 h-12
                drop-shadow-[0_0_10px_rgba(0,122,255,0.7)]
                group-hover:scale-110 
                group-hover:drop-shadow-[0_0_15px_rgba(0,122,255,1)]
                transition-all
              "
            />
            <span className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
              IA no Trabalho
            </span>
          </Link>

          {/* MENU */}
          <nav className="flex items-center gap-8">
            <button
              type="button"
              onClick={() => scrollToSection("beneficios")}
              className="text-gray-700 hover:text-blue-500 font-medium transition relative
                before:absolute before:-bottom-1 before:left-0 before:h-[2px]
                before:w-0 before:bg-blue-500 before:transition-all before:duration-300
                hover:before:w-full"
            >
              Benefícios
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("casos-uso")}
              className="text-gray-700 hover:text-blue-500 font-medium transition relative
                before:absolute before:-bottom-1 before:left-0 before:h-[2px]
                before:w-0 before:bg-blue-500 before:transition-all before:duration-300
                hover:before:w-full"
            >
              Recursos
            </button>
          </nav>

          {/* LOGIN / CADASTRO */}
          <div className="flex items-center gap-4">

            <Link
              to="/login"
              className="
                px-6 py-2 rounded-lg border border-gray-300 bg-white text-gray-700
                font-medium hover:bg-gray-100 hover:border-gray-400 shadow-sm hover:shadow-md
                transition-all duration-300
              "
            >
              Login
            </Link>

            <Link
              to="/cadastro-funcionario"
              className="
                px-5 py-2 rounded-lg 
                bg-gradient-to-r from-blue-500 to-indigo-600
                text-white font-semibold shadow-lg
                hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] hover:scale-[1.03]
                transition-all duration-300
              "
            >
              Cadastro
            </Link>
          </div>

        </div>
      </header>

      {/* ======================== HERO ======================== */}
      <section className="relative w-full min-h-[650px] overflow-hidden flex items-center bg-[#e6f5ff]">

        {/* Fundo */}
        <div className="absolute inset-0 bg-[url('/tech-lines.png')] bg-cover opacity-100"></div>

        {/* Robô */}
        <img
          src="/banner-ia.png"
          alt="Robô IA"
          className="absolute right-8 bottom-0 w-[650px] max-w-none select-none pointer-events-none z-10"
        />

        {/* Conteúdo */}
        <div className="relative z-20 max-w-3xl px-8 ml-10">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white shadow mb-8
              relative overflow-hidden text-blue-600 font-semibold">
            ✨ Revolucione seu trabalho com IA
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-gray-900 mb-6">
            Como a <span className="text-blue-600">Inteligência Artificial</span> pode transformar seu trabalho
          </h1>

          <p className="text-gray-700 text-lg max-w-xl mb-10">
            Descubra como a IA automatiza tarefas repetitivas, aumenta sua produtividade e libera seu tempo.
          </p>

          <div className="flex gap-4 mt-4">
            <Link
              to="/cadastro-funcionario"
              className="px-8 py-3 rounded-lg text-white font-semibold
                bg-gradient-to-r from-blue-500 to-indigo-600
                hover:from-blue-600 hover:to-indigo-700
                shadow-md hover:shadow-xl transition-all duration-300"
            >
              Começar Agora
            </Link>

            <a
              href="#beneficios"
              className="px-8 py-3 rounded-lg font-medium border border-gray-400 text-gray-700
                hover:bg-gray-100 hover:border-gray-500 transition-all duration-300"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </section>

      {/* ======================== HIGHLIGHTS ======================== */}
      <section className="bg-[#e6f5ff] py-16">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3 px-6">

          {[
            { icon: "⚡", title: "10x mais rápido", desc: "Automatize tarefas em segundos" },
            { icon: "📈", title: "Aumento de 40%", desc: "Em produtividade média" },
            { icon: "✨", title: "Foco no essencial", desc: "Mais tempo para criatividade" },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl shadow p-10 text-center border border-gray-200
                hover:scale-[1.03] hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-xl text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ======================== BENEFÍCIOS ======================== */}
      <section id="beneficios" className="bg-[#e6f5ff] py-20">
        
        <div className="max-w-6xl mx-auto px-6 text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900">Benefícios da IA no Trabalho</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Veja como a IA melhora sua rotina profissional.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

          {[
            { icon: "🧠", title: "Automação Inteligente", desc: "A IA aprende com seus padrões e automatiza tarefas repetitivas." },
            { icon: "⏱️", title: "Economia de Tempo", desc: "Reduza horas de trabalho manual com automação inteligente." },
            { icon: "🎯", title: "Precisão e Qualidade", desc: "Menos erros humanos e mais consistência nos resultados." },
            { icon: "🛡️", title: "Segurança de Dados", desc: "Proteção moderna com criptografia avançada." },
            { icon: "🚀", title: "Escalabilidade", desc: "Cresça sem limites com sistemas adaptáveis." },
            { icon: "👥", title: "Colaboração Aprimorada", desc: "Melhora comunicação e sincronização entre equipes." },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl shadow p-8 hover:shadow-xl hover:-translate-y-1
                transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}

        </div>

      </section>

      {/* ======================== CASOS DE USO ======================== */}
      <section id="casos-uso" className="bg-[#e6f5ff] py-16">
        <div className="max-w-6xl mx-auto px-4">

          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Casos de Uso <span className="text-blue-600">Práticos</span>
            </h2>
            <p className="text-gray-600 text-sm max-w-xl mx-auto">
              Veja como a IA está sendo aplicada em áreas profissionais.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            {/* CARD 1 */}
            <div className="bg-white rounded-xl shadow p-6 hover:-translate-y-2 hover:scale-[1.04] hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-3">📄</div>
              <h3 className="font-semibold text-xl">Geração de Conteúdo</h3>
              <p className="text-gray-600 text-sm mt-2 mb-4">
                Crie documentos, relatórios e apresentações automaticamente.
              </p>
              <div className="flex gap-2 flex-wrap text-xs text-blue-700">
                <span className="px-3 py-1 bg-blue-100 rounded-full">Relatórios</span>
                <span className="px-3 py-1 bg-blue-100 rounded-full">E-mails</span>
                <span className="px-3 py-1 bg-blue-100 rounded-full">Propostas</span>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-xl shadow p-6 hover:-translate-y-2 hover:scale-[1.04] hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-3">💬</div>
              <h3 className="font-semibold text-xl">Atendimento ao Cliente</h3>
              <p className="text-gray-600 text-sm mt-2 mb-4">
                Chatbots inteligentes respondem dúvidas 24h por dia.
              </p>
              <div className="flex gap-2 flex-wrap text-xs text-blue-700">
                <span className="px-3 py-1 bg-blue-100 rounded-full">Suporte</span>
                <span className="px-3 py-1 bg-blue-100 rounded-full">FAQ</span>
                <span className="px-3 py-1 bg-blue-100 rounded-full">Agendamentos</span>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-xl shadow p-6 hover:-translate-y-2 hover:scale-[1.04] hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="font-semibold text-xl">Análise de Dados</h3>
              <p className="text-gray-600 text-sm mt-2 mb-4">
                Gere insights valiosos com IA e dashboards automatizados.
              </p>
              <div className="flex gap-2 flex-wrap text-xs text-blue-700">
                <span className="px-3 py-1 bg-blue-100 rounded-full">Tendências</span>
                <span className="px-3 py-1 bg-blue-100 rounded-full">Previsões</span>
                <span className="px-3 py-1 bg-blue-100 rounded-full">Dashboards</span>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="bg-white rounded-xl shadow p-6 hover:-translate-y-2 hover:scale-[1.04] hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-3">✉️</div>
              <h3 className="font-semibold text-xl">Automação de Marketing</h3>
              <p className="text-gray-600 text-sm mt-2 mb-4">
                Campanhas personalizadas com IA.
              </p>
              <div className="flex gap-2 flex-wrap text-xs text-blue-700">
                <span className="px-3 py-1 bg-blue-100 rounded-full">Segmentação</span>
                <span className="px-3 py-1 bg-blue-100 rounded-full">E-mails</span>
                <span className="px-3 py-1 bg-blue-100 rounded-full">Automação</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================== FOOTER ======================== */}
      <Footer />
    </div>
  );
};

export default Home;
