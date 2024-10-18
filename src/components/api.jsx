import React, { useState, useEffect } from 'react';

export const Gallery = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://dragonball-api.com/api/characters");
                const result = await response.json();
                console.log(result); // Aquí imprimimos el resultado completo

                // Verifica cómo está estructurada la respuesta
                if (Array.isArray(result)) {
                    setData(result); // Si es un array, lo guardamos
                } else if (result.items) {
                    setData(result.items); // Si hay una propiedad items, la usamos
                } else {
                    console.error("La estructura de datos no es válida", result);
                }

                setLoading(false);
            } catch (error) {
                console.log("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
                <h1 className="text-3xl font-bold text-center mb-6">Personajes de Dragon Ball</h1>
                {loading ? (
                    <p className="text-center">Cargando...</p>
                ) : (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.map((item) => (
                            <li key={item.id} className="bg-gray-200 rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
                                <div className="relative h-80">
                                    <img src={item.image} alt={item.name} className="absolute -top-15 left-1/2 transform -translate-x-1/2 h-64 w-auto" />
                                </div>
                                <h2 className="text-xl font-semibold text-center py-2">{item.name}</h2>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};
