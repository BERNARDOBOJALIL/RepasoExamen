import { useState } from 'react';
import { Navbar } from './components/navbar'; // Ajusta la ruta si es necesario
import { HomePage } from './components/dashboard'; // Página principal
import { LoginForm } from './components/login'; // Componente del formulario de inicio de sesión
import { Gallery } from './components/api'; // Componente para mostrar los personajes

function App() {
  const [showLogin, setShowLogin] = useState(false);  // Estado para controlar si mostramos el login
  const [isAuthenticated, setIsAuthenticated] = useState(false);  // Estado para gestionar si el usuario está autenticado

  // Función que se ejecuta cuando las credenciales son válidas
  const handleLoginSuccess = () => {
    setIsAuthenticated(true); // Cambia el estado de autenticación
    setShowLogin(false); // Oculta el formulario de login
  };

  return (
    <>
      <Navbar onLoginClick={() => setShowLogin(true)} /> {/* Pasar la función a Navbar */}
      
      {/* Mostrar el HomePage inicialmente */}
      {!showLogin && !isAuthenticated ? (
        <HomePage />
      ) : showLogin && !isAuthenticated ? (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      ) : (
        <Gallery /> // Muestra la galería de personajes una vez que el usuario está autenticado
      )}
    </>
  );
}

export default App;
