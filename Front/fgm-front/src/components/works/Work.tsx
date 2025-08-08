import React from "react";
import Image from "next/image";

export const Work: React.FC = () => {
  const images = [
    "/assets/foto1.png",
    "/assets/foto2.png",
    "/assets/foto3.png",
    "/assets/foto4.png",
    "/assets/foto6.png",
    "/assets/foto7.png",
  ];

  return (
    <section className="px-3 py-16 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-light tracking-tight  mb-2">
          Transformamos ideas en resultados
        </h1>
        <h3 className="text-lg text-gray-600">Nuestros proyectos y clientes</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-md"
          >
            <Image
              src={src}
              alt={`Trabajo ${index + 1}`}
              width={400}
              height={300}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
