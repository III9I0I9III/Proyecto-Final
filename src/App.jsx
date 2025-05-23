import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

import Login from './Page/Login.jsx';
import MenuMaterias from './Page/MenuMaterias.jsx';
import Matematicas from './Page/materias/matematicas.jsx';  
import Lenguaje from './Page/materias/lenguaje.jsx';
import Naturales from './Page/materias/naturales.jsx';
import Sociales from './Page/materias/sociales.jsx';
import Footer from './Components/footer.jsx';

const ProtectedRoute = ({ user, children }) => {
  if (!user) return <Navigate to="/" replace />;
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

function App() {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('user');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });

  // Función para manejar login
  const handleLogin = (username, password) => {
    if (username?.trim() && password?.trim()) {
      const userData = {
        username,
        role: 'docente',
        lastLogin: new Date().toISOString(),
      };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  // Función para cerrar sesión
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/menu" replace /> : <Login onLogin={handleLogin} />}
        />
        <Route
          path="/menu"
          element={
            <ProtectedRoute user={user}>
              <MenuMaterias onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/matematicas"
          element={
            <ProtectedRoute user={user}>
              <Matematicas />
            </ProtectedRoute>
          }
        />
        <Route
          path="/lenguaje"
          element={
            <ProtectedRoute user={user}>
              <Lenguaje />
            </ProtectedRoute>
          }
        />
        <Route
          path="/naturales"
          element={
            <ProtectedRoute user={user}>
              <Naturales />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sociales"
          element={
            <ProtectedRoute user={user}>
              <Sociales />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
