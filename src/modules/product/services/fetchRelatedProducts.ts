export async function fetchRelatedProducts(productId: string) {
  const BASE_URL =
    process.env.NEXT_PUBLIC_PRODUCT_API_URL || "http://localhost:8000";

  const res = await fetch(`${BASE_URL}/products/${productId}/related`);
  if (!res.ok) throw new Error("Erro ao buscar produtos relacionados");

  return res.json();
}
