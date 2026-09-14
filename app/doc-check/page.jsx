"use client";

import { Input } from "tavix";
export default function InputDocCheck() {
  return (
    <section className="bg-surface rounded">
      <h1 className="mb-4">Input Components</h1>
      <form>
        <BasicInput />
        <RequiredInput />
        <HelperTextInputFields />
        <LeadingInputFields />
        <TrailingInputFields />
        <LeadingTrailingInputFields />
        <ClickableTrailingInputFields />
        <PasswordInputFields />
        <ErrorInputFields />
        <PasswordInputWithErrorFields />
        <DisabledInputFields />
        <ReadonlyInputFields />
        <OtherInputFields />
      </form>
    </section>
  );
}

const BasicInput = () => {
  return (
    <div className="border rounded p-4 flex flex-col gap-3">
      <h5 className="border-b-dashed">Basic Input Fields</h5>
      <Input label="Name" placeholder="Enter your name" />
      <Input label="Email" type="email" placeholder="Enter your email" />
      <Input label="Phone" type="tel" placeholder="Enter phone number" />
    </div>
  );
};

const RequiredInput = () => {
  return (
    <div className="border rounded p-4 flex flex-col gap-3">
      <h5 className="border-b-dashed">Required Input Fields</h5>
      <Input label="Username" placeholder="Enter username" required />
      <Input label="Email" type="email" placeholder="Enter email" required />
    </div>
  );
};

const HelperTextInputFields = () => {
  return (
    <div className="border rounded p-4 flex flex-col gap-3">
      <h5 className="border-b-dashed">Helper Text Input Fields</h5>
      <Input
        label="Username"
        placeholder="Enter username"
        helperText="Username must be at least 6 characters."
      />
    </div>
  );
};

const LeadingInputFields = () => {
  return (
    <div className="border rounded p-4 flex flex-col gap-3">
      <h5 className="border-b-dashed">Leading Input Fields</h5>
      <Input label="Search" placeholder="Search..." leadingIcon="search" />
      <Input
        label="Email"
        type="email"
        placeholder="Enter email"
        leadingIcon="mail"
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter password"
        leadingIcon="lock"
      />{" "}
    </div>
  );
};

const TrailingInputFields = () => {
  return (
    <div className="border rounded p-4 flex flex-col gap-3">
      <h5 className="border-b-dashed">Trailing Input Fields</h5>
      <Input label="Email" placeholder="Enter email" trailingIcon="mail" />
      <Input label="Search" placeholder="Search..." trailingIcon="search" />
    </div>
  );
};

const LeadingTrailingInputFields = () => {
  return (
    <div className="border rounded p-4 flex flex-col gap-3">
      <h5 className="border-b-dashed">Leading and Trailing Input Fields</h5>
      <Input
        label="Search"
        placeholder="Search..."
        leadingIcon="search"
        trailingIcon="x"
      />

      <Input
        label="Email"
        type="email"
        placeholder="Enter email"
        leadingIcon="mail"
        trailingIcon="circle-check"
      />
    </div>
  );
};

const ClickableTrailingInputFields = () => {
  return (
    <div className="border rounded p-4 flex flex-col gap-3">
      <h5 className="border-b-dashed">Clickable Trailing Input Fields</h5>
      <Input
        label="Search"
        placeholder="Search..."
        trailingIcon="search"
        onTrailingIconClick={() => {
          console.log("Search clicked");
        }}
      />
      <Input
        label="Clear"
        placeholder="Some value"
        trailingIcon="x"
        onTrailingIconClick={() => {
          console.log("Clear clicked");
        }}
      />
    </div>
  );
};

const PasswordInputFields = () => {
  return (
    <div className="border rounded p-4 flex flex-col gap-3">
      <h5 className="border-b-dashed">Password Input Fields</h5>
      <Input label="Password" type="password" placeholder="Enter password" />

      <Input
        label="Password"
        type="password"
        placeholder="Enter password"
        leadingIcon="lock"
      />
    </div>
  );
};

const ErrorInputFields = () => {
  return (
    <div className="border rounded p-4 flex flex-col gap-3">
      <h5 className="border-b-dashed">Error Input Fields</h5>
      <Input
        label="Email"
        type="email"
        placeholder="Enter email"
        error="Please enter a valid email address."
      />
      <Input
        label="Username"
        placeholder="Enter username"
        leadingIcon="user"
        error="Username is required."
      />
      <Input
        label="Search"
        placeholder="Search..."
        trailingIcon="search"
        error="Search value is invalid."
      />
    </div>
  );
};

const PasswordInputWithErrorFields = () => {
  return (
    <div className="border rounded p-4 flex flex-col gap-3">
      <h5 className="border-b-dashed">Password Input with Error</h5>
      <Input
        label="Password"
        type="password"
        placeholder="Enter password"
        error="Password must be at least 8 characters."
      />

      <Input
        label="Password"
        type="password"
        placeholder="Enter password"
        leadingIcon="lock"
        error="Password is incorrect."
      />
    </div>
  );
};

const DisabledInputFields = () => {
  return (
    <div className="border rounded p-4 flex flex-col gap-3">
      <h5 className="border-b-dashed">Disabled Input Fields</h5>
      <Input label="Disabled" placeholder="Disabled input" disabled />

      <Input
        label="Disabled"
        placeholder="Disabled input"
        leadingIcon="user"
        disabled
      />

      <Input
        label="Disabled"
        placeholder="Disabled input"
        trailingIcon="search"
        disabled
      />
    </div>
  );
};

const ReadonlyInputFields = () => {
  return (
    <div className="border rounded p-4 flex flex-col gap-3">
      <h5 className="border-b-dashed">Readonly Input Fields</h5>
      <Input label="Read Only" value="Read only value" readOnly />

      <Input
        label="Read Only"
        value="Read only value"
        leadingIcon="user"
        readOnly
      />
    </div>
  );
};

const OtherInputFields = () => {
  return (
    <div className="border rounded p-4 flex flex-col gap-3">
      <h5 className="border-b-dashed">Other Input Fields</h5>
      <Input label="URL" type="url" placeholder="https://example.com" />

      <Input label="Number" type="number" placeholder="Enter number" />

      <Input label="Search" type="search" placeholder="Search..." />
    </div>
  );
};
