import React, { useState } from 'react';

export const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Credenciales "hard-coded" para validación
  const validEmail = 'usuario@ejemplo.com';
  const validPassword = '123456';

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar las credenciales
    if (email === validEmail && password === validPassword) {
      setError(''); // Limpiar cualquier mensaje de error previo
      onLoginSuccess(); // Llamamos a la función para continuar si es correcto
    } else {
      setError('Correo o contraseña incorrectos'); // Mostrar error si no coincide
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-6">Iniciar Sesión</h2>
        
        {/* Mostrar mensaje de error si lo hay */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        
        {/* Formulario */}
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Correo Electrónico
            </label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ejemplo@correo.com" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 transition duration-300"
            />
          </div>
          
          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Contraseña
            </label>
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 transition duration-300"
            />
          </div>
          
          {/* Submit Button */}
          <div className="mb-4">
            <button 
              type="submit" 
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300">
              Iniciar Sesión
            </button>
          </div>
          
          
        </form>
      </div>
    </div>
  );
};
