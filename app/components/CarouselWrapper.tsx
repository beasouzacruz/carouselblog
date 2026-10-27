
"use client";

import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("./Carousel"), {
  ssr: false,
  loading: () => (
    <div className="mx-auto my-6 h-[360px] w-1/2 animate-pulse rounded-2xl bg-gray-200" />
  ),
});

export default function CarouselWrapper() {
  return <Carousel />;
}
