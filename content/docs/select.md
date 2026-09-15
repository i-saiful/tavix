# Select

A custom accessible combobox for choosing one option from a list. It supports controlled and uncontrolled selection, disabled options, validation states, and keyboard navigation.

## Import Select

Import `Select` from Tavix:

```jsx
import { Select } from "tavix";
```

## Component API

```jsx
<Select
  label
  options={[]}
  error
  helperText
  leadingIcon
  required={false}
  placeholder="Select an option"
  disabled={false}
  value
  defaultValue=""
  onChange
  {...props}
/>
```

### Props

- `label`: Visible label associated with the combobox.
- `options`: Options available for selection. Each option uses `{ value, label, disabled? }`.
- `value`: Controlled selected option value.
- `defaultValue`: Initial selected option value for uncontrolled usage. Defaults to an empty string.
- `onChange`: Callback called after selection. Receives `{ target: { name, value } }`.
- `error`: Validation message displayed below the combobox.
- `helperText`: Supporting text displayed when there is no `error`.
- `leadingIcon`: Tavix icon name rendered inside the control.
- `required`: Marks the field as required. Defaults to `false`.
- `placeholder`: Text displayed when no option is selected. Defaults to `Select an option`.
- `disabled`: Prevents opening and selection when `true`. Defaults to `false`.
- `...props`: Additional native-style attributes, including `id`, `name`, and event handlers.

### Option shape

Each option must include a `value` and `label`. Set `disabled` to `true` to prevent an option from being selected:

```jsx
const options = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "xx", label: "Unavailable", disabled: true },
];
```

## Behavior

- Renders a custom combobox rather than a native `<select>` element.
- Displays the selected option label in the control.
- Calls `onChange` with `{ target: { name, value } }` after an option is selected.
- Does not allow disabled options to be selected.
- Opens the option list when the control is clicked.
- Supports Enter and Space to open the option list.
- Supports Arrow Up and Arrow Down to move through available options.
- Pressing Enter selects the highlighted option.
- Pressing Escape closes the option list without changing the selection.
- Pressing Tab closes the option list and preserves normal keyboard navigation.
- Closes the option list when the user clicks outside the component.
- Displays `error` instead of `helperText` when both are provided.
- Prevents opening and selection when `disabled` is `true`.

## Examples

### Basic select

```jsx
<Select
  label="Country"
  name="country"
  options={[
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "xx", label: "Unavailable", disabled: true },
  ]}
  onChange={(event) => setCountry(event.target.value)}
/>
```

### Controlled select

```jsx
const [country, setCountry] = useState("");

<Select
  label="Country"
  name="country"
  value={country}
  options={[
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "de", label: "Germany" },
  ]}
  onChange={(event) => {
    setCountry(event.target.value);
  }}
/>;
```

### Uncontrolled select

Use `defaultValue` when the component should manage its own selection after an initial value:

```jsx
<Select
  label="Language"
  name="language"
  defaultValue="en"
  options={[
    { value: "en", label: "English" },
    { value: "fr", label: "French" },
    { value: "es", label: "Spanish" },
  ]}
  onChange={(event) => {
    console.log(event.target.value);
  }}
/>;
```

### Required and helper text

```jsx
<Select
  label="Team"
  name="team"
  options={[
    { value: "design", label: "Design" },
    { value: "engineering", label: "Engineering" },
  ]}
  required
  helperText="Choose the team responsible for this request."
  onChange={handleChange}
/>;
```

### Error and disabled states

```jsx
<Select
  label="Priority"
  options={[
    { value: "low", label: "Low" },
    { value: "high", label: "High" },
  ]}
  error="Please choose a priority."
  onChange={handleChange}
/>;

<Select
  label="Archived project"
  value="legacy"
  options={[{ value: "legacy", label: "Legacy project" }]}
  disabled
  onChange={handleChange}
/>;
```

## Change events

The change event follows a native-style shape and includes the field name and selected value:

```jsx
<Select
  name="country"
  options={[
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
  ]}
  onChange={(event) => {
    console.log(event.target.name); // "country"
    console.log(event.target.value); // "ca"
  }}
/>;
```

## Accessibility

- Use a clear `label` so the combobox has an accessible name.
- The control exposes combobox and listbox ARIA attributes.
- Use `required` and `error` to communicate validation state.
- Keep option labels concise and descriptive for keyboard and assistive technology users.
- Disabled options remain visible but cannot be selected.
- Use `disabled` when the field cannot currently be changed.

## Notes

- Select renders a custom control rather than a native `<select>` element.
- Use `value` with `onChange` for controlled usage.
- Use `defaultValue` for uncontrolled usage with an initial selection.
- Option values should be stable and unique within the `options` array.
- The `name` prop is included in the object passed to `onChange`.
- Additional native-style attributes such as `id` and `name` can be passed through `...props`.