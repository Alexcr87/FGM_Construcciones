import React from "react";
import DetailPro from "@/components/detailProduct/DetailPro";
import { getProducts } from "@/helper/products";

interface IProps {
    params: { id: number }
}


export const Detail: React.FC<IProps> = async ({ params }) => {
    const id =Number(params.id) 
    const products = await getProducts(id)
    console.log("Mis Productos" , products);
    
    return (
        <div>
            <DetailPro products={products} />
        </div>
    )

}



export default Detail;