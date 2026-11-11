"use client";

import { Checkbox, Input, Radio, Select, Textarea} from "tavix";

export default function FormComponent() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="h1">Form Components</h1>
      <div className="flex gap-4">
        <Input label="First Name" placeholder="Enter your first name" />
        <Input label="Last Name" placeholder="Enter your last name" />
      </div>
      <Input label="Email" type="email" placeholder="Enter your email" />
      <Input label="Phone" type="tel" placeholder="Enter phone number" />
      <Input
        label="Password"
        type="password"
        placeholder="Enter password"
        helperText="Password must be at least 6 characters."
      />
      <Input
        label="Search"
        placeholder="Search..."
        leadingIcon="search"
        trailingIcon="x"
        type="search"
      />
      <Input label="Role" value="User" leadingIcon="user" readOnly />
      <Input
        label="URL"
        type="url"
        placeholder="https://example.com"
        leadingIcon="globe"
      />
      <Input label="Number" type="number" placeholder="Enter number" />
      <div className="inline-flex items-center gap-8 body-lg">
        <div className="inline-flex items-center gap-2">
          <Radio name="gender" value="female" size="1.5rem" />
          <span>Female</span>
        </div>
        <div className="inline-flex items-center gap-2">
          <Radio name="gender" value="male" size="1.5rem" />
          <span>Male</span>
        </div>
      </div>

      <div className="flex gap-4">
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
          options={[
            { value: "bd", label: "Bangladesh" },
            { value: "us", label: "United States" },
            { value: "uk", label: "United Kingdom" },
          ]}
        />
      </div>

      <Textarea
        label="Address"
        helperText="Maximum 500 characters"
        placeholder="Enter address..."
      />
      <div className="inline-flex items-center">
        <Checkbox
          name="terms"
          value="accepted"
          size="1.5rem"
          onChange={(event) => {
            console.log(event.target.checked);
          }}
        />
        <span className="ml-2">I accept the terms and conditions</span>
      </div>
    </section>
  );
}
