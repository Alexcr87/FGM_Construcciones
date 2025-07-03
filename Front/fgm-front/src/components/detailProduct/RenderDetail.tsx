
import { IProduct } from "@/interface/ICategory";
import React from "react";



interface IProps {
    products: IProduct
}

export const RenderDetail: React.FC<IProps> = ({ products }) => {
    const { name, img , description , box , dimension} = products

    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <h4>{box}</h4>
            <h4>{dimension}</h4>
            <img src={img} />
            <div>
                <p>Presupuesto al WhatsApp</p>
            </div>
        </div>
    )
}

export default RenderDetail;