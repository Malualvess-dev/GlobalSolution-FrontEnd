import { useNavigate } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Integrantes() {
  const navigate = useNavigate();

  const membros = [
    {
      nome: "Liana Lyumi Morisita Fujisima",
      rm: "565698",
      cursos: [
        "ARTIFICIAL INTELLIGENCE & CHATBOT",
        "COMPUTATIONAL THINKING USING PYTHON"
      ],
      sala: "1TDSPI",
      img: "/fotoLiana.jpg",
      linkedin: "https://www.linkedin.com/in/liana-lyumi-morisita-fujisima-22368a367/",
      github: "https://github.com/lianafujisima"
    },
    {
      nome: "Maria Luiza Alves De Aquino",
      rm: "561802",
      cursos: [
        "DOMAIN DRIVEN DESIGN USING JAVA",
        "FRONT-END DESIGN ENGINEERING"
      ],
      sala: "1TDSPI",
      img: "/fotoMalu.jpg",
      linkedin: "https://www.linkedin.com/in/maluaquino/",
      github: "https://github.com/Malualvess-dev"
    },
    {
      nome: "Victor William Hwan Cho",
      rm: "565382",
      cursos: [
        "SOFTWARE ENGINEERING AND BUSINESS MODEL",
        "BUILDING RELATIONAL DATABASE"
      ],
      sala: "1TDSPI",
      img: "/fotoVitor.jpg",
      linkedin: "https://www.linkedin.com/in/victor-cho-91a508367?trk=contact-info",
      github: "https://github.com/Victorcho05"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex flex-col items-center relative">

      {/* Fundo Tech */}
      <div className="absolute inset-0 bg-[url('/tech-lines.png')] bg-cover opacity-100 pointer-events-none"></div>

     

      {/* Título */}
      <h1 className="text-5xl font-extrabold text-blue-800 mt-20 mb-3 tracking-tight z-10">
        Nossa Equipe
      </h1>
      
 {/* Botão Voltar */}
      <div className="absolute top-6 left-6 z-20">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-900 transition"
        >
          <img src="/voltar.jpeg" className="w-5" />
          Voltar
        </button>
      </div>
      <p className="text-gray-700 text-lg mb-16 max-w-2xl text-center z-10">
        Conheça os integrantes responsáveis pelo desenvolvimento e criação completa do sistema.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 z-10 pb-24 px-10">

        {membros.map((pessoa) => (
          <div
            key={pessoa.rm}
            className="
              bg-white/70 backdrop-blur-xl 
              border border-gray-200 
              shadow-[0_8px_30px_rgba(0,0,0,0.12)]
              rounded-[36px] px-10 py-12 
              flex flex-col items-center text-center
              w-[380px] h-[560px]
              transform transition-all duration-300
              hover:scale-[1.03] hover:shadow-[0_15px_40px_rgba(0,0,0,0.18)]
              hover:border-blue-400
            "
          >
            {/* Foto */}
            <div className="
              w-40 h-40 rounded-full overflow-hidden mb-6
              ring-4 ring-blue-300 shadow-lg hover:shadow-blue-400/60 transition
            ">
              <img
                src={pessoa.img}
                alt="Foto do integrante"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Nome */}
            <h2 className="text-2xl font-bold text-blue-800 leading-tight mb-1">
              {pessoa.nome}
            </h2>

            {/* RM */}
            <p className="text-gray-600 font-medium">
              RM: {pessoa.rm}
            </p>

            {/* SALA */}
            <p className="text-gray-600 font-medium mb-4">
              Sala: {pessoa.sala}
            </p>

            {/* Cursos */}
            <ul className="text-gray-700 font-semibold text-sm space-y-1 uppercase tracking-wide mb-5">
              {pessoa.cursos.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>

            {/* Redes Sociais */}
            <div className="flex gap-6 mt-4">
              <a
                href={pessoa.linkedin}
                target="_blank"
                className="text-blue-700 hover:text-blue-900 transition text-3xl"
              >
                <FaLinkedin />
              </a>

              <a
                href={pessoa.github}
                target="_blank"
                className="text-gray-800 hover:text-black transition text-3xl"
              >
                <FaGithub />
              </a>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}
