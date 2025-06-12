type Props = {
  average: number;
  total: number;
};

export default function ProductRatingSummary({ average, total }: Props) {
  const fullStars = Math.floor(average);
  const halfStar = average % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-2">
      {/* Estrelas */}
      <div className="flex">
        {Array(fullStars)
          .fill(0)
          .map((_, i) => (
            <span key={`full-${i}`} className="text-yellow-500 text-lg">
              ★
            </span>
          ))}
        {halfStar && <span className="text-yellow-500 text-lg">★</span>}
        {Array(emptyStars)
          .fill(0)
          .map((_, i) => (
            <span key={`empty-${i}`} className="text-gray-300 text-lg">
              ★
            </span>
          ))}
      </div>

      {/* Texto da nota */}
      <p className="text-sm text-gray-600">
        {average.toFixed(1)} ({total} avaliações)
      </p>
    </div>
  );
}
