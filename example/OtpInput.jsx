"use client";

import { OtpInput} from "tavix";

export default function OtpInputComponent() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="h1">OTP Input Component</h1>
      <OtpInput
        length={6}
        onChange={(value) => {
          console.log("OTP:", value);
        }}
        onComplete={(value) => {
          console.log("OTP completed:", value);
        }}
      />
    </section>
  );
}
