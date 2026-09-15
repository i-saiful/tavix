# Spinner

A compact animated loading indicator for operations that are in progress.

## Import Spinner

Import `Spinner` from Tavix:

```jsx
import { Spinner } from "tavix";
```

## Component API

```jsx
<Spinner
  size="md"
  variant="brand"
  className=""
  label="Loading"
/>
```

- `size`: Spinner size: `sm`, `md`, `lg`, `xl`, or `xxl`. Defaults to `md`.
- `variant`: Color treatment: `brand`, `primary`, `secondary`, `success`, `warning`, `error`, `info`, or `inverse`. Defaults to `brand`.
- `className`: Additional classes applied to the spinner. Defaults to `""`.
- `label`: Accessible loading label. Defaults to `Loading`.

## Behavior

- Renders an animated loading indicator.
- Applies the selected `size` and `variant` styling.
- Exposes `role="status"` for assistive technology.
- Uses `aria-label={label}` to describe the current loading operation.
- Slows the animation when the user prefers reduced motion.
- Does not manage the operation being represented or its completion state.

## Examples

### Basic spinner

```jsx
<Spinner />
```

### Size and variant

```jsx
<Spinner size="lg" variant="success" label="Saving" />
<Spinner size="sm" variant="inverse" label="Loading" />
<Spinner size="xl" variant="warning" label="Preparing upload" />
```

### Button loading state

```jsx
<Button loading loadingText="Saving">
  Save changes
</Button>
```

Use Spinner directly when the loading indicator needs to be placed in a layout. Use Button's loading state when the operation belongs to a button.

### Inline loading state

```jsx
<div className="loading-row">
  <Spinner size="sm" label="Loading results" />
  <span>Loading results...</span>
</div>
```

### Full-page loading state

```jsx
<Main aria-label="Loading dashboard">
  <Spinner size="xl" label="Loading dashboard" />
</Main>
```

## Accessibility

- Spinner uses `role="status"` to identify the loading indicator.
- `label` is exposed through `aria-label`.
- Use a specific label such as `Saving changes` or `Loading results` when context matters.
- Do not rely on the animation or color alone to communicate what is loading.
- Respect reduced-motion preferences; the component slows its animation accordingly.
- Remove or replace the spinner when the associated operation completes.

## Notes

- The default size is `md`.
- The default variant is `brand`.
- Supported sizes are `sm`, `md`, `lg`, `xl`, and `xxl`.
- Supported variants are `brand`, `primary`, `secondary`, `success`, `warning`, `error`, `info`, and `inverse`.
- Spinner does not manage loading state or asynchronous operations.
- Use `className` for custom positioning and layout styles.