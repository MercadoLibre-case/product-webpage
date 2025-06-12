type Props = {
  averageRating: number;
  totalReviews: number;
  reviews: {
    user: string;
    rating: number;
    comment: string;
    created_at: string;
  }[];
};

export default function ProductReviewList({
  averageRating,
  totalReviews,
  reviews,
}: Props) {
  if (totalReviews === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-6 w-full">
        <h2 className="text-xl font-semibold mb-2">Avaliações</h2>
        <p className="text-gray-600 text-sm">Ainda não há comentários.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 w-full">
      <h2 className="text-xl font-semibold mb-2">
        Avaliações ({totalReviews})
      </h2>

      <div className="text-yellow-500 font-semibold mb-4">
        Nota média: {averageRating.toFixed(1)} ★
      </div>

      <ul className="space-y-4">
        {reviews.map((review, index) => (
          <li key={index} className="border-b pb-4">
            <div className="text-sm font-semibold text-gray-800">
              {review.user} —{" "}
              <span className="text-yellow-500">{review.rating} ★</span>
            </div>
            <p className="text-sm text-gray-700">{review.comment}</p>
            <p className="text-xs text-gray-400">
              {new Date(review.created_at).toLocaleDateString("pt-BR")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
