import { useState } from "react";

// Opciones con imagen y respuesta
const opcionesContinentes = [
  {
    valor: "5",
    imagen: "/IMG-C/5continentes.jpg",
  },
  {
    valor: "6",
    imagen: "/IMG-C/6continentes.jpg",
  },
  {
    valor: "7",
    imagen: "/IMG-C/7continentes.jpg",
  },
];

// Sonidos
const sonidoCorrecto = new Audio("/Sonidos-C/correcto.mp3");
const sonidoIncorrecto = new Audio("/Sonidos-C/incorrecto.mp3");

const EjercicioSociales2 = () => {
  const [seleccion, setSeleccion] = useState("");
  const [mensaje, setMensaje] = useState("");

  const manejarVerificacion = () => {
    if (seleccion === "7") {
      sonidoCorrecto.play();
      setMensaje("✅ ¡Correcto!");
    } else {
      sonidoIncorrecto.play();
      setMensaje("❌ Incorrecto. Hay 7 continentes.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Ejercicio 2: Continentes</h2>
      <p className="text-lg">¿Cuántos continentes hay en el mundo?</p>

      <div className="flex flex-wrap gap-6 justify-center mt-4">
        {opcionesContinentes.map(({ valor, imagen }) => (
          <div
            key={valor}
            className={`cursor-pointer rounded border-4 p-1 transition duration-200 ${
              seleccion === valor ? "border-blue-600" : "border-gray-300"
            }`}
            onClick={() => setSeleccion(valor)}
          >
            <img
              src={imagen}
              alt={`Opción ${valor}`}
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

export default EjercicioSociales2;
