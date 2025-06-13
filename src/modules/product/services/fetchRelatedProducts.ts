export async function fetchRelatedProducts(productId: string) {
  const BASE_URL = process.env.PRODUCT_URL || "http://localhost:8000";

  const res = await fetch(`${BASE_URL}/products/${productId}/related`);
  if (!res.ok) throw new Error("Erro ao buscar produtos relacionados");

  return res.json();
}
