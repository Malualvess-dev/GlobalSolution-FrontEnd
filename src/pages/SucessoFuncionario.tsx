const SucessoFuncionario = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#e6f5ff] text-center px-6">

      {/* Ícone */}
      <img
        src="/logo-ia.png"
        alt="Sucesso"
        className="w-28 mb-6 drop-shadow-lg"
      />

      {/* Título */}
      <h1 className="text-4xl font-extrabold text-blue-700 mb-3">
        🎉 Sucesso — Funcionário cadastrado!
      </h1>

      {/* Mensagem */}
      <p className="text-gray-700 text-lg max-w-xl mb-8">
        O funcionário foi registrado no sistema com sucesso.  
        Agora ele pode acessar a plataforma normalmente.
      </p>

      {/* Botões de navegação */}
      <div className="flex gap-4">

        <a
          href="/cadastro-funcionario"
          className="
            px-6 py-3 rounded-xl 
            bg-gradient-to-r from-blue-500 to-indigo-600 
            text-white font-semibold 
            shadow-md hover:shadow-xl 
            hover:scale-105 transition-all
          "
        >
          Cadastrar outro funcionário
        </a>

        <a
          href="/"
          className="
            px-6 py-3 rounded-xl 
            border border-gray-400 text-gray-700 
            hover:bg-gray-100 
            transition-all
          "
        >
          Voltar ao início
        </a>

      </div>
    </div>
  );
};

export default SucessoFuncionario;
