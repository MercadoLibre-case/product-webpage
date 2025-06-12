type SellerProduct = {
    id: string;
    title: string;
    image: string;
  };
  
  type Props = {
    name: string;
    coverImage: string;
    reputation: number;
    products: SellerProduct[];
  };
  
  export default function SellerCard({ name, coverImage, reputation, products }: Props) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-4 w-full max-w-xs space-y-4">
        {/* Capa da loja */}
        <img
          src={coverImage}
          alt="Capa do vendedor"
          className="w-full h-24 object-cover rounded-md"
        />
  
        {/* Nome do vendedor */}
        <div className="text-sm font-semibold text-gray-800">{name}</div>
  
        {/* Reputação */}
        <div className="text-xs text-gray-500">Reputação: {reputation}/5</div>
  
        {/* Quantidade de produtos */}
        <div className="text-xs text-gray-500">{products.length} produtos do vendedor</div>
  
        {/* Produtos (2 primeiros apenas) */}
        <div className="flex gap-2">
          {products.slice(0, 2).map((prod) => (
            <img
              key={prod.id}
              src={prod.image}
              alt={prod.title}
              title={prod.title}
              className="w-16 h-16 object-contain border rounded-md"
            />
          ))}
        </div>
  
        {/* Link para a loja */}
        <a
          href="#"
          className="text-blue-600 text-sm font-medium hover:underline block pt-2"
        >
          Ir para a loja oficial
        </a>
      </div>
    );
  }
  