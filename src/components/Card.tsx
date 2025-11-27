"use client";

import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Card() {
  return (
    <article className="flex min-w-[300px] max-w-[350px] flex-shrink-0 flex-col justify-between rounded-[32px] border-[2px] border-gray-200 bg-white p-6">
      {/* Image placeholder */}
      <div className="mb-6 h-72 w-full rounded-[24px] bg-gray-200" />

      <div>
        <h3 className="text-lg font-semibold">Album title</h3>
        <p className="text-sm text-gray-600">Artist</p>
      </div>

      <button className="mt-6 inline-flex items-center justify-between rounded-full bg-black px-5 py-2 text-sm font-medium text-white">
        <span>View</span>
        <ChevronRightIcon className="size-4" />
      </button>
    </article>
  );
}
