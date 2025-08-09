"use client"

import { IProduct } from "@/interface/ICategory";
import RenderBestSeller from "./RenderBestSeller";
import Link from "next/link";
import { useState } from "react";

interface IProps {
    products: IProduct[];
}

export const BestSeller: React.FC<IProps> = ({ products }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const productsPerView = 4;

    // Calcular cuántos grupos de 4 productos podemos mostrar
    const totalGroups = Math.ceil(products.length / productsPerView);

    const nextSlide = () => {
        setCurrentIndex(prev => {
            const nextIndex = prev + 1;
            // Si llegamos al final, volver al inicio
            if (nextIndex >= totalGroups) {
                return 0;
            }
            return nextIndex;
        });
    };

    const prevSlide = () => {
        setCurrentIndex(prev => {
            const prevIndex = prev - 1;
            // Si llegamos antes del inicio, ir al final
            if (prevIndex < 0) {
                return totalGroups - 1;
            }
            return prevIndex;
        });
    };

    // Obtener los productos para el slide actual
    const getCurrentProducts = () => {
        const startIndex = currentIndex * productsPerView;
        const endIndex = startIndex + productsPerView;
        return products.slice(startIndex, endIndex);
    };

    const currentProducts = getCurrentProducts();

    return (
        <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-8">
            {/* Título de la sección */}
            <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                    Productos Destacados
                </h2>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                    Descubre nuestros productos más populares
                </p>
            </div>

            {/* Contenedor del slider */}
            <div className="relative">
                {/* Botón anterior */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border border-gray-200"
                    aria-label="Producto anterior"
                >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Contenedor de productos */}
                <div className="overflow-hidden px-12 sm:px-16 lg:px-20">
                    <div className="flex transition-transform duration-500 ease-in-out gap-3 sm:gap-4 lg:gap-6">
                        {currentProducts.map((product: IProduct) => (
                            <Link
                                key={product.id}
                                href={`/productos/${product.id}`}
                                className="flex-shrink-0 w-1/4 min-w-0"
                            >
                                <RenderBestSeller products={product} />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Botón siguiente */}
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border border-gray-200"
                    aria-label="Siguiente producto"
                >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Indicadores de navegación */}
            {totalGroups > 1 && (
                <div className="flex justify-center mt-6 space-x-2">
                    {Array.from({ length: totalGroups }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-blue-600 scale-125'
                                    : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Ir al slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default BestSeller;