# Checkbox

A custom checkbox backed by a native checkbox input and Tavix icons. Use it for independent selections such as preferences, permissions, and terms of service.

## Import Checkbox

Import `Checkbox` from Tavix:

```jsx
import { Checkbox, Checkbox2 } from "tavix";
```

## Component API

```jsx
<Checkbox
  disabled={false}
  className
  size
  {...props}
/>
```

### Props

- `disabled`: Prevents interaction when `true`. Defaults to `false`.
- `className`: Additional classes applied to the checkbox wrapper.
- `size`: Font size applied to the wrapper while preserving scalable icon sizing.
- `...props`: Additional native checkbox attributes and event handlers, such as `checked`, `defaultChecked`, `name`, `value`, `required`, and `onChange`.

## Behavior

- Renders a native checkbox input for standard form and browser behavior.
- Uses the native checked state to determine whether the checkbox is selected.
- Supports both controlled and uncontrolled usage through native checkbox props.
- Calls the native `onChange` handler with the browser change event.
- Prevents interaction and applies the disabled state when `disabled` is `true`.
- Forwards native form attributes such as `name` and `value`.
- Uses Tavix icons to display the checkbox state.
- Preserves scalable icon sizing through the `size` wrapper setting.

## Examples

### Basic checkbox

```jsx
<Checkbox
  name="terms"
  value="accepted"
  aria-label="Accept terms"
  onChange={handleChange}
/>
```

### Controlled checkbox

```jsx
const [accepted, setAccepted] = useState(false);

<Checkbox
  name="terms"
  checked={accepted}
  onChange={(event) => {
    setAccepted(event.target.checked);
  }}
  aria-label="Accept terms and conditions"
/>;
```

### Initially checked

Use `defaultChecked` when the checkbox should be uncontrolled but selected initially:

```jsx
<Checkbox
  name="notifications"
  value="enabled"
  defaultChecked
  aria-label="Enable notifications"
/>;
```

### Disabled checkbox

```jsx
<Checkbox
  name="archived"
  checked
  disabled
  aria-label="Archived setting"
/>;
```

### Checkbox with a visible label

```jsx
<label>
  <Checkbox name="newsletter" value="subscribed" />
  Subscribe to the newsletter
</label>
```

## Accessibility

- Provide a visible label using a `<label>` element whenever possible.
- Use `aria-label` when no visible text label surrounds the checkbox.
- Use `aria-labelledby` when the accessible name is provided by another element.
- Use `disabled` when the user cannot change the checkbox state.
- Use `required` when the checkbox must be selected before form submission.

## Form usage

Checkboxes use native form semantics. Give related controls distinct `name` and `value` attributes when submitting multiple selections:

```jsx
<Checkbox name="features" value="analytics" aria-label="Analytics" />
<Checkbox name="features" value="exports" aria-label="Exports" />
<Checkbox name="features" value="alerts" aria-label="Alerts" />
```

## Notes

- `checked` and `defaultChecked` follow native checkbox behavior.
- Use `checked` with `onChange` for a controlled checkbox.
- Use `defaultChecked` for an uncontrolled checkbox with an initial state.
- The component forwards native checkbox props to the underlying input.
- `className` styles the checkbox wrapper rather than replacing native form behavior.