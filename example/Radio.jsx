"use client";

import { Radio} from "tavix";

export default function RadioComponent() {
  const options = [
    {
      value: "email",
      label: "Email updates",
      description: "Product news and account notifications.",
    },
    {
      value: "text",
      label: "Text messages",
      description: "Important updates sent to your phone.",
    },
    {
      value: "none",
      label: "No notifications",
      description: "You can change this preference at any time.",
    },
  ];

  return (
   <section className="flex flex-col gap-4">
      <header className="flex flex-col gap-1">
        <h1 className="h1">Radio Group</h1>
        <p className="text-secondary">
          Choose how you would like to receive updates.
        </p>
      </header>
      <div className="flex flex-row gap-3">
        {options.map((option) => (
          <label
            key={option.value}
            htmlFor={`contact-${option.value}`}
            className="flex items-start gap-3 rounded border p-3 cursor-pointer"
          >
            <Radio
              id={`contact-${option.value}`}
              name="contact-method"
              value={option.value}
              defaultChecked={option.value === "email"}
              className="mt-1"
            />
            <span className="flex flex-col gap-1">
              <span className="font-medium">{option.label}</span>
              <span className="text-secondary">{option.description}</span>
            </span>
          </label>
        ))}
      </div>
    </section>
  );
}