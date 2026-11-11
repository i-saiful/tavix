"use client";

import { Carousel} from "tavix";
import { useState } from "react";

const slides = [
  {
    id: 1,
    title: "Build faster",
    image: "/tavix/images/user-avatar.jpg",
  },
  {
    id: 2,
    title: "Stay consistent",
    image: "/tavix/images/user-avatar.jpg",
  },
  {
    id: 3,
    title: "Ship with confidence",
    image: "/tavix/images/user-avatar.jpg",
    ratio: "18:5"
  },
];

export default function CarouselComponent() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="flex flex-col gap-4">
      <h1 className="h1 text-2xl font-bold mb-2">Carousel Component</h1>

      <Carousel
        activeIndex={activeIndex}
        onChange={setActiveIndex}
        loop
        showIndicators
        loading={false}
      >
        {slides.map((slide) => (
          <img
            key={slide.id}
            src={slide.image}
            alt={slide.title}
            className="w-full h-80 object-cover"
          />
        ))}
      </Carousel>
    </section>
  );
}
