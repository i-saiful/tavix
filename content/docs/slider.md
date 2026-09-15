# Slider

A styled native range input for selecting a numeric value within a range. It supports controlled and uncontrolled usage with configurable bounds and step size.

## Import Slider

Import `Slider` from Tavix:

```jsx
import { Slider } from "tavix";
```

## Component API

```jsx
<Slider
  min={0}
  max={100}
  step={1}
  value
  defaultValue={0}
  onChange
  disabled={false}
  className
  {...props}
/>
```

### Props

- `min`: Minimum allowed value for the range.
- `max`: Maximum allowed value for the range.
- `step`: Increment between selectable values.
- `value`: Controlled current value.
- `defaultValue`: Initial value for uncontrolled usage. Defaults to `0`.
- `onChange`: Callback called when the slider value changes. Receives the native input event.
- `disabled`: Prevents interaction when `true`. Defaults to `false`.
- `className`: Additional classes applied to the slider wrapper.
- `...props`: Additional native range input attributes and event handlers.

## Behavior

- Renders a native `<input type="range">` for standard browser behavior.
- Supports controlled usage through `value` and `onChange`.
- Supports uncontrolled usage through `defaultValue`.
- Restricts the value to the configured `min` and `max` bounds.
- Moves between values using the configured `step` increment.
- Calls `onChange` with the native input event as the thumb moves.
- Exposes the current value through `event.target.value`.
- Calculates progress styling from the current value.
- Prevents interaction when `disabled` is `true`.

## Examples

### Basic slider

```jsx
<Slider
  aria-label="Volume"
  min={0}
  max={10}
  step={1}
  defaultValue={5}
  onChange={(event) => setVolume(event.target.value)}
/>
```

### Controlled slider

```jsx
const [volume, setVolume] = useState(50);

<Slider
  min={0}
  max={100}
  value={volume}
  onChange={(event) => {
    setVolume(Number(event.target.value));
  }}
  aria-label="Volume"
/>;
```

### Custom range and step

```jsx
<Slider
  min={10}
  max={50}
  step={5}
  defaultValue={25}
  aria-label="Temperature"
  onChange={(event) => {
    console.log(event.target.value);
  }}
/>;
```

### Percentage slider

```jsx
<Slider
  min={0}
  max={1}
  step={0.01}
  defaultValue={0.75}
  aria-label="Opacity"
  onChange={(event) => {
    setOpacity(Number(event.target.value));
  }}
/>;
```

### Disabled slider

```jsx
<Slider
  min={0}
  max={100}
  value={25}
  disabled
  aria-label="Read-only progress"
/>;
```

## Change events

The `onChange` callback receives the native range input event. Browser input values are strings, so convert the value when numeric state is required:

```jsx
<Slider
  min={0}
  max={10}
  step={1}
  defaultValue={5}
  aria-label="Rating"
  onChange={(event) => {
    const rating = Number(event.target.value);
    setRating(rating);
  }}
/>;
```

## Accessibility

- Provide `aria-label`, `aria-labelledby`, or a surrounding visible label.
- Ensure the accessible name describes what the slider controls.
- Use `min`, `max`, and `step` values that match the intended range.
- Use `disabled` when the value cannot currently be changed.
- Use a visible value or supporting text when users need to understand the current numeric value.

## Notes

- Slider renders a native range input and preserves standard keyboard and browser behavior.
- Use `value` with `onChange` for controlled usage.
- Use `defaultValue` for uncontrolled usage with an initial value.
- `event.target.value` is a string because it comes from a native input element.
- The component calculates progress styling from the current value.
- Additional native range attributes and event handlers can be passed through `...props`.