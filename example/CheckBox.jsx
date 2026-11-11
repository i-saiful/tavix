"use client";

import { Checkbox} from "tavix";

export default function CheckBoxComponent() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="h1">Checkbox</h1>
      <label className="inline-flex items-center gap-2 cursor-pointer text-3xl">
        <Checkbox name="terms" value="accepted" required />
        <span className="font-monospace">I agree to the terms and conditions.</span>
      </label>
    </section>
  );
}
