import ProductActions from "@/modules/product/components/ProductActions";
import ProductImage from "@/modules/product/components/ProductImage";
import ProductRelatedList from "@/modules/product/components/ProductRelatedList";
import { fetchProductById } from "@/modules/product/services/fetchProductById";
import { fetchRelatedProducts } from "@/modules/product/services/fetchRelatedProducts";
import ProductReviewList from "@/modules/review/components/ProductReviewList";
import { fetchReviewsByProduct } from "@/modules/review/services/fetchReviewsByProduct";
import SellerCard from "@/modules/seller/components/SellerCard";
import { fetchSellerByProduct } from "@/modules/seller/services/fetchSellerByProduct";
import PaymentMethodsCard from "@/modules/payments/components/PaymentMethodsCard";
import { fetchPaymentMethods } from "@/modules/payments/services/fetchPaymentMethods";
import ProductSpecs from "@/modules/product/components/ProductSpecs";

export default async function ItemDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const [product, seller, related, reviewData] = await Promise.all([
    fetchProductById(id),
    fetchSellerByProduct(id),
    fetchRelatedProducts(id),
    fetchReviewsByProduct(id),
  ]);

  const payment = await fetchPaymentMethods({
    product_id: product.id,
    price: product.price.amount,
    currency: product.price.currency,
    category: product.category,
  });
  return (
    <main className="p-4 flex flex-col lg:flex-row justify-start gap-6 items-start">
      {/* Bloco imagem + info */}
      <div className="flex flex-col gap-2 flex-1">
        <ProductImage
          images={product.images}
          alt={product.title}
          title={product.title}
          price={product.price}
          attributes={product.attributes}
          averageRating={reviewData.average_rating}
          totalReviews={reviewData.total_reviews}
        />

        <ProductRelatedList products={related} />

        <ProductReviewList
          averageRating={reviewData.average_rating}
          totalReviews={reviewData.total_reviews}
          reviews={reviewData.reviews}
        />
        <ProductSpecs
          attributes={product.attributes}
          description={product.description}
        />
      </div>

      <div className="flex flex-col gap-2 w-full max-w-xs">
        <ProductActions stock={product.stock} />
        <SellerCard
          name={seller.name}
          coverImage={seller.cover_image}
          reputation={seller.reputation}
          products={seller.products}
        />
        <PaymentMethodsCard
          credit={payment.credit}
          debit={payment.debit}
          cash_payment={payment.cash_payment}
        />
      </div>
    </main>
  );
}
