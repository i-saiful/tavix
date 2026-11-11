"use client";

import { Select } from "tavix";
import { useState } from "react";

const countries = [
  { value: "af", label: "Afghanistan" },
  { value: "ao", label: "Angola" },
  { value: "ar", label: "Argentina" },
  { value: "bd", label: "Bangladesh" },
];

export default function SelectComponent() {
  const [country, setCountry] = useState("");
  return (
    <section className="flex flex-col gap-4">
      <h1 className="h1 mb-4">Select Components</h1>

      <Select
        label="Country with state"
        name="country"
        placeholder="Select country"
        value={country}
        onChange={(event) => setCountry(event.target.value)}
        options={countries}
      />

      <Select
        label="Country"
        placeholder="Select country"
        options={[
          { value: "bd", label: "Bangladesh" },
          { value: "us", label: "United States" },
          { value: "uk", label: "United Kingdom" },
        ]}
      />

      <Select
        label="Country"
        placeholder="Select country"
        leadingIcon="globe"
        options={[
          { value: "bd", label: "Bangladesh" },
          { value: "us", label: "United States" },
        ]}
      />

      <Select
        label="Country"
        placeholder="Select country"
        error="Please select a country"
        options={[
          { value: "bd", label: "Bangladesh" },
          { value: "us", label: "United States" },
        ]}
      />

      <Select
        label="Role"
        name="role"
        defaultValue="user"
        required
        options={[
          { value: "user", label: "User" },
          { value: "admin", label: "Admin" },
        ]}
      />
    </section>
  );
}
