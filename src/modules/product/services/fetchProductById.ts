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

export async function fetchProductById(productId: string): Promise<Product> {
  const BASE_URL = process.env.PRODUCT_URL || 'http://localhost:8000';

  const res = await fetch(`${BASE_URL}/products/${productId}`);

  if (!res.ok) {
    throw new Error("Erro ao buscar produto");
  }

  const data = await res.json();
  console.log(data);
  return data;
}
