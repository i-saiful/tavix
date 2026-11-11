"use client";

import { Autocomplete } from "tavix";
import { useState } from "react";

const countries = [
  { value: "af", label: "Afghanistan" },
  { value: "ao", label: "Angola" },
  { value: "ar", label: "Argentina" },
  { value: "bd", label: "Bangladesh" },
];

export default function AutocompleteComponent() {
  const [country, setCountry] = useState("");

  return (
    <section className="flex flex-col gap-4">
      <h1 className="h1">Autocomplete Components</h1>
      <Autocomplete
        label="Country"
        placeholder="Search country..."
        options={countries}
        value={country}
        onChange={setCountry}
        noOptionsText="No option found"
        helperText="Search and select your country"
      />
    </section>
  );
}
