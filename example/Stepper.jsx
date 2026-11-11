"use client";

import { Stepper} from "tavix";

const steps = [
  {
    label: "Account",
    description: "Create your account",
  },
  {
    label: "Personal Information",
    description: "Enter your personal details",
  },
  {
    label: "Verification",
    description: "Verify your account",
  },
  {
    label: "Complete",
    description: "Finish the setup",
  },
];

export default function StepperComponent() {
  return (
   <section className="flex flex-col gap-4">
      <h1 className="h1">Stepper Components</h1>

      <Stepper steps={steps} currentStep={1} />

      <Stepper
        steps={steps}
        currentStep={2}
        onStepClick={(index, step) => {
          console.log(index, step);
        }}
      />
    </section>
  );
}
