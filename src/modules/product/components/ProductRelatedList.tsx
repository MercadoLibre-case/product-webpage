import React from "react";

type RelatedProduct = {
  id: string;
  title: string;
  price: {
    amount: number;
    currency: string;
  };
  thumbnail: string;
  category: string;
};

type Props = {
  products: RelatedProduct[];
};

export default function ProductRelatedList({ products }: Props) {
  const formatCurrency = (value: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(value);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 w-full">
      <h2 className="text-xl font-semibold mb-4">Produtos relacionados</h2>

      {products.length === 0 ? (
        <p className="text-sm text-gray-600 italic">
          Não identificamos produtos semelhantes ainda.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((prod) => (
            <div
              key={prod.id}
              className="border rounded-md p-3 hover:shadow-md transition"
            >
              <img
                src={prod.thumbnail}
                alt={prod.title}
                className="w-full h-40 object-contain mb-2"
              />
              <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                {prod.title}
              </h3>
              <p className="text-green-700 font-bold text-sm">
                {formatCurrency(prod.price.amount, prod.price.currency)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
