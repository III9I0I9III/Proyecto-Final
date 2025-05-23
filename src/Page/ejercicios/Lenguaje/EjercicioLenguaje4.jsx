import { useState } from "react";

// Opciones con sus textos (puedes agregar imágenes si lo deseas)
const opciones = [
  { valor: "la niña juega en el parque.", texto: "la niña juega en el parque." },
  { valor: "La niña Juega en el parque", texto: "La niña Juega en el parque" },
  { valor: "La niña juega en el parque.", texto: "La niña juega en el parque." },
];

// Sonidos
const sonidoCorrecto = new Audio("/Sonidos-C/correcto.mp3");
const sonidoIncorrecto = new Audio("/Sonidos-C/incorrecto.mp3");

const EjercicioLenguaje4 = () => {
  const [respuesta, setRespuesta] = useState("");
  const [mensaje, setMensaje] = useState("");

  const verificarRespuesta = () => {
    if (respuesta === "La niña juega en el parque.") {
      sonidoCorrecto.play();
      setMensaje("✅ ¡Correcto!");
    } else {
      sonidoIncorrecto.play();
      setMensaje("❌ Incorrecto. La respuesta correcta es: La niña juega en el parque.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Ejercicio 4: Redacción</h2>
      <p className="text-lg">¿Qué oración está bien escrita?</p>

      <div className="flex flex-col gap-4 mt-4">
        {opciones.map(({ valor, texto }) => (
          <div
            key={valor}
            onClick={() => setRespuesta(valor)}
            className={`p-4 rounded border-4 cursor-pointer transition-all duration-200 text-center font-medium ${
              respuesta === valor ? "border-blue-500 bg-blue-100" : "border-gray-300"
            }`}
          >
            {texto}
          </div>
        ))}
      </div>

      <button
        onClick={verificarRespuesta}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded block mx-auto disabled:opacity-50"
        disabled={!respuesta}
      >
        Verificar
      </button>

      {mensaje && (
        <p className="mt-4 text-lg text-center font-medium">{mensaje}</p>
      )}
    </div>
  );
};

export default EjercicioLenguaje4;
