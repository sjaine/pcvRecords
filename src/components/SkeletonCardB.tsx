export default function SkeletonCardB() {
    return (
      <article className="flex w-[340px] h-[530px] flex-shrink-0 flex-col justify-start rounded-[32px] border-[2px] border-gray-200 bg-white p-6 animate-pulse">
        <div className="mb-6 w-[280px] aspect-square bg-gray-300 rounded-[24px] aspect-square overflow-hidden">
        </div>
         
        <div className="flex flex-col gap-3">
          <div className="h-7 w-3/4 bg-gray-300 rounded-xl" />
          <div className="h-5 w-1/2 bg-gray-300 rounded-xl" />
          <div className="h-5 w-1/3 bg-gray-300 rounded-xl" />
          <div className="h-5 w-1/3 bg-gray-300 rounded-xl" />
        </div>
      </article>
    );
  }
  