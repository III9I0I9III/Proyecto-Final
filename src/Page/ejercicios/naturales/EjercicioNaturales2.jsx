import { useState } from "react";

const sonidos = [
  {
    animal: "Gato",
    archivo: "/Sonidos-C/gato.mp3",
    imagen: "/IMG-C/gatito.jpg", 
  },
  {
    animal: "Perro",
    archivo: "/Sonidos-C/perro.mp3",
    imagen: "/IMG-C/perrito.png", 
  },
  {
    animal: "Vaca",
    archivo: "/Sonidos-C/vaca.mp3",
    imagen: "/IMG-C/vaca.jpg", 
  },
];

const EjercicioSonidoAnimales = () => {
  const [pregunta, setPregunta] = useState(() =>
    sonidos[Math.floor(Math.random() * sonidos.length)]
  );
  const [respuesta, setRespuesta] = useState("");
  const [mensaje, setMensaje] = useState("");

  const reproducirSonido = () => {
    const sonido = new Audio(pregunta.archivo);
    sonido.play();
  };

  const verificar = () => {
    if (respuesta === pregunta.animal) {
      new Audio("/Sonidos-C/correcto.mp3").play(); // opcional
      setMensaje("✅ ¡Correcto!");
    } else {
      new Audio("/Sonidos-C/incorrecto.mp3").play(); // opcional
      setMensaje(`❌ Incorrecto. Era: ${pregunta.animal}`);
    }
  };

  return (
    
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Ejercicio 2: Selecciona el Animal Correcto</h2>
      <h2 className="text-xl font-bold mb-2">¿Qué animal hace este sonido?</h2>

      <button
        onClick={reproducirSonido}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        🔊 Escuchar sonido
      </button>

      <div className="flex flex-wrap gap-4 justify-center mt-6">
        {sonidos.map((opcion) => (
          <div
            key={opcion.animal}
            className="text-center cursor-pointer"
            onClick={() => setRespuesta(opcion.animal)}
          >
            <img
              src={opcion.imagen}
              alt={opcion.animal}
              className={`w-32 h-32 object-cover rounded border-4 ${
                respuesta === opcion.animal
                  ? "border-blue-500"
                  : "border-gray-300"
              }`}
            />
            <p className="mt-1 font-semibold">{opcion.animal}</p>
          </div>
        ))}
      </div>

      <button
        onClick={verificar}
        className="mt-5 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Verificar
      </button>

      <p className="mt-3 text-lg">{mensaje}</p>
    </div>
  );
};

export default EjercicioSonidoAnimales;
