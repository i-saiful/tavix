"use client";

import { useState } from "react";
import { Slider} from "tavix";

export default function SliderComponent() {
  const [value, setValue] = useState(50);

  return (
    <section className="flex flex-col gap-4">
      <h1 className="h1 mb-4">Slider Component</h1>
      <div className="flex items-center justify-between mb-2 body-md">
        <span>Volume</span>
        <span>{value}</span>
      </div>
      <Slider min={0} max={100} value={value} onChange={(event) => setValue(event.target.value)} />
    </section>
  );
}
