import { Link, useLocation, useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const doScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(doScroll, 200);
    } else {
      doScroll();
    }
  };

  return (
    <header
      className="
        relative w-full 
        backdrop-blur-xl 
        bg-white/20 dark:bg-black/20 
        border-b border-white/30 dark:border-gray-700
        shadow-lg transition
      "
    >
      {/* Fundo com tech-lines */}
      <div className="absolute inset-0 bg-[url('/tech-lines.png')] bg-cover opacity-20 pointer-events-none"></div>

      {/* Linha neon animada */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] 
                      bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 
                      animate-neonLine" />

      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
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

          <span className="text-xl font-semibold text-gray-800 dark:text-gray-100 transition">
            IA no Trabalho
          </span>
        </Link>

        {/* Menu */}
        <nav className="flex items-center gap-8">

          <button
            type="button"
            onClick={() => scrollToSection("beneficios")}
            className="
              text-gray-700 dark:text-gray-200 
              hover:text-blue-500 
              font-medium transition relative
              before:absolute before:-bottom-1 before:left-0 
              before:h-[2px] before:w-0 
              before:bg-blue-500 before:transition-all before:duration-300 
              hover:before:w-full
            "
          >
            Benefícios
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("casos-uso")}
            className="
              text-gray-700 dark:text-gray-200 
              hover:text-blue-500 
              font-medium transition relative
              before:absolute before:-bottom-1 before:left-0 
              before:h-[2px] before:w-0 
              before:bg-blue-500 before:transition-all before:duration-300 
              hover:before:w-full
            "
          >
            Recursos
          </button>
        </nav>

        {/* Login + Cadastro + Tema */}
        <div className="flex items-center gap-4">

          {/* Login */}
          <Link
            to="/login"
            className="
              px-6 py-2 rounded-lg border border-gray-300 dark:border-gray-600
              bg-white dark:bg-gray-800
              text-gray-700 dark:text-gray-200
              hover:bg-gray-100 dark:hover:bg-gray-700
              transition-all duration-300 
              shadow-sm hover:shadow-md
            "
          >
            Login
          </Link>

          {/* Cadastro */}
          <Link
            to="/cadastro"
            className="
              px-5 py-2 rounded-lg 
              bg-gradient-to-r from-blue-500 to-indigo-600 
              text-white font-semibold 
              shadow-lg
              hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] hover:scale-[1.03]
              transition-all duration-300
            "
          >
            Cadastro
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
