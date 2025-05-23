import { useState } from "react";

const opciones = [
  {
    respuesta: "Corazón",
    imagen: "/IMG-C/corazon.jpg",
  },
  {
    respuesta: "Cerebro",
    imagen: "/IMG-C/cerebro.jpg",
  },
  {
    respuesta: "Pulmones",
    imagen: "/IMG-C/pulmones.jpg",
  },
];

const EjercicioNaturales3 = () => {
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [verificado, setVerificado] = useState(false);

  const reproducirSonido = (ruta) => {
    const audio = new Audio(ruta);
    audio.play().catch((error) => {
      console.warn("No se pudo reproducir el sonido:", error);
    });
  };

  const verificarRespuesta = () => {
    if (respuestaSeleccionada === "Cerebro") {
      reproducirSonido("/Sonidos-C/correcto.mp3");
      setMensaje("✅ ¡Correcto!");
    } else {
      reproducirSonido("/Sonidos-C/incorrecto.mp3");
      setMensaje("❌ Incorrecto. La respuesta correcta es: Cerebro.");
    }
    setVerificado(true);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Ejercicio 3: Cuerpo humano</h2>
      <p>¿Qué órgano controla el cuerpo humano?</p>

      <div className="flex flex-wrap gap-6 justify-center mt-4">
        {opciones.map(({ respuesta: opcion, imagen }) => (
          <div
            key={opcion}
            className={`cursor-pointer rounded border-4 p-1 ${
              respuestaSeleccionada === opcion ? "border-blue-500" : "border-gray-300"
            } ${verificado ? "opacity-60 pointer-events-none" : ""}`}
            onClick={() => !verificado && setRespuestaSeleccionada(opcion)}
          >
            <img
              src={imagen}
              alt={opcion}
              className="w-40 h-40 object-cover rounded"
            />
            <p className="text-center mt-2 font-semibold">{opcion}</p>
          </div>
        ))}
      </div>

      <button
        onClick={verificarRespuesta}
        disabled={!respuestaSeleccionada || verificado}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded block mx-auto disabled:opacity-50"
      >
        Verificar
      </button>

      {mensaje && <p className="mt-4 text-lg text-center">{mensaje}</p>}
    </div>
  );
};

export default EjercicioNaturales3;
