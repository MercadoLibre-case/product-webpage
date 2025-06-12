"use client";

import { useState } from "react";
import ProductMainInfo from "./ProductMainInfo";

type Props = {
  images: string[];
  alt: string;
  title: string;
  price: {
    amount: number;
    currency: string;
  };
  attributes: { name: string; value: string }[];
  averageRating: number;
  totalReviews: number;
};

export default function ProductImage({
  images,
  alt,
  title,
  price,
  attributes,
  averageRating,
  totalReviews,
}: Props) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 flex gap-6 w-full">
      <div className="flex flex-col gap-2">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`thumbnail-${index}`}
            className={`w-14 h-14 object-cover rounded-md cursor-pointer border ${
              img === mainImage ? "border-blue-500" : "border-transparent"
            }`}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>

      {/* Imagem principal */}
      <div className="flex items-start justify-center h-[500px]">
        <img
          src={mainImage}
          alt={alt}
          className="object-contain max-h-full"
          style={{ aspectRatio: "auto 410 / 500", cursor: "zoom-in" }}
        />
      </div>

      {/* Informações ao lado */}
      <div className="flex-1 flex items-start">
        <ProductMainInfo
          title={title}
          price={price}
          attributes={attributes}
          averageRating={averageRating}
          totalReviews={totalReviews}
        />
      </div>
    </div>
  );
}
