import { useState } from "react";

// Opciones con imágenes representativas de comunidades
const opcionesComunidades = [
  {
    valor: "Comunidad rural",
    imagen: "/IMG-C/rural.jpg",
  },
  {
    valor: "Comunidad escolar",
    imagen: "/IMG-C/escolar.jpg",
  },
  {
    valor: "Comunidad urbana",
    imagen: "/IMG-C/urbana.jpg",
  },
];

// Sonidos
const sonidoCorrecto = new Audio("/Sonidos-C/correcto.mp3");
const sonidoIncorrecto = new Audio("/Sonidos-C/incorrecto.mp3");

const EjercicioSociales3 = ({ onCompletado }) => {
  const [seleccion, setSeleccion] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [yaRespondidoCorrecto, setYaRespondidoCorrecto] = useState(false);

  const manejarVerificacion = () => {
    if (seleccion === "Comunidad urbana") {
      sonidoCorrecto.play();
      setMensaje("✅ ¡Correcto!");

      if (!yaRespondidoCorrecto) {
        onCompletado(1); // Suma 1 punto solo la primera vez
        setYaRespondidoCorrecto(true);
      }
    } else {
      sonidoIncorrecto.play();
      setMensaje("❌ Incorrecto. Es Comunidad urbana.");
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow mb-4">
      <h2 className="text-xl font-bold mb-2">Ejercicio 3: Comunidades</h2>
      <p className="text-lg">
        Una ciudad con muchos edificios y personas es una:
      </p>

      <div className="flex flex-wrap gap-6 justify-center mt-4">
        {opcionesComunidades.map(({ valor, imagen }) => (
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
        onClick={manejarVerificacion}
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

export default EjercicioSociales3;
