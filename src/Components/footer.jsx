const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Plataforma Educativa Digital</h3>
            <p className="text-gray-400">Aprendizaje interactivo y personalizado</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-primary-400 transition">Términos de Servicio</a>
            <a href="#" className="hover:text-primary-400 transition">Política de Privacidad</a>
            <a href="#" className="hover:text-primary-400 transition"></a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Plataforma Educativa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;