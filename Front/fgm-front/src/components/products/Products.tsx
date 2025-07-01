"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Navigation, Pagination]}
            
          >
            {categorias.map((categoria) => (
              <SwiperSlide key={categoria.id}>
                <RenderProducts categorias={categoria} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );


}




export default Products;