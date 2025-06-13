export async function fetchSellerByProduct(productId: string) {
    const res = await fetch(`http://localhost:8080/sellers/by-product/${productId}`);
    if (!res.ok) throw new Error("Erro ao buscar vendedor");
  
    return res.json();
  }
  