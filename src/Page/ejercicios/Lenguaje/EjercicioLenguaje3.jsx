import { useState } from "react";

const opciones = [
  { palabra: "Contento", imagen: "/IMG-C/contento.jpg", tipo: "correcto" },
  { palabra: "Triste", imagen: "/IMG-C/triste.jpg", tipo: "incorrecto" },
  { palabra: "Hambriento", imagen: "/IMG-C/Hambriento.jpg", tipo: "incorrecto" },
];

const sonidoCorrecto = new Audio("/Sonidos-C/correcto.mp3");
const sonidoIncorrecto = new Audio("/Sonidos-C/incorrecto.mp3");

const EjercicioLenguaje3 = ({ onPuntuar }) => {
  const [respuesta, setRespuesta] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [puntajeDado, setPuntajeDado] = useState(false);

  const verificarRespuesta = () => {
    if (respuesta === "Contento") {
      sonidoCorrecto.play();
      setMensaje("✅ ¡Correcto! 'Contento' es sinónimo de 'Feliz'.");
      if (!puntajeDado) {
        onPuntuar(10);
        setPuntajeDado(true);
      }
    } else {
      sonidoIncorrecto.play();
      setMensaje("❌ Incorrecto. La respuesta correcta es: Contento.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Ejercicio 3: Sinónimos</h2>
      <p>¿Cuál de estas palabras es sinónimo de <strong>“Feliz”</strong>?</p>

      <div className="flex flex-wrap gap-6 justify-center mt-4">
        {opciones.map(({ palabra, imagen }) => (
          <div
            key={palabra}
            className={`cursor-pointer rounded border-4 p-1 ${
              respuesta === palabra ? "border-blue-500" : "border-gray-300"
            }`}
            onClick={() => setRespuesta(palabra)}
          >
            <img src={imagen} alt={palabra} className="w-32 h-32 object-cover rounded" />
            <p className="text-center mt-2 font-semibold">{palabra}</p>
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

export default EjercicioLenguaje3;
