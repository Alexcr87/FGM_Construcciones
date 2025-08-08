import { IProduct } from "@/interface/ICategory";
import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

interface IProps {
  products: IProduct;
}

export const RenderDetail: React.FC<IProps> = ({ products }) => {
  const { name, img, description, box, dimension } = products;

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex flex-col w-full max-w-sm transition duration-300 hover:shadow-md">
      <Image
        src={img}
        alt={name}
        width={300}
        height={144}
        className="w-full h-36 object-cover rounded-lg mb-3"
      />
      <h2 className="text-lg font-semibold text-gray-900 mb-1 truncate">{name}</h2>
      <p className="text-sm text-gray-600 mb-2 line-clamp-3">{description}</p>
      <div className="text-xs text-gray-500 mb-4">
        <p>Caja: {box}</p>
        <p>Dimensiones: {dimension}</p>
      </div>
      <div className="flex gap-2 mt-auto">
        <a
          href={`https://wa.me/?text=Hola,%20me%20interesa%20el%20producto%20${encodeURIComponent(
            name
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/2"
        >
          <button className="w-full flex items-center justify-center gap-2 text-sm py-2 border border-green-600 rounded-md text-white bg-green-600 hover:bg-green-700 transition">
            <FaWhatsapp className="h-5 w-5" />
            WhatsApp
          </button>
        </a>
        <Link href={`/productos/${products.id}`} className="w-1/2">
          <button className="w-full text-sm py-2 border border-gray-300 rounded-md text-gray-800 hover:bg-gray-50 transition">
            Ver detalle
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RenderDetail;
