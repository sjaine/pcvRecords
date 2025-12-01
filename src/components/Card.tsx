type CardProps = {
  title: string;
  productType: string;
  price: string;
  inStock: string;
  imageUrl?: string;
};

export default function Card({
  title,
  productType,
  price,
  inStock,
  imageUrl,
}: CardProps) {
  return (
    <article className="flex min-w-[300px] max-w-[350px] flex-shrink-0 flex-col justify-start rounded-[32px] border-[2px] border-gray-200 bg-white p-6 max-h-[550px]">
      {/* Image */}
      <div className="mb-6 h-72 w-full rounded-[24px] bg-gray-200 overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="h-[300px] w-[300px] object-cover"
          />
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-3xl text-black font-semibold line-clamp-2">{title}</h3>
        <p className="text-lg text-black">{productType}</p>
        <p className="text-lg text-black">{price}</p>
        <p className="text-lg text-black">In Stock: {inStock}</p>
      </div>

    </article>
  );
}
