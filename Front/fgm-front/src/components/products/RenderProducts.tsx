
"use client"
import { ICategory } from "@/interface/ICategory";
import React from "react";
import { useRouter } from "next/navigation";


interface Iprops {
    categorias: ICategory
}

export const RenderProducts: React.FC<Iprops> = ({ categorias }) => {


    const { name, img , id } = categorias

    const router = useRouter()

    const handleOnClick = ()=>{
      router.push(`/categorias/${id}`)
    }
 
    return (
        <div className="relative h-90 rounded-lg overflow-hidden group shadow-md">
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
            <h1 className="text-xl font-semibold">{name}</h1>
            <button onClick={handleOnClick} className="mt-3 bg-white text-black px-4 py-2 rounded hover:bg-gray-200 font-bold transition">
              Ver productos
            </button>
          </div>
        </div>
      );

}


export default RenderProducts