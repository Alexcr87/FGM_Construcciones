import DetailPro from "@/components/detailProduct/DetailPro";
import { getCategoriasId } from "@/helper/categorias";

export default async function Category({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const categoria = await getCategoriasId(id)


    const products = categoria.products ?? [];

    return (
        <div>
            <DetailPro products={products} />

        </div>
    )

}