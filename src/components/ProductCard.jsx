import React from "react";
import Slider from "./Slider";
import other from "../utils/other";

const ProductCard = () => {
  return (
    <div>
      <Slider />
      <div className="px-4 py-2 flex flex-col gap-1">
        <h1 className="font-bold text-xl">Acne Care Kit | Paket Kulit Sehat & Bersih</h1>

        <div className="flex items-center justify-start gap-2">
          <p className="text-yellow-400">★★★★★</p>
          <p className="text-sm font-light">99+ reviews</p>
        </div>
        <div className="flex items-end justify-start gap-2">
          <h1 className="font-bold text-2xl text-purple-800">Rp117.500 - Rp187.500</h1>
          <p className="text-sm text-red-600 line-through mb-1">Rp200.000 - Rp250.000</p>
        </div>
        <p className="text-xs font-light text-gray-400">
          *Jaminan produk berkualitas, dilengkapi dengan pouch yang mudah dibawa kemana-mana
        </p>
        <p className="font-light text-sm py-7">
          Paket Acne Care Kit. Membantu merawat kulit berjerawat agar kembali sehat. Segera peduli dengan masalah jerawat membandel dengan merawat kulit kamu sedini mungkin!
        </p>
        <div className="flex items-center gap-2">
          <img className="h-14" src={other.cod2.img} alt={other.cod2.title} />
          <p className="text-gray-600 sm:text-sm"> Bisa COD (Bayar Ditempat)</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard
