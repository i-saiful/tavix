# Textarea

A labeled native textarea for multi-line text with helper text, validation feedback, and accessible descriptions.

## Import Textarea

Import `Textarea` from Tavix:

```jsx
import { Textarea } from "tavix";
```

## Component API

```jsx
<Textarea
  label
  error
  helperText
  required={false}
  {...props}
/>
```

### Props

- `label`: Visible label associated with the textarea.
- `error`: Validation message. Takes precedence over `helperText`.
- `helperText`: Supporting text shown below the textarea when there is no `error`.
- `required`: Marks the textarea as required. Defaults to `false`.
- `...props`: Additional native textarea attributes and event handlers, including `id`, `name`, `value`, `defaultValue`, `placeholder`, `rows`, `cols`, `maxLength`, `disabled`, `readOnly`, and events.

## Behavior

- Renders a native `<textarea>` element for standard browser and form behavior.
- Generates an accessible id when no `id` is provided.
- Associates the label with the textarea through `htmlFor` and `id`.
- Adds `aria-required` when `required` is `true`.
- Adds `aria-invalid` when `error` is provided.
- Links helper or error text through `aria-describedby`.
- Gives error text an `alert` role.
- Displays `error` instead of `helperText` when both are provided.
- Supports controlled and uncontrolled usage through native textarea props.
- Forwards native attributes and event handlers to the textarea.

## Examples

### Basic textarea

```jsx
<Textarea label="Message" rows={4} placeholder="Write a message" />

<Textarea
  label="Description"
  rows={6}
  placeholder="Describe your project"
/>
```

### Controlled textarea

```jsx
const [notes, setNotes] = useState("");

<Textarea
  label="Notes"
  value={notes}
  onChange={(event) => setNotes(event.target.value)}
  helperText="Maximum 500 characters."
/>;
```

### Uncontrolled textarea

Use `defaultValue` when the component should manage its own value after an initial value:

```jsx
<Textarea
  label="Summary"
  defaultValue="Initial summary"
  rows={4}
  onChange={(event) => {
    console.log(event.target.value);
  }}
/>;
```

### Required and helper text

```jsx
<Textarea
  label="Feedback"
  required
  helperText="Tell us what we can improve."
  rows={5}
/>;
```

### Error, disabled, and read-only states

```jsx
<Textarea
  label="Message"
  error="Message is required."
  rows={4}
/>

<Textarea
  label="Disabled message"
  value="This message cannot be edited."
  disabled
  rows={4}
/>

<Textarea
  label="Read-only notes"
  value="These notes are read-only."
  readOnly
  rows={4}
/>;
```

### Character limit

Use native `maxLength` to limit the number of characters:

```jsx
<Textarea
  label="Bio"
  rows={4}
  maxLength={160}
  helperText="Maximum 160 characters."
/>;
```

## Change events

Textarea change handlers receive the native input event. Read the current text from `event.target.value`:

```jsx
<Textarea
  label="Message"
  onChange={(event) => {
    setMessage(event.target.value);
  }}
/>
```

## Accessibility

- Provide a clear `label` so the textarea has an accessible name.
- The generated label connection uses `htmlFor` and `id`.
- Use `required` to communicate that text must be provided.
- Use `error` to communicate validation feedback.
- Helper and error text are linked to the textarea through `aria-describedby`.
- Use `rows` to provide an appropriate initial editing area.

## Notes

- Textarea renders a native `<textarea>` and preserves standard browser behavior.
- Use `value` with `onChange` for controlled usage.
- Use `defaultValue` for uncontrolled usage with an initial value.
- Native props such as `rows`, `cols`, `maxLength`, `disabled`, and `readOnly` are supported through `...props`.
- When both `error` and `helperText` are provided, only the error message is displayed.
