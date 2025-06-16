export async function fetchSellerByProduct(productId: string) {
  const BASE_URL =
    process.env.NEXT_PUBLIC_SELLER_API_URL || "http://localhost:8080";

  const res = await fetch(`${BASE_URL}/sellers/by-product/${productId}`);

  if (!res.ok) {
    throw new Error("Erro ao buscar vendedor");
  }

  return res.json();
}
