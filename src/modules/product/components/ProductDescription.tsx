type Props = {
  description: string;
};

export default function ProductDescription({ description }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mt-4 mx-2">
      <h2 className="text-xl font-semibold mb-2">Descrição</h2>
      <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
        {description}
      </p>
    </div>
  );
}
