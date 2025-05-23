import { useState } from "react";

// Opciones con imágenes representativas
const opcionesPresidentes = [
  {
    valor: "Manuel José Arce",
    imagen: "/IMG-C/arce.jpg",
  },
  {
    valor: "Gerardo Barrios",
    imagen: "/IMG-C/barrios.jpg",
  },
  {
    valor: "Juan Lindo",
    imagen: "/IMG-C/lindo.jpg",
  },
];

// Sonidos
const sonidoCorrecto = new Audio("/Sonidos-C/correcto.mp3");
const sonidoIncorrecto = new Audio("/Sonidos-C/incorrecto.mp3");

const EjercicioSociales4 = ({ onCompletado }) => {
  const [seleccion, setSeleccion] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [yaRespondidoCorrecto, setYaRespondidoCorrecto] = useState(false);

  const verificarRespuesta = () => {
    if (seleccion === "Juan Lindo") {
      sonidoCorrecto.play();
      setMensaje("✅ ¡Correcto!");

      if (!yaRespondidoCorrecto) {
        onCompletado(1); // Suma solo una vez
        setYaRespondidoCorrecto(true);
      }
    } else {
      sonidoIncorrecto.play();
      setMensaje("❌ Incorrecto. El primer presidente fue Juan Lindo.");
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow mb-4">
      <h2 className="text-xl font-bold mb-2">
        Ejercicio 4: Historia de El Salvador
      </h2>
      <p className="text-lg">¿Quién fue el primer presidente de El Salvador?</p>

      <div className="flex flex-wrap gap-6 justify-center mt-4">
        {opcionesPresidentes.map(({ valor, imagen }) => (
          <div
            key={valor}
            className={`cursor-pointer rounded border-4 p-1 transition duration-200 ${
              seleccion === valor ? "border-blue-600" : "border-gray-300"
            }`}
            onClick={() => setSeleccion(valor)}
          >
            <img
              src={imagen}
              alt={`Imagen de ${valor}`}
              className="w-40 h-40 object-cover rounded"
            />
            <p className="text-center mt-2 font-semibold">{valor}</p>
          </div>
        ))}
      </div>

      <button
        onClick={verificarRespuesta}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded block mx-auto disabled:bg-gray-400"
        disabled={!seleccion}
      >
        Verificar
      </button>

      {mensaje && (
        <p className="mt-4 text-lg text-center font-medium">{mensaje}</p>
      )}
    </div>
  );
};

export default EjercicioSociales4;
