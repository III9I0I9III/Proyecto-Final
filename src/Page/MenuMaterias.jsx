import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState, useEffect } from 'react';

const materias = [
  { nombre: "Matemáticas", ruta: "/matematicas", icono: "🧮", color: "from-blue-500 to-blue-600", key: "matematicas" },
  { nombre: "Lenguaje", ruta: "/lenguaje", icono: "📚", color: "from-purple-500 to-purple-600", key: "lenguaje" },
  { nombre: "Ciencias", ruta: "/naturales", icono: "🔬", color: "from-green-500 to-green-600", key: "naturales" },
  { nombre: "Sociales", ruta: "/sociales", icono: "🌍", color: "from-amber-500 to-amber-600", key: "sociales" }
];

const sabiasQue = [
  {
    fecha: "",
    titulo: "¿Sabías que…?",
    texto: "Las abejas pueden reconocer rostros humanos.",
    imagen: "https://th.bing.com/th/id/OIP.60wIlLPitNUAyk2Ty4OufQHaHa?rs=1&pid=ImgDetMain"
  },
  {
    fecha: "",
    titulo: "¿Sabías que…?",
    texto: "Un rayo puede calentar el aire a 30,000 °C, más caliente que la superficie del Sol.",
    imagen: "https://imgmedia.larepublica.pe/1200x630/larepublica/original/2021/03/17/6052b31789009071f925ac9a.jpg"
  },
  {
    fecha: "",
    titulo: "¿Sabías que…?",
    texto: "Venus gira en sentido contrario a la mayoría de los planetas del sistema solar.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Venus_2_Approach_Image.jpg/500px-Venus_2_Approach_Image.jpg"
  }
];

const MenuMaterias = ({ onLogout }) => {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());
  const [noticiaIndex, setNoticiaIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const saludo = "Bienvenido al Área Digital";

  const cambiarNoticia = (nuevoIndex) => {
    setFade(false);
    setTimeout(() => {
      setNoticiaIndex(nuevoIndex);
      setFade(true);
    }, 300);
  };

  const prevNoticia = () => {
    const nuevoIndex = noticiaIndex === 0 ? sabiasQue.length - 1 : noticiaIndex - 1;
    cambiarNoticia(nuevoIndex);
  };

  const nextNoticia = () => {
    const nuevoIndex = noticiaIndex === sabiasQue.length - 1 ? 0 : noticiaIndex + 1;
    cambiarNoticia(nuevoIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextNoticia();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [noticiaIndex]);

  return (
    <div className="min-h-screen p-4 sm:p-6 flex flex-col fondo-login-similar">
      <header className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10 max-w-7xl mx-auto w-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-white text-center sm:text-left">{saludo}</h1>
        <button
          onClick={onLogout}
          className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition"
        >
          Cerrar sesión
        </button>
      </header>

      <main className="flex-grow max-w-7xl mx-auto w-full bg-white rounded-2xl shadow-xl p-4 sm:p-6 flex flex-col lg:flex-row gap-8">
        {/* MATERIAS */}
        <div className="flex-1">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center text-gray-700">
            Elige un curso para comenzar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {materias.map(({ nombre, ruta, icono, color, key }) => (
              <Link
                key={key}
                to={ruta}
                className="group bg-white rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center justify-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 mb-4 flex items-center justify-center rounded-full bg-gradient-to-r ${color} text-white text-4xl sm:text-5xl drop-shadow-lg`}
                >
                  {icono}
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">{nombre}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 text-center">Ver ejercicios y contenido</p>
                <button
                  className="px-4 sm:px-6 py-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-full shadow-md hover:from-orange-500 hover:to-orange-600 transition"
                  type="button"
                >
                  Entrar
                </button>
              </Link>
            ))}
          </div>
        </div>

        {/* LATERAL */}
        <div className="w-full lg:w-96 flex flex-col gap-6">
          {/* CALENDARIO */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 text-center">Calendario</h2>
            <Calendar
              onChange={setFechaSeleccionada}
              value={fechaSeleccionada}
              className="rounded-xl shadow-md p-2 w-full"
            />
            <p className="text-center mt-4 text-gray-600 text-sm sm:text-base">
              Fecha seleccionada: <strong>{fechaSeleccionada.toLocaleDateString()}</strong>
            </p>
          </div>

          {/* SABÍAS QUE */}
          <div
            className="relative bg-gray-100 rounded-2xl shadow-md p-4 sm:p-6 flex flex-col items-center text-center w-full"
            style={{ minHeight: "280px", transition: "opacity 0.3s ease" }}
            aria-live="polite"
          >
            <div className="absolute top-3 right-4 text-xs sm:text-sm text-gray-500 font-medium select-none">
              {sabiasQue[noticiaIndex].fecha}
            </div>

            <button
              onClick={prevNoticia}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-orange-400 hover:bg-orange-500 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shadow-md"
              aria-label="Noticia anterior"
            >
              &lt;
            </button>
            <button
              onClick={nextNoticia}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-orange-400 hover:bg-orange-500 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shadow-md"
              aria-label="Noticia siguiente"
            >
              &gt;
            </button>

            <div
              className={`flex flex-col items-center transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}
              style={{ maxWidth: "90%" }}
            >
              <img
                src={sabiasQue[noticiaIndex].imagen}
                alt={sabiasQue[noticiaIndex].titulo}
                className="w-48 sm:w-64 h-32 sm:h-40 object-cover rounded-xl mb-4 sm:mb-5 shadow-md"
                loading="lazy"
              />
              <h3 className="font-semibold text-lg sm:text-2xl text-gray-800 mb-1 sm:mb-2">{sabiasQue[noticiaIndex].titulo}</h3>
              <p className="text-gray-700 text-sm sm:text-lg">{sabiasQue[noticiaIndex].texto}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MenuMaterias;
