# Autocomplete

A searchable combobox for filtering and selecting from a list of options. It supports controlled values, disabled options, loading states, empty results, clearing, and keyboard navigation.

## Import Autocomplete

Import `Autocomplete` from Tavix:

```jsx
import { Autocomplete } from "tavix";
```

## Component API

```jsx
<Autocomplete
  label
  options={[]}
  value=""
  onChange
  placeholder="Search..."
  disabled={false}
  error
  helperText
  required={false}
  loading={false}
  noOptionsText="No results found"
  className
  name
  {...props}
/>
```

### Props

- `label`: Visible label associated with the combobox.
- `options`: Options available for filtering and selection. Each option uses `{ value, label, disabled? }`.
- `value`: Current selected or typed value. Use this to control the component.
- `onChange`: Callback called when the typed or selected value changes. Receives `(value, option)`.
- `placeholder`: Placeholder displayed when the combobox is empty. Defaults to `Search...`.
- `disabled`: Prevents typing, opening, and selection when `true`.
- `error`: Validation message displayed below the combobox.
- `helperText`: Supporting text displayed when there is no `error`.
- `required`: Marks the field as required. Defaults to `false`.
- `loading`: Displays a loading state while options are being loaded.
- `noOptionsText`: Message displayed when no options match the search. Defaults to `No results found`.
- `className`: Additional classes applied to the component.
- `name`: Name used when the field is included in a form.
- `...props`: Additional native input attributes and event handlers.

### Option shape

Each option must include a `value` and `label`. Set `disabled` to `true` to prevent an option from being selected:

```jsx
const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry", disabled: true },
];
```

## Behavior

- Filters options as the user types.
- Calls `onChange("", null)` when the input is cleared or the typed value has no selected option.
- Calls `onChange(value, option)` when an option is selected.
- Does not allow disabled options to be selected.
- Opens the options list while the field is focused and supports outside-click closing.
- Supports Arrow Up and Arrow Down to move through options.
- Pressing Enter selects the highlighted option.
- Pressing Escape closes the options list without selecting an option.
- Displays the loading state instead of the option list when `loading` is `true`.
- Displays `noOptionsText` when filtering produces no results.
- Displays `error` instead of `helperText` when both are provided.

## Examples

### Basic autocomplete

```jsx
<Autocomplete
  label="Fruit"
  options={[
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
  ]}
  onChange={(value, option) => {
    setFruit(value);
    setSelectedFruit(option);
  }}
/>
```

### Controlled value

```jsx
const [country, setCountry] = useState("");

<Autocomplete
  label="Country"
  value={country}
  options={[
    { value: "ca", label: "Canada" },
    { value: "de", label: "Germany" },
    { value: "jp", label: "Japan" },
  ]}
  onChange={(value, option) => {
    setCountry(value);
    console.log("Selected option:", option);
  }}
/>;
```

### Required and helper text

```jsx
<Autocomplete
  label="Assignee"
  options={[
    { value: "alex", label: "Alex Morgan" },
    { value: "sam", label: "Sam Lee" },
  ]}
  required
  helperText="Choose the person responsible for this task."
  onChange={(value) => {
    console.log(value);
  }}
/>;
```

### Disabled options

```jsx
<Autocomplete
  label="Plan"
  options={[
    { value: "starter", label: "Starter" },
    { value: "pro", label: "Pro" },
    { value: "enterprise", label: "Enterprise", disabled: true },
  ]}
  onChange={(value, option) => {
    console.log(value, option);
  }}
/>;
```

### Loading and empty states

```jsx
<Autocomplete
  label="Search users"
  options={[]}
  loading
  onChange={() => {}}
/>;

<Autocomplete
  label="Search products"
  options={[]}
  noOptionsText="No products found"
  onChange={() => {}}
/>;
```

### Error and disabled states

```jsx
<Autocomplete
  label="Project"
  options={[
    { value: "website", label: "Website redesign" },
    { value: "mobile", label: "Mobile app" },
  ]}
  error="Please select a project."
  onChange={() => {}}
/>;

<Autocomplete
  label="Disabled field"
  options={[]}
  disabled
  onChange={() => {}}
/>;
```

## Accessibility

- Use a clear `label` so the combobox has an accessible name.
- Use `required` and `error` to communicate validation state.
- Keep option labels concise and descriptive for keyboard and assistive technology users.
- Disabled options remain visible but cannot be selected.

## Notes

- `Autocomplete` uses option `value` values for the controlled field value.
- The second `onChange` argument is the selected option, or `null` while typing or clearing.
- Option values should be stable and unique within the `options` array.
- Additional native input attributes and event handlers can be passed through `...props`.