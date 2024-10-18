import React from 'react';

export const HomePage = () => {
  return (
    <div className="bg-gray-100 py-10">
      {/* Hero Section */}
      <section className="bg-[url('https://example.com/food-hero.jpg')] bg-cover bg-center h-96 flex justify-center items-center">
        <div className="bg-green-600  p-12 rounded">
          <h1 className="text-white text-5xl font-bold">Holaaaaaaaaaaa como estás</h1>
          <p className="text-white mt-4 text-lg">Descubre una experiencia gastronómica única</p>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="container mx-auto py-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Platillos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Dish 1 */}
          <div className="bg-white shadow-lg rounded overflow-hidden">
            <img src="https://sasonregional.com/wp-content/uploads/2024/08/image-2024-08-23T144246.059-1024x576.jpg" alt="Pollo con verduras estilo chino" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-bold">Pollo con verduras estilo chino</h3>
              <p className="text-gray-700 mt-2">Sazonado al vapor con pimientos morrones...</p>
            </div>
          </div>
          {/* Dish 2 */}
          <div className="bg-white shadow-lg rounded overflow-hidden">
            <img src="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/d08f5cc6a32b46476a734cb9e2777178/Derivates/d3bf8fa894e84ccda9aa0b52f4ba3d08dae5c681.jpg" alt="Dish 2" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-bold">Langosta Marinada</h3>
              <p className="text-gray-700 mt-2">Langosta en baño de salsa verde con verduras y camarones</p>
            </div>
          </div>
          {/* Dish 3 */}
          <div className="bg-white shadow-lg rounded overflow-hidden">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmCY3zB7az3_wBocaZAebwoeeYrh-Z25mApw&s" alt="Dish 3" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-bold">Hamburguesa Gourmet</h3>
              <p className="text-gray-700 mt-2">Hamburguesa de carne angus con rodajas de piña</p>
            </div>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="bg-green-600 mt-20 py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">¡Promociones Especiales!</h2>
          <p className="text-white text-lg mb-6">Disfruta de nuestras ofertas especiales por tiempo limitado.</p>
          <a href="#" className="bg-white text-green-600 py-3 px-6 rounded-full font-bold hover:bg-gray-200 transition duration-300">Ver Promociones</a>
        </div>
      </section>
    </div>
  );
}
