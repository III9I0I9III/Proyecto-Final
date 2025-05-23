import { useState } from "react";

const opciones = [
  {
    respuesta: "Respiración",
    imagen: "/IMG-C/respiracion.jpg",
  },
  {
    respuesta: "Fotosíntesis",
    imagen: "/IMG-C/fotosintesis.jpg",
  },
  {
    respuesta: "Digestión",
    imagen: "/IMG-C/digestion.jpg",
  },
];

const sonidoCorrecto = new Audio("/Sonidos-C/correcto.mp3");
const sonidoIncorrecto = new Audio("/Sonidos-C/incorrecto.mp3");

const EjercicioFotosintesis = () => {
  const [respuesta, setRespuesta] = useState("");
  const [mensaje, setMensaje] = useState("");

  const verificar = () => {
    if (respuesta === "Fotosíntesis") {
      sonidoCorrecto.play();
      setMensaje("✅ ¡Correcto!");
      // Ya no redirige a otra página
    } else {
      sonidoIncorrecto.play();
      setMensaje("❌ Incorrecto. La respuesta correcta es: Fotosíntesis.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">
        ¿Qué proceso usan las plantas para producir su alimento?
      </h2>

      <div className="flex flex-wrap gap-6 justify-center mt-4">
        {opciones.map(({ respuesta: resp, imagen }) => (
          <div
            key={resp}
            className={`cursor-pointer rounded border-4 p-1 ${
              respuesta === resp ? "border-blue-500" : "border-gray-300"
            }`}
            onClick={() => setRespuesta(resp)}
          >
            <img
              src={imagen}
              alt={resp}
              className="w-40 h-40 object-cover rounded"
            />
            <p className="text-center mt-2 font-semibold">{resp}</p>
          </div>
        ))}
      </div>

      <button
        onClick={verificar}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded block mx-auto"
        disabled={!respuesta}
      >
        Verificar
      </button>

      {mensaje && <p className="mt-4 text-lg text-center">{mensaje}</p>}
    </div>
  );
};

export default EjercicioFotosintesis;
