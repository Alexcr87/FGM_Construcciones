"use client"



import { ICategory } from "@/interface/ICategory";
import RenderProducts from "./RenderProducts";
import React from "react";

interface Props {
    categorias: ICategory[];
  }

export const Products:React.FC<Props> = ({categorias}) => {


    return  (
      <div className="px-15 py-15 h-full bg-[rgba(246,245,243,0.8)] ml-5 mr-4 rounded-xl mt-5">
          <h2 className="text-3xl  font-light tracking-tight text-center mb-9">
            Renová tus Espacios al Mejor Precio
          </h2>
          <div className="flex flex-row flex-wrap justify-center gap-8 w-full">
            {categorias.map((categoria) => (
                <RenderProducts categorias={categoria} key={categoria.id} />
            ))}
          </div>
      </div>
      );


}




export default Products;