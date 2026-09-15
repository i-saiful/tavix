# Progress

A progress indicator for communicating measurable completion or ongoing work.

## Import Progress

Import `Progress` from Tavix:

```jsx
import { Progress } from "tavix";
```

## Component API

```jsx
<Progress
  value={0}
  max={100}
  size="md"
  variant="primary"
  label
  showValue={false}
  indeterminate={false}
  className=""
  {...props}
/>
```

### Props

- `value`: Current progress value. Defaults to `0`.
- `max`: Maximum progress value. Defaults to `100`. Invalid or non-positive values use `100`.
- `size`: Progress size: `sm`, `md`, or `lg`. Defaults to `md`.
- `variant`: Visual treatment: `primary`, `success`, `warning`, `error`, or `info`.
- `label`: Optional text displayed above the progress bar.
- `showValue`: Displays the calculated percentage when `true`. Defaults to `false`.
- `indeterminate`: Shows progress without a known completion value. Defaults to `false`.
- `className`: Additional classes applied to the progress component.
- `...props`: Additional props forwarded to the outer element.

## Behavior

- Calculates determinate progress as a percentage from `value` and `max`.
- Clamps determinate values between `0` and `100` percent.
- Uses `100` as the maximum when `max` is invalid or non-positive.
- Displays the percentage when `showValue` is `true` and progress is determinate.
- Displays an animated moving bar when `indeterminate` is `true`.
- Omits `aria-valuenow` for indeterminate progress.
- Applies the selected `size` and `variant` styling.
- Displays `label` above the progress bar when provided.
- Forwards additional props to the outer element.

## Examples

### Determinate progress

```jsx
<Progress value={60} label="Uploading" showValue />

<Progress variant="success" value={100} label="Complete" />

<Progress indeterminate label="Loading data" />
```

### Custom maximum

```jsx
<Progress
  value={3}
  max={10}
  label="Completed steps"
  showValue
/>;
```

The displayed percentage is calculated from `value / max`.

### Variants

```jsx
<Progress value={45} variant="primary" label="In progress" />
<Progress value={100} variant="success" label="Complete" />
<Progress value={60} variant="warning" label="Needs attention" />
<Progress value={20} variant="error" label="Failed" />
<Progress value={70} variant="info" label="Processing" />
```

### Sizes

```jsx
<Progress value={35} size="sm" label="Small" />
<Progress value={55} size="md" label="Medium" />
<Progress value={75} size="lg" label="Large" />
```

### Loading state

```jsx
<Progress
  indeterminate
  variant="primary"
  label="Loading results"
/>;
```

Use indeterminate progress when the duration or completion percentage is unknown.

## Accessibility

- Progress exposes `role="progressbar"`.
- Determinate progress exposes `aria-valuemin`, `aria-valuemax`, and `aria-valuenow`.
- Indeterminate progress does not expose `aria-valuenow`.
- Provide a visible `label` or an accessible name when the visual label is not sufficient.
- Keep the label meaningful so users understand what operation is progressing.
- Do not rely on color alone to communicate success, warning, or error states.

## Notes

- Determinate values are clamped to `0-100` percent.
- Invalid or non-positive `max` values use `100`.
- `showValue` is ignored for indeterminate progress.
- Supported sizes are `sm`, `md`, and `lg`.
- Supported variants are `primary`, `success`, `warning`, `error`, and `info`.
- Use indeterminate mode when completion cannot be measured.