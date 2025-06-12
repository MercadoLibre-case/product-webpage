export async function fetchRelatedProducts(productId: string) {
  const res = await fetch(
    `http://localhost:8001/products/${productId}/related`
  );
  if (!res.ok) throw new Error("Erro ao buscar produtos relacionados");

  return res.json();
}
