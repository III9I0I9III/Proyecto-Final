import { useState } from "react";

// Opciones con imágenes
const opciones = [
  { valor: "10", imagen: "/IMG-C/10.jpg" },
  { valor: "20", imagen: "/IMG-C/20.jpg" },
  { valor: "25", imagen: "/IMG-C/25.jpg" },
];

// Sonidos
const sonidoCorrecto = new Audio("/Sonidos-C/correcto.mp3");
const sonidoIncorrecto = new Audio("/Sonidos-C/incorrecto.mp3");

const EjercicioMatematica3 = ({ onPuntuar }) => {
  const [respuesta, setRespuesta] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [puntajeDado, setPuntajeDado] = useState(false);

  const verificarRespuesta = () => {
    if (respuesta === "20") {
      sonidoCorrecto.play();
      setMensaje("✅ ¡Correcto!");
      if (!puntajeDado) {
        onPuntuar(10);
        setPuntajeDado(true);
      }
    } else {
      sonidoIncorrecto.play();
      setMensaje("❌ Incorrecto. La respuesta correcta es: 20.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Ejercicio 3: Multiplicaciones</h2>
      <p>¿Cuánto es 4 × 5?</p>

      <div className="flex flex-wrap gap-6 justify-center mt-4">
        {opciones.map(({ valor, imagen }) => (
          <div
            key={valor}
            className={`cursor-pointer rounded border-4 p-1 ${
              respuesta === valor ? "border-blue-500" : "border-gray-300"
            }`}
            onClick={() => setRespuesta(valor)}
          >
            <img
              src={imagen}
              alt={`Opción ${valor}`}
              className="w-32 h-32 object-cover rounded"
            />
            <p className="text-center mt-2 font-semibold">{valor}</p>
          </div>
        ))}
      </div>

      <button
        onClick={verificarRespuesta}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded block mx-auto"
        disabled={!respuesta}
      >
        Verificar
      </button>

      {mensaje && <p className="mt-4 text-lg text-center">{mensaje}</p>}
    </div>
  );
};

export default EjercicioMatematica3;
