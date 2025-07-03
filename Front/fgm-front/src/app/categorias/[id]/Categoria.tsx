import DetailPro from "@/components/detailProduct/DetailPro";
import React from "react";
import { getCategoriasId } from "@/helper/categorias";


interface IProp {
    params: { id:string }
}

export const Category: React.FC<IProp> = async ({ params }) => {
    console.log(params, "esto es params");
    
    const id = params.id
    const categoria= await getCategoriasId(id)
    const products = categoria.products ?? [];

    return (
        <div>
            <DetailPro products={products} />
        </div>
    )

}

export default Category;