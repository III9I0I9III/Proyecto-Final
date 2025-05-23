import React, { useState } from "react";
import Ejercicio1 from "../ejercicios/Sociales/EjercicioSociales1.jsx";
import Ejercicio2 from "../ejercicios/Sociales/EjercicioSociales2.jsx";
import Ejercicio3 from "../ejercicios/Sociales/EjercicioSociales3.jsx";
import Ejercicio4 from "../ejercicios/Sociales/EjercicioSociales4.jsx";

const TOTAL_EJERCICIOS = 4;

function Sociales() {
  const [paso, setPaso] = useState(1);
  const [respuestasCorrectas, setRespuestasCorrectas] = useState([]);
  const [respuestasIncorrectas, setRespuestasIncorrectas] = useState([]);
  const [mostrarFeedback, setMostrarFeedback] = useState(false);
  const [feedbackPositivo, setFeedbackPositivo] = useState(false);

  const marcarCorrecto = () => {
    if (!respuestasCorrectas.includes(paso)) {
      setRespuestasCorrectas((prev) => [...prev, paso]);
      setFeedbackPositivo(true);
      setMostrarFeedback(true);
      setTimeout(() => setMostrarFeedback(false), 1500);
    }
    setTimeout(avanzar, 1000);
  };

  const marcarIncorrecto = () => {
    if (!respuestasIncorrectas.includes(paso)) {
      setRespuestasIncorrectas((prev) => [...prev, paso]);
      setFeedbackPositivo(false);
      setMostrarFeedback(true);
      setTimeout(() => setMostrarFeedback(false), 1500);
    }
    setTimeout(avanzar, 1000);
  };

  const avanzar = () => {
    setPaso((prev) => Math.min(prev + 1, TOTAL_EJERCICIOS + 1));
  };

  const reiniciar = () => {
    setPaso(1);
    setRespuestasCorrectas([]);
    setRespuestasIncorrectas([]);
  };

  const salir = () => {
    const nota = calcularNotaFinal();
    const mensaje = `🌎 Tu nota en Sociales es: ${nota}/10\n${mensajeFinal()}`;
    alert(mensaje);
    window.location.href = "/";
  };

  const calcularNotaFinal = () => {
    const totalRespondidas = respuestasCorrectas.length + respuestasIncorrectas.length;
    if (totalRespondidas === 0) return 0;
    const nota = (respuestasCorrectas.length / totalRespondidas) * 10;
    return nota.toFixed(1);
  };

  const mensajeFinal = () => {
    const nota = parseFloat(calcularNotaFinal());
    if (nota === 10) return "🏛️ ¡Perfecto! Dominas completamente los conceptos sociales.";
    if (nota >= 7) return "🗺️ ¡Muy bien! Solo algunos detalles por mejorar.";
    if (nota >= 5) return "📜 Buen trabajo, pero hay aspectos que necesitas reforzar.";
    return "⚠️ Necesitas estudiar más los conceptos sociales.";
  };

  const renderEjercicio = () => {
    const ejercicioProps = {
      onCorrectAnswer: marcarCorrecto,
      onWrongAnswer: marcarIncorrecto
    };

    switch (paso) {
      case 1:
        return <Ejercicio1 {...ejercicioProps} />;
      case 2:
        return <Ejercicio2 {...ejercicioProps} />;
      case 3:
        return <Ejercicio3 {...ejercicioProps} />;
      case 4:
        return <Ejercicio4 {...ejercicioProps} />;
      case 5:
        return (
          <div className="text-center p-8 bg-white rounded-3xl shadow-2xl border-4 border-amber-400 max-w-md mx-auto transform transition-all hover:scale-105">
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white py-4 px-6 rounded-2xl mb-6 shadow-lg">
              <h2 className="text-3xl font-bold mb-2">🌎 Curso Finalizado</h2>
            </div>
            <p className="mb-6 text-lg text-gray-700">{mensajeFinal()}</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-green-100 p-4 rounded-xl border-2 border-green-300">
                <p className="text-green-800 font-bold text-xl">✔️ {respuestasCorrectas.length}</p>
                <p className="text-green-600">Correctas</p>
              </div>
              <div className="bg-red-100 p-4 rounded-xl border-2 border-red-300">
                <p className="text-red-800 font-bold text-xl">❌ {respuestasIncorrectas.length}</p>
                <p className="text-red-600">Incorrectas</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-3 rounded-xl shadow-md">
              <p className="text-white font-bold text-2xl">
                Nota: {calcularNotaFinal()}/10
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 p-6 flex flex-col justify-center items-center">
      {/* Feedback flotante */}
      {mostrarFeedback && (
        <div className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-bounce ${feedbackPositivo ? 'bg-green-500' : 'bg-red-500'} text-white px-6 py-3 rounded-full shadow-xl font-bold`}>
          {feedbackPositivo ? '¡Correcto! 🎯' : 'Incorrecto 📝'}
        </div>
      )}

      <div className="w-full max-w-4xl">
        {/* Barra de progreso (modificada para comenzar en 0) */}
        <div className="mb-8 bg-white rounded-full h-4 shadow-inner overflow-hidden">
          <div 
            className="bg-gradient-to-r from-amber-500 to-orange-600 h-full transition-all duration-500 ease-out" 
            style={{ width: `${((paso - 1) / TOTAL_EJERCICIOS) * 100}%` }}
          ></div>
        </div>

        {/* Tarjeta principal */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-white hover:border-amber-300 transition-all duration-300">
          {/* Encabezado con gradiente */}
          <div className="bg-gradient-to-r from-amber-600 to-orange-700 p-6 text-center">
            <h1 className="text-4xl font-extrabold text-white drop-shadow-md">
              🌍 Curso de Ciencias Sociales
            </h1>
            <p className="text-amber-100 mt-2">
              Ejercicio {paso <= TOTAL_EJERCICIOS ? paso : TOTAL_EJERCICIOS} de {TOTAL_EJERCICIOS}
            </p>
          </div>

          {/* Contenido del ejercicio */}
          <div className="p-8">
            <div className="mb-8 transform hover:scale-[1.01] transition-transform">
              {renderEjercicio()}
            </div>

            {paso <= TOTAL_EJERCICIOS && (
              <div className="flex flex-col items-center gap-6">
                <p className="text-lg text-gray-600 font-medium">¿Respondiste correctamente?</p>
                <div className="flex gap-6">
                  <button
                    onClick={marcarCorrecto}
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2"
                  >
                    <span className="text-xl">✓</span> Correcto
                  </button>
                  <button
                    onClick={marcarIncorrecto}
                    className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2"
                  >
                    <span className="text-xl">✗</span> Incorrecto
                  </button>
                </div>
              </div>
            )}

            {paso === TOTAL_EJERCICIOS + 1 && (
              <div className="flex justify-center gap-6 mt-8">
                <button
                  onClick={reiniciar}
                  className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <span className="text-xl">🔄</span> Reiniciar
                </button>
                <button
                  onClick={salir}
                  className="bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <span className="text-xl">🚪</span> Salir
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Pie de página */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Academia de Ciencias Sociales - Todos los derechos reservados</p>
        </div>
      </div>
    </div>
  );
}

export default Sociales;