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

const BASE_URL =
  process.env.NEXT_PUBLIC_REVIEW_API_URL || "http://localhost:8090";

export async function fetchReviewsByProduct(
  productId: string
): Promise<ProductReviewData> {
  const res = await fetch(`${BASE_URL}/reviews/${productId}`);

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
