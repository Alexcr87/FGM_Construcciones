import { IProduct } from "@/interface/ICategory";
import React from "react";
import RenderDetail from "./RenderDetail";

interface IProps {
  products: IProduct[];
}

export const DetailPro: React.FC<IProps> = ({ products }) => {
    return (
        <div className="w-full px-9 py-9">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product: IProduct) => (
            <RenderDetail key={product.id} products={product} />
          ))}
        </div>
      </div>
      );
};

export default DetailPro;
