export default function SkeletonCard() {
    return (
      <article className="flex min-w-[300px] max-w-[350px] flex-shrink-0 flex-col justify-start rounded-[32px] border-[2px] border-gray-200 bg-white p-6 h-[550px] animate-pulse">
        <div className="mb-6 h-[300px] w-[300px] rounded-[24px] bg-gray-300" />
  
        <div className="flex flex-col gap-3">
          <div className="h-7 w-3/4 bg-gray-300 rounded-xl" />
          <div className="h-5 w-1/2 bg-gray-300 rounded-xl" />
          <div className="h-5 w-1/3 bg-gray-300 rounded-xl" />
          <div className="h-5 w-1/3 bg-gray-300 rounded-xl" />
        </div>
      </article>
    );
  }
  