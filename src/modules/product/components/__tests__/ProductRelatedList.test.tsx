import React from "react";
import { render, screen } from "@testing-library/react";
import ProductRelatedList from "../ProductRelatedList";

const mockProducts = [
  {
    id: "1",
    title: "Produto Teste",
    price: {
      amount: 199.99,
      currency: "BRL",
    },
    thumbnail: "https://via.placeholder.com/150",
    category: "Eletrônicos",
  },
];

describe("ProductRelatedList", () => {
  it("renderiza título e produtos corretamente", () => {
    render(<ProductRelatedList products={mockProducts} />);

    expect(
      screen.getByRole("heading", { name: /produtos relacionados/i })
    ).toBeInTheDocument();

    expect(screen.getByText(/produto teste/i)).toBeInTheDocument();
    expect(screen.getByText("R$199.99")).toBeInTheDocument(); // valor formatado
  });

  it("renderiza mensagem quando não há produtos", () => {
    render(<ProductRelatedList products={[]} />);

    expect(
      screen.getByText(/não identificamos produtos semelhantes ainda/i)
    ).toBeInTheDocument();
  });
});
