const Footer = () => {
  return (
    <footer
  className="
    bg-[#dff1ff]
    border-t border-blue-200
    py-8
    text-center
    text-gray-700
  "
>
  <div className="max-w-6xl mx-auto px-4">

    {/* Ícone opcional */}
    <div className="flex justify-center mb-3 opacity-80">
      <img
        src="/logo-ia.png"
        alt="IA Logo"
        className="w-10 h-10"
      />
    </div>

    {/* Texto */}
    <p className="text-sm md:text-base font-medium">
      © 2025 <span className="font-bold text-blue-600">IA no Trabalho</span> —  
      Transformando o futuro com inteligência artificial.
    </p>

  </div>
</footer>
  );
};

export default Footer;
