export type Review = {
  user: string;
  rating: number;
  comment: string;
  created_at: string;
};

export type ProductReviewData = {
  product_id: string;
  average_rating: number;
  total_reviews: number;
  reviews: Review[];
};

export async function fetchReviewsByProduct(
  productId: string
): Promise<ProductReviewData> {
  const res = await fetch(`http://localhost:8090/reviews/${productId}`);

  if (res.status === 404) {
    return {
      product_id: productId,
      average_rating: 0,
      total_reviews: 0,
      reviews: [],
    };
  }

  if (!res.ok) {
    throw new Error("Erro ao buscar reviews");
  }

  return res.json();
}
