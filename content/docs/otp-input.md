# OTP Input

A multi-field numeric input for one-time passwords, verification codes, and other short security codes.

## Import OTP Input

Import `OtpInput` from Tavix:

```jsx
import { OtpInput } from "tavix";
```

## Component API

```jsx
<OtpInput
  length={6}
  value
  defaultValue=""
  onChange
  onComplete
  disabled={false}
  error={false}
  autoFocus={true}
  size="md"
  className
  {...props}
/>
```

### Props

- `length`: Number of individual input fields. Defaults to `6`.
- `value`: Controlled code value.
- `defaultValue`: Initial code value for uncontrolled usage. Defaults to an empty string.
- `onChange`: Callback called when the code changes.
- `onComplete`: Callback called when all fields contain digits. Receives the complete code.
- `disabled`: Prevents editing and interaction when `true`. Defaults to `false`.
- `error`: Applies the error state when `true`. Defaults to `false`.
- `autoFocus`: Focuses the first field when the component mounts. Defaults to `true`.
- `size`: Controls the input size. Defaults to `md`.
- `className`: Additional classes applied to the wrapper.
- `...props`: Additional input attributes and event handlers.

## Behavior

- Renders one input field for each position in the code.
- Accepts numeric digits only.
- Automatically advances to the next field after a digit is entered.
- Moves to the previous field when Backspace or Delete is pressed.
- Supports Arrow Left and Arrow Right navigation between fields.
- Supports pasting a complete code into the focused field.
- Calls `onChange` whenever the code changes.
- Calls `onComplete` when every field contains a digit.
- Focuses the first field automatically when `autoFocus` is `true`.
- Prevents editing when `disabled` is `true`.
- Applies the error styling when `error` is `true`.
- Exposes the wrapper as a group and gives each field a digit-specific accessible label.

## Examples

### Basic verification code

```jsx
<OtpInput
  length={6}
  autoFocus
  onChange={setCode}
  onComplete={(code) => verifyCode(code)}
/>
```

### Controlled value

```jsx
const [code, setCode] = useState("");

<OtpInput
  length={6}
  value={code}
  onChange={setCode}
  onComplete={(completeCode) => {
    verifyCode(completeCode);
  }}
/>;
```

### Uncontrolled value

Use `defaultValue` when the component should manage its own value after an initial code:

```jsx
<OtpInput
  length={6}
  defaultValue="123"
  onComplete={(code) => verifyCode(code)}
/>;
```

### Custom length and size

```jsx
<OtpInput
  length={4}
  size="lg"
  autoFocus
  onComplete={(code) => confirmPin(code)}
/>;
```

### Error and disabled states

```jsx
<OtpInput
  length={6}
  error
  onChange={setCode}
/>;

<OtpInput
  length={6}
  value="123456"
  disabled
/>;
```

## Code changes

Use `onChange` to track partial input and `onComplete` to respond only when the code is full:

```jsx
<OtpInput
  length={6}
  onChange={(code) => {
    setCode(code);
  }}
  onComplete={(code) => {
    submitCode(code);
  }}
/>;
```

`onComplete` receives the complete code as a string. Use the `length` prop to determine when the code is complete.

## Accessibility

- The wrapper exposes the fields as a group.
- Each field provides a digit-specific accessible label.
- Keep surrounding text clear about what the code is used for.
- Use the `error` state to communicate that the entered code is invalid.
- Use `disabled` when the code cannot currently be edited.
- Keep `autoFocus` enabled only when moving focus automatically is appropriate for the surrounding workflow.

## Notes

- OTP Input accepts digits and ignores non-numeric characters.
- Values are represented as strings so leading zeroes are preserved.
- Use `value` with `onChange` for controlled usage.
- Use `defaultValue` for uncontrolled usage with an initial code.
- Paste, Backspace, Delete, and arrow navigation work across the individual fields.