import { useState } from "react";

const opciones = [
  {
    nombre: "Gato",
    imagen: "/IMG-C/gatito.jpg",
    sonido: "/Sonidos-C/gato.mp3",
  },
  {
    nombre: "Pez",
    imagen: "/IMG-C/pez.jpg",
    sonido: "/Sonidos-C/pez.mp3", // sonido del pez
  },
  {
    nombre: "Perro",
    imagen: "/IMG-C/perrito.png",
    sonido: "/Sonidos-C/perro.mp3",
  },
];

const EjercicioNaturales4 = () => {
  const [respuesta, setRespuesta] = useState("");
  const [mensaje, setMensaje] = useState("");

  const sonidoCorrecto = new Audio("/Sonidos-C/correcto.mp3");
  const sonidoIncorrecto = new Audio("/Sonidos-C/incorrecto.mp3");

  // Reproducir sonido del pez que es el animal correcto
  const reproducirSonido = () => {
    const sonido = new Audio("/Sonidos-C/pez.mp3"); // sonido correcto
    sonido.play();
  };

  const verificarRespuesta = () => {
    if (respuesta === "Pez") {
      sonidoCorrecto.play();
      setMensaje("✅ ¡Correcto!");
    } else {
      sonidoIncorrecto.play();
      setMensaje("❌ Incorrecto. La respuesta correcta es: Pez.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Ejercicio 4: Selecciona el Animal Correcto</h2>
      <p>¿Cuál de estos animales vive en el agua?</p>

      <button
        onClick={reproducirSonido}
        className="mt-4 mb-4 bg-green-600 text-white px-4 py-2 rounded"
      >
        🔊 Escuchar sonido
      </button>

      <div className="flex flex-wrap gap-4 justify-center mt-2">
        {opciones.map((opcion) => (
          <div
            key={opcion.nombre}
            className="text-center cursor-pointer"
            onClick={() => setRespuesta(opcion.nombre)}
          >
            <img
              src={opcion.imagen}
              alt={opcion.nombre}
              className={`w-32 h-32 object-cover rounded border-4 ${
                respuesta === opcion.nombre
                  ? "border-blue-500"
                  : "border-gray-300"
              }`}
            />
            <p className="mt-1 font-semibold">{opcion.nombre}</p>
          </div>
        ))}
      </div>

      <button
        onClick={verificarRespuesta}
        disabled={!respuesta}
        className="mt-5 bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        Verificar
      </button>

      <p className="mt-3 text-lg">{mensaje}</p>
    </div>
  );
};

export default EjercicioNaturales4;
