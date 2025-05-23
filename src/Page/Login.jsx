import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [menuAbierto, setMenuAbierto] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin(username, password)) {
      setError('');
    } else {
      setError('Usuario o contraseña inválidos');
    }
  };

  return (
    <div className="bg-gradient-animated min-h-screen relative flex items-center justify-center overflow-hidden">

      {/* Nubes animadas */}
      <div className="shape-cloud w-32 h-20 top-10 left-16 animate-float absolute" style={{ animationDelay: '0s' }} />
      <div className="shape-cloud w-40 h-24 top-28 left-48 animate-float absolute" style={{ animationDelay: '2s' }} />
      <div className="shape-cloud w-24 h-14 top-16 right-20 animate-float absolute" style={{ animationDelay: '4s' }} />

      {/* Estrellitas animadas */}
      <div className="shape-star top-6 left-24 absolute" style={{ animationDelay: '1s' }} />
      <div className="shape-star top-32 right-12 absolute" style={{ animationDelay: '3s' }} />
      <div className="shape-star top-40 left-48 absolute" style={{ animationDelay: '5s' }} />

      {/* Botón hamburguesa (solo si el menú está cerrado) */}
      {!menuAbierto && (
        <button
          onClick={() => setMenuAbierto(true)}
          className="fixed top-4 right-4 z-30 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
          aria-label="Abrir menú"
        >
          <Menu className="w-6 h-6 text-gray-800" />
        </button>
      )}

      {/* Menú lateral */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ${
          menuAbierto ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold text-gray-700">Menú</h3>
          <button onClick={() => setMenuAbierto(false)} aria-label="Cerrar menú">
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        <ul className="p-4 space-y-2 text-gray-700">
          <li>
            <a 
              href="https://www.udb.edu.sv/udb/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:bg-gray-100 p-2 rounded block"
              onClick={() => setMenuAbierto(false)}
            >
              UDB 
            </a>
          </li>
          <li>
            <a 
              href="https://www.udb.edu.sv/udb/pagina/nuevoingreso" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:bg-gray-100 p-2 rounded block"
              onClick={() => setMenuAbierto(false)}
            >
              Nuevo Ingreso
            </a>
          </li>
          <li>
            <a 
              href="https://www.google.com/maps/place/Don+Bosco+University/@13.715918,-89.1610737,13z/data=!4m6!3m5!1s0x8f63375d2edcba6f:0x5101ecc11020bce6!8m2!3d13.7159035!4d-89.1536987!16s%2Fg%2F1215vs5n?entry=ttu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:bg-gray-100 p-2 rounded block"
              onClick={() => setMenuAbierto(false)}
            >
              Ubicación 
            </a>
          </li>
          <li>
            <a 
              href="mailto:contacto@udb.edu.sv" 
              className="hover:bg-gray-100 p-2 rounded block"
              onClick={() => setMenuAbierto(false)}
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>

      {/* Fondo oscuro detrás del menú */}
      {menuAbierto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-20"
          onClick={() => setMenuAbierto(false)}
          aria-hidden="true"
        />
      )}

      {/* Formulario */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-white bg-opacity-90 p-10 rounded-3xl shadow-2xl backdrop-blur-md max-w-md w-full mx-4"
      >
        <h2 className="text-4xl font-extrabold mb-8 text-center text-blue-900 drop-shadow-md">
          Iniciar Sesión
        </h2>

        {error && (
          <p className="mb-6 text-red-600 text-sm text-center font-semibold">{error}</p>
        )}

        <label className="block mb-3 font-semibold text-gray-700">Usuario</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
          placeholder="Ingresa tu usuario"
          required
        />

        <label className="block mb-3 font-semibold text-gray-700">Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-8 focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
          placeholder="Ingresa tu contraseña"
          required
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 rounded-xl shadow-lg transition transform hover:scale-105"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
