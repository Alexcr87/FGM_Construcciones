
import Products from "@/components/products/Products";
import TextSlider from "@/components/textSlider/TextSlider";
import Work from "@/components/works/Work";

export const categorias = [

  {
      id: "1",
      name: "Porcelanato y porcelanicos",
      img: "https://i.pinimg.com/736x/ea/28/15/ea2815669a79f03c2ef7468a8e614b37.jpg"
  },

  {
      id:"2" ,
      name: "Pisos y revestimientos",
      img: "https://i.pinimg.com/736x/bb/72/2b/bb722b42ad1c59af01396006db4e8af9.jpg"
  },

  {
      id: "3",
      name: "Placas pvc",
      img: "https://i.pinimg.com/736x/e0/8c/e8/e08ce8ec5b6a546774eb435b57a84985.jpg"
  },

  {
      id: "4",
      name: "Baños y sanitarios",
      img: "https://i.pinimg.com/736x/d6/18/76/d61876891ca63d6e62a2d8140b82dcfc.jpg"
  },

  {
      id: "5",
      name: "Diseño interiores",
      img: "https://i.pinimg.com/736x/85/08/70/85087073fd6ccd5450b4e0b899cda349.jpg"
  },
]




export default function Home() {
  return (
    <div >
     <TextSlider/>
     <Products categorias={categorias}/>
     <Work/>
    </div>
  );
}
