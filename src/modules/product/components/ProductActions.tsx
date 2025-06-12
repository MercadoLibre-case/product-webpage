"use client";

import { useState } from "react";

type Props = {
  stock: number;
};

export default function ProductActions({ stock }: Props) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 w-full max-w-xs space-y-4">
      {/* Envio grátis */}
      <div className="text-sm text-gray-700">
        <span className="text-green-600 font-semibold">Envio grátis</span> a
        todo o país
        <br />
        <span className="text-xs text-gray-500">Calcular quando chega</span>
      </div>

      {/* Estoque + Quantidade */}
      <div>
        <p className="font-semibold">Estoque disponível</p>
        <div className="flex items-center gap-2 mt-1">
          <label className="text-sm font-medium">Quantidade:</label>
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="border rounded-md px-2 py-1 text-sm"
          >
            {Array.from({ length: stock }, (_, i) => i + 1).map((qty) => (
              <option key={qty} value={qty}>
                {qty}
              </option>
            ))}
          </select>
          <span className="text-gray-500 text-sm">({stock} disponíveis)</span>
        </div>
      </div>

      {/* Botões */}
      <div className="flex flex-col gap-2">
        <button className="bg-blue-600 text-white rounded-md py-2 font-semibold hover:bg-blue-700">
          Comprar agora
        </button>
        <button className="bg-blue-100 text-blue-700 rounded-md py-2 font-semibold hover:bg-blue-200">
          Adicionar ao carrinho
        </button>
      </div>

      {/* Simulados: devolução/garantia */}
      <div className="text-xs text-gray-600 space-y-1 pt-2 border-t border-gray-100">
        <p>📦 Devolução grátis em até 30 dias</p>
        <p>🛡 Compra protegida: receba ou seu dinheiro de volta</p>
        <p>📄 1 ano de garantia de fábrica</p>
      </div>
    </div>
  );
}
