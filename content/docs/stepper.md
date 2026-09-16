# Stepper

Use the `Stepper` component to show a progression through sequential steps, such as onboarding flows, checkout, or multi-step forms.

## Import Stepper

Import `Stepper` from Tavix:

```jsx
import { Stepper } from "tavix";
```

## Component API

```jsx
<Stepper
  steps={[]}
  currentStep={0}
  className
  onStepClick
  ...props
/>
```

### Props

- `steps`: Array of step objects. Each step may include `id`, `label`, `description`, and `disabled`.
- `currentStep`: Index of the current active step.
- `className`: Additional class names for the stepper wrapper.
- `onStepClick`: Callback fired when a clickable step is selected.
- `...props`: Additional props passed to the root wrapper.

## Behavior

- Renders each step as a horizontal sequence with completed, current, and upcoming states.
- Shows completed steps using a check indicator and current steps using a selected indicator.
- Marks upcoming steps with a neutral indicator.
- Uses `aria-current="step"` when the current step is active.
- Disables step clicks when a step is marked as disabled or when no callback is provided.
- Allows custom step descriptions to be shown beneath each label.

## Examples

### Basic stepper

```jsx
<Stepper
  steps={[
    { label: "Account" },
    { label: "Profile" },
    { label: "Review" },
  ]}
  currentStep={1}
/>
```

### With descriptions and custom step behavior

```jsx
<Stepper
  steps={[
    { label: "Shipping", description: "Add address" },
    { label: "Payment", description: "Confirm billing" },
    { label: "Done", description: "Finish order" },
  ]}
  currentStep={2}
  onStepClick={(index, step) => console.log(index, step.label)}
/>
```

## Notes

- This component is ideal for linear step-based experiences.
- If the consuming app needs non-linear navigation, a different pattern may be more appropriate.
