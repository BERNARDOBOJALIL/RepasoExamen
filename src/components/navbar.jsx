export const Navbar = ({ onLoginClick }) => {
    return (
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-green-600">Restaurante</a>
          
          {/* Links */}
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-gray-700 hover:text-green-600 hover:underline transition duration-300 ease-in-out">Inicio</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-green-600 hover:underline transition duration-300 ease-in-out">Menú</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-green-600 hover:underline transition duration-300 ease-in-out">Reservas</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-green-600 hover:underline transition duration-300 ease-in-out">Contacto</a>
            </li>
          </ul>
  
          {/* Iniciar sesión button */}
          <div>
            <button 
              onClick={onLoginClick} // Cuando se hace clic, llamamos a la función onLoginClick
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300 ease-in-out">
              Iniciar Sesión
            </button>
          </div>
        </div>
      </nav>
    );
  };
  