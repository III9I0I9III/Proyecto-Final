import React, { useState, useEffect } from "react";

const TOTAL_EJERCICIOS = 4;
const PUNTAJE_TOTAL = 10;
const PUNTAJE_POR_EJERCICIO = PUNTAJE_TOTAL / TOTAL_EJERCICIOS;

// Ejercicio 1 actualizado
const Ejercicio1 = ({ onCompletado }) => {
  const opciones = [
    {
      respuesta: "Norte",
      imagen: "/IMG-C/norte.jpg",
    },
    {
      respuesta: "Oeste",
      imagen: "/IMG-C/Oeste.jpg",
    },
    {
      respuesta: "Este",
      imagen: "/IMG-C/este.jpg",
    },
  ];

  const sonidoCorrecto = new Audio("/Sonidos-C/correcto.mp3");
  const sonidoIncorrecto = new Audio("/Sonidos-C/incorrecto.mp3");

  const [respuesta, setRespuesta] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [ejercicioCompletado, setEjercicioCompletado] = useState(false);

  const verificar = () => {
    const esCorrecto = respuesta === "Este";

    if (esCorrecto) {
      sonidoCorrecto.play();
      setMensaje("✅ ¡Correcto!");
    } else {
      sonidoIncorrecto.play();
      setMensaje("❌ Incorrecto. La respuesta correcta es: Este.");
    }

    if (!ejercicioCompletado) {
      onCompletado(esCorrecto);
      setEjercicioCompletado(true);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Ejercicio 1: Puntos Cardinales</h2>
      <p>¿Cuál es el punto cardinal donde sale el sol?</p>

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

// Ejercicios 2, 3 y 4 provisionales (ejemplo)
const Ejercicio2 = ({ onCompletado }) => {
  const [completado, setCompletado] = useState(false);
  const handleCompletar = () => {
    if (!completado) {
      onCompletado(true);
      setCompletado(true);
    }
  };
  return (
    <div>
      <h2>Ejercicio 2</h2>
      <button onClick={handleCompletar}>Marcar como completado</button>
    </div>
  );
};

const Ejercicio3 = ({ onCompletado }) => {
  const [completado, setCompletado] = useState(false);
  const handleCompletar = () => {
    if (!completado) {
      onCompletado(true);
      setCompletado(true);
    }
  };
  return (
    <div>
      <h2>Ejercicio 3</h2>
      <button onClick={handleCompletar}>Marcar como completado</button>
    </div>
  );
};

const Ejercicio4 = ({ onCompletado }) => {
  const [completado, setCompletado] = useState(false);
  const handleCompletar = () => {
    if (!completado) {
      onCompletado(true);
      setCompletado(true);
    }
  };
  return (
    <div>
      <h2>Ejercicio 4</h2>
      <button onClick={handleCompletar}>Marcar como completado</button>
    </div>
  );
};

// Componente principal
function Sociales() {
  const [paso, setPaso] = useState(1);
  const [puntos, setPuntos] = useState(0);
  const [ejerciciosCompletados, setEjerciciosCompletados] = useState({
    ej1: false,
    ej2: false,
    ej3: false,
    ej4: false,
  });

  useEffect(() => {
    const completados = Object.values(ejerciciosCompletados).filter(Boolean).length;
    const nuevosPuntos = completados * PUNTAJE_POR_EJERCICIO;
    setPuntos(nuevosPuntos);
  }, [ejerciciosCompletados]);

  const avanzar = () => {
    if (paso < TOTAL_EJERCICIOS + 1) {
      setPaso(paso + 1);
    }
  };

  const reiniciar = () => {
    setPaso(1);
    setPuntos(0);
    setEjerciciosCompletados({
      ej1: false,
      ej2: false,
      ej3: false,
      ej4: false,
    });
  };

  const marcarEjercicioCompleto = (ejercicioId) => (esCorrecto) => {
    if (esCorrecto && !ejerciciosCompletados[ejercicioId]) {
      setEjerciciosCompletados(prev => ({ ...prev, [ejercicioId]: true }));
    }
  };

  const renderEjercicio = () => {
    switch (paso) {
      case 1:
        return <Ejercicio1 onCompletado={marcarEjercicioCompleto("ej1")} />;
      case 2:
        return <Ejercicio2 onCompletado={marcarEjercicioCompleto("ej2")} />;
      case 3:
        return <Ejercicio3 onCompletado={marcarEjercicioCompleto("ej3")} />;
      case 4:
        return <Ejercicio4 onCompletado={marcarEjercicioCompleto("ej4")} />;
      case 5:
        return (
          <div className="resultado-final">
            <h2>🎉 ¡Curso Finalizado!</h2>
            <p>¡Felicidades por completar todos los ejercicios!</p>
            <p className="nota-final">Tu nota final es: {puntos.toFixed(1)}/10</p>
            <p>Ejercicios completados: {Object.values(ejerciciosCompletados).filter(Boolean).length}/{TOTAL_EJERCICIOS}</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="curso-container">
      <h1>🧭 Curso de Estudios Sociales</h1>
      {renderEjercicio()}
      <div className="controles-navegacion mt-6">
        {paso === TOTAL_EJERCICIOS + 1 && (
          <>
            <button
              onClick={reiniciar}
              className="bg-yellow-500 text-white px-6 py-2 rounded mr-4"
            >
              🔄 Reiniciar curso
            </button>
            <button
              onClick={() => alert(`Tu nota final es: ${puntos.toFixed(1)}/10`)}
              className="bg-blue-600 text-white px-6 py-2 rounded"
            >
              Ver Nota Final
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Sociales;
