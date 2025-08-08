
import Products from "@/components/products/Products";
import TextSlider from "@/components/textSlider/TextSlider";
import Work from "@/components/works/Work";
import { getAllProducts, getCategorias } from "@/helper/categorias";
import Link from "next/link";
import Image from "next/image";
import BestSeller from "@/components/Bestseller.tsx/Bestseller";
import React from "react";
import { IProduct } from "@/interface/ICategory";


const Home: React.FC = async () => {




  const categorias = await getCategorias()
  const productos: IProduct[] = await getAllProducts()


  const productosFiltrados: IProduct[] = productos.filter((producto: IProduct) =>
    producto.categories?.some((categoria) => categoria.name === "Más Vendidos")
  );








  return (
    <div>
      <TextSlider />
      <Link
        href="https://wa.me/5493515081452?text=Hola%20quisiera%20hacer%20una%20consulta"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "120px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        <Image
          src="https://img.icons8.com/ios-filled/50/25D366/whatsapp.png"
          alt="WhatsApp"
          width={50}
          height={50}
          style={{ width: 50, height: 50 }}
        />
      </Link>
      <BestSeller products={productosFiltrados} />
      <Products categorias={categorias} />
      <Work />
    </div>
  );
}


export default Home;