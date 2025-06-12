type Attribute = {
  name: string;
  value: string;
};

type Props = {
  attributes: Attribute[];
  description: string;
};

export default function ProductSpecs({ attributes, description }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 w-full space-y-6">
      {/* Características */}
      <div>
        <h2 className="text-xl font-semibold mb-4">
          Características do produto
        </h2>
        <div className="grid sm:grid-cols-2 gap-y-6 gap-x-10">
          {attributes.map((attr, idx) => (
            <div key={idx} className="grid grid-cols-[20px_1fr] gap-3">
              <span className="text-blue-600 mt-1">🔹</span>
              <div className="space-y-1">
                <p className="text-sm text-gray-800 font-medium">{attr.name}</p>
                <p className="text-sm text-gray-600">{attr.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Descrição */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Descrição</h2>
        <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
}
