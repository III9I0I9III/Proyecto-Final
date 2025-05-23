import { useState } from "react";

const opciones = [
  { valor: "Corazón", imagen: "/IMG-C/corazoncito.png", tipo: "aguda" },
  { valor: "Mesa", imagen: "/IMG-C/mesa.jpg", tipo: "grave" },
  { valor: "Esdrújula", imagen: "/IMG-C/esdrujula.jpg", tipo: "esdrújula" },
];

const sonidoCorrecto = new Audio("/Sonidos-C/correcto.mp3");
const sonidoIncorrecto = new Audio("/Sonidos-C/incorrecto.mp3");

const EjercicioLenguaje2 = ({ onPuntuar }) => {
  const [respuesta, setRespuesta] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [puntajeDado, setPuntajeDado] = useState(false);

  const verificarRespuesta = () => {
    if (respuesta === "esdrújula") {
      sonidoCorrecto.play();
      setMensaje("✅ ¡Correcto! 'Esdrújula' lleva tilde en la antepenúltima sílaba.");
      if (!puntajeDado) {
        onPuntuar(10);
        setPuntajeDado(true);
      }
    } else {
      sonidoIncorrecto.play();
      setMensaje("❌ Incorrecto. La respuesta correcta es: Esdrújula.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Ejercicio 2: Tipo de acentuación</h2>
      <p>¿Cuál de estas palabras es esdrújula?</p>

      <div className="flex flex-wrap gap-6 justify-center mt-4">
        {opciones.map(({ valor, imagen, tipo }) => (
          <div
            key={valor}
            className={`cursor-pointer rounded border-4 p-1 ${
              respuesta === tipo ? "border-blue-500" : "border-gray-300"
            }`}
            onClick={() => setRespuesta(tipo)}
          >
            <img src={imagen} alt={valor} className="w-32 h-32 object-cover rounded" />
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

export default EjercicioLenguaje2;
