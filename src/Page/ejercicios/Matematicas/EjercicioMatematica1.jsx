import { useState } from "react";

// Opciones con imágenes
const opciones = [
  { valor: "6", imagen: "/IMG-C/6.jpg" },
  { valor: "9", imagen: "/IMG-C/9.jpg" },
  { valor: "8", imagen: "/IMG-C/8.jpg" },
];

// Sonidos
const sonidoCorrecto = new Audio("/Sonidos-C/correcto.mp3");
const sonidoIncorrecto = new Audio("/Sonidos-C/incorrecto.mp3");

const EjercicioMatematica1 = ({ onPuntuar }) => {
  const [respuesta, setRespuesta] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [verificado, setVerificado] = useState(false); // evitar múltiples verificaciones

  const verificarRespuesta = () => {
    if (verificado) return; // evita múltiples verificaciones

    const esCorrecta = respuesta === "9";

    if (esCorrecta) {
      sonidoCorrecto.play();
      setMensaje("✅ ¡Correcto!");
      onPuntuar(10, true); // puntos, correcto
    } else {
      sonidoIncorrecto.play();
      setMensaje("❌ Incorrecto. La respuesta correcta es: 9.");
      onPuntuar(0, false); // sin puntos, incorrecto
    }

    setVerificado(true);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Ejercicio 1: Sumas</h2>
      <p>¿Cuánto es 4 + 5?</p>

      <div className="flex flex-wrap gap-6 justify-center mt-4">
        {opciones.map(({ valor, imagen }) => (
          <div
            key={valor}
            className={`cursor-pointer rounded border-4 p-1 transition ${
              respuesta === valor ? "border-blue-500" : "border-gray-300"
            } ${verificado ? "pointer-events-none opacity-60" : ""}`}
            onClick={() => {
              if (!verificado) setRespuesta(valor);
            }}
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
        disabled={!respuesta || verificado}
      >
        Verificar
      </button>

      {mensaje && (
        <p className="mt-4 text-lg text-center font-semibold">{mensaje}</p>
      )}
    </div>
  );
};

export default EjercicioMatematica1;
