import { getProductosByID } from "@/helper/categorias";

import Image from "next/image";


export default async function products({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const producto = await getProductosByID(id);
    console.log(producto, "productos");


    return (
        <div>
            <div key={producto.id}>
                <Image src={producto.img} alt={producto.name} width={200} height={200} />
                <h3>{producto.nombre}</h3>
            </div>
        </div>
    );
}