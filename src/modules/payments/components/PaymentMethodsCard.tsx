type Props = {
  credit: { brands: string[] };
  debit: { brands: string[] };
  cash_payment: { payment_type: string[] };
};

export default function PaymentMethodsCard({
  credit,
  debit,
  cash_payment,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 w-full">
      <h2 className="text-lg font-semibold mb-4">Meios de pagamento</h2>

      <div className="bg-green-600 text-white rounded-md px-4 py-2 text-sm font-medium mb-4">
        Pague em até 12x sem juros!
      </div>

      <div className="mb-3">
        <h3 className="font-semibold text-sm text-gray-900">
          Cartões de crédito
        </h3>
        <p className="text-xs text-gray-500 mb-2">
          Parcelamento sem juros com bancos selecionados
        </p>
        <div className="flex flex-wrap gap-2">
          {credit.brands.map((brand, idx) => (
            <span
              key={idx}
              className="text-sm px-2 py-1 bg-gray-100 rounded shadow-sm text-gray-800"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-3">
        <h3 className="font-semibold text-sm text-gray-900">
          Cartões de débito
        </h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {debit.brands.map((brand, idx) => (
            <span
              key={idx}
              className="text-sm px-2 py-1 bg-gray-100 rounded shadow-sm text-gray-800"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-2">
        <h3 className="font-semibold text-sm text-gray-900">
          Pagamentos em dinheiro
        </h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {cash_payment.payment_type.map((type, idx) => (
            <span
              key={idx}
              className="text-sm px-2 py-1 bg-gray-100 rounded shadow-sm text-gray-800"
            >
              {type}
            </span>
          ))}
        </div>
      </div>

      <a
        href="#"
        className="text-blue-600 text-sm mt-2 inline-block hover:underline"
      >
        Conheça outros meios de pagamento
      </a>
    </div>
  );
}
