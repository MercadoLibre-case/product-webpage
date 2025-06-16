export interface Product {
  id: string;
  title: string;
  description: string;
  price: {
    amount: number;
    currency: string;
  };
  thumbnail: string;
  images: string[];
  category: string;
  attributes: { name: string; value: string }[];
  stock: number;
  seller_id: string;
}

const BASE_URL =
  process.env.NEXT_PUBLIC_PRODUCT_API_URL || "http://localhost:8070";

export async function fetchProductById(productId: string): Promise<Product> {
  const res = await fetch(`${BASE_URL}/products/${productId}`);

  if (!res.ok) {
    throw new Error("Erro ao buscar produto");
  }

  const data = await res.json();
  return data;
}
