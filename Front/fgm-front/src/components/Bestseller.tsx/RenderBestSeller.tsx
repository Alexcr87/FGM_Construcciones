import React from "react";
import { IProduct } from "@/interface/ICategory";
import { FaWhatsapp } from "react-icons/fa";

interface IProducts {
    products: IProduct
}

export const RenderBestSeller: React.FC<IProducts> = ({ products }) => {
    const { name, img, description, material, dimension } = products;

    const handleWhatsAppClick = () => {
        const message = `Hola! Me interesa el producto: ${name}`;
        const whatsappUrl = `https://wa.me/+5491112345678?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden transform hover:-translate-y-1 border border-gray-200 h-full flex flex-col mx-2">
            {/* Contenedor de imagen - altura fija más grande */}
            <div className="relative overflow-hidden" style={{ height: '260px' }}>
                <img 
                    src={img} 
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/assets/logo.png';
                    }}
                />
                
                {/* Badge de bestseller */}
                <div className="absolute top-3 right-3">
                    <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-sm">
                        Bestseller
                    </span>
                </div>
            </div>

            {/* Contenido de la tarjeta - flex-grow para ocupar el espacio restante */}
            <div className="p-3 sm:p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                    {name}
                </h3>
                
                {description && (
                    <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 mb-3 flex-grow leading-relaxed">
                        {description}
                    </p>
                )}

                {/* Información adicional sin iconos */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-gray-500 mb-3 space-y-1 sm:space-y-0">
                    <span className="truncate">{material}</span>
          
                </div>

                {/* Botón de WhatsApp - siempre al final */}
                <button 
                    onClick={handleWhatsAppClick}
                    className="w-full flex items-center justify-center gap-2 text-xs sm:text-sm py-2 border border-green-600 rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-300 mt-auto"
                >
                    <FaWhatsapp className="h-4 w-4" />
                    WhatsApp
                </button>
            </div>
        </div>
    );
};

export default RenderBestSeller;