
import { getProductosByID } from "@/helper/categorias";

import ProductDetailClient from "./ProductDetailClient";

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = await params;
    const producto = await getProductosByID(id);

    const whatsappMessage = `Hola, me gustaría recibir más información sobre el producto "${producto.name}". Me ha interesado y quisiera conocer detalles técnicos, disponibilidad y precio. Muchas gracias.`;
    const whatsappUrl = `https://wa.me/5493515081452?text=${encodeURIComponent(whatsappMessage)}`;
    const isBestseller = producto.categories?.some((cat: { name: string }) => cat.name === "Más Vendidos");

    return (
        <ProductDetailClient producto={producto} isBestseller={isBestseller} whatsappUrl={whatsappUrl} />
    );
}