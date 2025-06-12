import ProductRatingSummary from "@/modules/review/components/ProductRatingSummary";

type Attribute = {
  name: string;
  value: string;
};

type Props = {
  title: string;
  price: {
    amount: number;
    currency: string;
  };
  attributes: Attribute[];
  averageRating: number;
  totalReviews: number;
};

export default function ProductMainInfo({
  title,
  price,
  attributes,
  averageRating,
  totalReviews,
}: Props) {
  const formatCurrency = (value: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(value);
  };

  return (
    <div className="space-y-4 pl-4 pt-4">
      <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
      <ProductRatingSummary average={averageRating} total={totalReviews} />

      <p className="text-3xl font-bold text-green-700">
        {formatCurrency(price.amount, price.currency)}
      </p>

      {/* Atributos */}
      <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1 pt-2">
        {attributes.map((attr, index) => (
          <li key={index}>
            <span className="font-medium">{attr.name}</span>:{" "}
            <span className="text-gray-600">{attr.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
