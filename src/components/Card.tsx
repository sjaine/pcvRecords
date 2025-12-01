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
    <article className="flex min-w-[280px] max-w-[340px] flex-shrink-0 flex-col justify-start rounded-[32px] border-[2px] border-gray-200 bg-white p-6 max-h-[500px]">
      {/* Image */}
      <div className="mb-6 h-full w-full rounded-[24px] overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full min-h-[240px] max-h-[300px] min-w-[240px] max-w-[300px] object-cover"
          />
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-2xl text-black font-semibold line-clamp-2">{title}</h3>
        <p className="text-base text-black">{productType}</p>
        <p className="text-base text-black">{price}</p>
        <p className="text-base text-black">In Stock: {inStock}</p>
      </div>

    </article>
  );
}
