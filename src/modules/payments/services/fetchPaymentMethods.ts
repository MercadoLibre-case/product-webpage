export type PaymentMethods = {
  credit: { brands: string[] };
  debit: { brands: string[] };
  cash_payment: { payment_type: string[] };
};

type RequestBody = {
  product_id: string;
  price: number;
  currency: string;
  category: string;
};

const BASE_URL =
  process.env.NEXT_PUBLIC_PAYMENT_API_URL || "http://localhost:8070";

export async function fetchPaymentMethods(
  data: RequestBody
): Promise<PaymentMethods> {
  const res = await fetch(`${BASE_URL}/payment/payment-methods`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Erro ao buscar métodos de pagamento");
  }

  return res.json();
}
