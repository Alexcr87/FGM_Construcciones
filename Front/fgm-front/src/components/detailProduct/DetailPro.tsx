import { IProduct } from "@/interface/ICategory";
import React from "react";
import RenderDetail from "./RenderDetail";


interface IProps {
    products: IProduct[];
}

export const DetailPro: React.FC<IProps> = ({ products }) => {


    return (
        <div>
            {products.map((products: IProduct) => (<RenderDetail key={products.id} products={products} />))}
        </div>
    )

}


export default DetailPro;