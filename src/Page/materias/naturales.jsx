import React, { useState } from "react";
import Ejercicio1 from "../ejercicios/naturales/EjercicioNaturales1";
import Ejercicio2 from "../ejercicios/naturales/EjercicioNaturales2";
import Ejercicio3 from "../ejercicios/naturales/EjercicioNaturales3";
import Ejercicio4 from "../ejercicios/naturales/EjercicioNaturales4";

function Naturales() {
  const totalEjercicios = 4;
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
    setPaso((prev) => Math.min(prev + 1, totalEjercicios + 1));
  };

  const reiniciar = () => {
    setPaso(1);
    setRespuestasCorrectas([]);
    setRespuestasIncorrectas([]);
  };

  const salir = () => {
    const nota = calcularNotaFinal();
    const mensaje = `🌱 Tu nota en Ciencias Naturales es: ${nota}/10\n${mensajeFinal()}`;
    alert(mensaje);
    window.location.href = "/";
  };

  const calcularNotaFinal = () => {
    const nota = (respuestasCorrectas.length / totalEjercicios) * 10;
    return nota.toFixed(1);
  };

  const mensajeFinal = () => {
    const nota = parseFloat(calcularNotaFinal());
    if (nota === 10) return "🌿 ¡Perfecto! Demuestras un conocimiento excepcional de la naturaleza.";
    if (nota >= 7) return "🍃 ¡Muy bien! Solo algunos detalles por mejorar.";
    if (nota >= 5) return "🌱 Buen intento, pero necesitas reforzar algunos conceptos.";
    return "⚠️ Necesitas estudiar más los fenómenos naturales.";
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
          <div className="text-center p-8 bg-white rounded-3xl shadow-2xl border-4 border-emerald-400 max-w-md mx-auto transform transition-all hover:scale-105">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 px-6 rounded-2xl mb-6 shadow-lg">
              <h2 className="text-3xl font-bold mb-2">🌍 Curso Finalizado</h2>
            </div>
            <p className="mb-6 text-lg text-gray-700">{mensajeFinal()}</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-green-100 p-4 rounded-xl border-2 border-green-300">
                <p className="text-green-800 font-bold text-xl">🌿 {respuestasCorrectas.length}</p>
                <p className="text-green-600">Correctas</p>
              </div>
              <div className="bg-red-100 p-4 rounded-xl border-2 border-red-300">
                <p className="text-red-800 font-bold text-xl">🍂 {respuestasIncorrectas.length}</p>
                <p className="text-red-600">Incorrectas</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-3 rounded-xl shadow-md">
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-emerald-100 p-6 flex flex-col justify-center items-center">
      {/* Feedback flotante */}
      {mostrarFeedback && (
        <div className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-bounce ${feedbackPositivo ? 'bg-green-500' : 'bg-red-500'} text-white px-6 py-3 rounded-full shadow-xl font-bold`}>
          {feedbackPositivo ? '¡Correcto! 🌟' : 'Incorrecto 🍃'}
        </div>
      )}

      <div className="w-full max-w-4xl">
        {/* Barra de progreso modificada para comenzar en 0 */}
        <div className="mb-8 bg-white rounded-full h-4 shadow-inner overflow-hidden">
          <div 
            className="bg-gradient-to-r from-emerald-500 to-teal-600 h-full transition-all duration-500 ease-out" 
            style={{ width: `${((paso - 1) / totalEjercicios) * 100}%` }}
          ></div>
        </div>

        {/* Tarjeta principal */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-white hover:border-emerald-300 transition-all duration-300">
          {/* Encabezado con gradiente */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-6 text-center">
            <h1 className="text-4xl font-extrabold text-white drop-shadow-md">
              🌱 Curso de Ciencias Naturales
            </h1>
            <p className="text-emerald-100 mt-2">
              Ejercicio {paso <= totalEjercicios ? paso : totalEjercicios} de {totalEjercicios}
            </p>
          </div>

          {/* Contenido del ejercicio */}
          <div className="p-8">
            <div className="mb-8 transform hover:scale-[1.01] transition-transform">
              {renderEjercicio()}
            </div>

            {paso <= totalEjercicios && (
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

            {paso > totalEjercicios && (
              <div className="flex justify-center gap-6 mt-8">
                <button
                  onClick={reiniciar}
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2"
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
          <p>© {new Date().getFullYear()} Academia de Ciencias Naturales - Todos los derechos reservados</p>
        </div>
      </div>
    </div>
  );
}

export default Naturales;