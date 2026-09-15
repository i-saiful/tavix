# Radio

A custom radio control backed by a native radio input. Use radio buttons when a user must choose one option from a group.

## Import Radio

Import `Radio` from Tavix:

```jsx
import { Radio } from "tavix";
```

## Component API

```jsx
<Radio
  disabled={false}
  className
  size
  {...props}
/>
```

- `disabled`: Prevents interaction when `true`. Defaults to `false`.
- `className`: Additional classes applied to the radio wrapper.
- `size`: Font size applied to the wrapper while preserving scalable icon sizing.
- `...props`: Additional native radio attributes and event handlers, such as `checked`, `defaultChecked`, `name`, `value`, `required`, and `onChange`.

## Behavior

- Renders a native radio input for standard form and browser behavior.
- Groups related radios through the native `name` attribute.
- Allows only one radio in a group to be selected at a time.
- Supports controlled and uncontrolled usage through native radio props.
- Calls the native `onChange` handler with the browser change event.
- Prevents interaction and applies the disabled state when `disabled` is `true`.
- Forwards native form attributes such as `name` and `value`.
- Uses Tavix icons to display the radio state.
- Preserves scalable icon sizing through the `size` wrapper setting.

## Examples

### Basic radio group

```jsx
<fieldset>
  <legend>Select a plan</legend>

  <label>
    <Radio name="plan" value="starter" />
    Starter
  </label>

  <label>
    <Radio name="plan" value="pro" />
    Pro
  </label>
</fieldset>
```

### Controlled radio group

```jsx
const [plan, setPlan] = useState("starter");

<Radio
  name="plan"
  value="pro"
  checked={plan === "pro"}
  onChange={(event) => {
    setPlan(event.target.value);
  }}
  aria-label="Pro plan"
/>;
```

Use the same `name` and compare each radio's `value` with the selected state:

```jsx
<Radio
  name="plan"
  value="starter"
  checked={plan === "starter"}
  onChange={(event) => setPlan(event.target.value)}
  aria-label="Starter plan"
/>;

<Radio
  name="plan"
  value="pro"
  checked={plan === "pro"}
  onChange={(event) => setPlan(event.target.value)}
  aria-label="Pro plan"
/>;
```

### Initially selected radio

Use `defaultChecked` when the group should be uncontrolled but have an initial selection:

```jsx
<Radio
  name="delivery"
  value="standard"
  defaultChecked
  aria-label="Standard delivery"
/>;
```

### Disabled radio

```jsx
<Radio
  name="plan"
  value="enterprise"
  disabled
  aria-label="Enterprise plan"
/>;
```

## Form usage

Radio buttons use native form semantics. Give all options in one group the same `name` and give each option a distinct `value`:

```jsx
<Radio name="payment" value="card" aria-label="Credit card" />
<Radio name="payment" value="bank" aria-label="Bank transfer" />
<Radio name="payment" value="cash" aria-label="Cash" />
```

When the form is submitted, the selected option is represented by the group's name and that option's value.

## Accessibility

- Group related radio buttons with the same `name`.
- Use a visible `<label>` whenever possible.
- Use `aria-label` when no visible text label surrounds a radio.
- Use a `<fieldset>` and `<legend>` to label a complete group.
- Use `aria-labelledby` when the accessible name is provided by another element.
- Use `disabled` when an option cannot be selected.

## Notes

- `checked` and `defaultChecked` follow native radio behavior.
- Use `checked` with `onChange` for a controlled radio group.
- Use `defaultChecked` for an uncontrolled group with an initial selection.
- Radios in the same group must share a `name` value.
- The component forwards native radio props to the underlying input.
- `className` styles the radio wrapper rather than replacing native form behavior.