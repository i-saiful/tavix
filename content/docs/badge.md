# Badge

A compact presentational label for displaying status, category, count, or other short contextual information.

## Import Badge

Import `Badge` from Tavix:

```jsx
import { Badge } from "tavix";
```

## Component API

```jsx
<Badge
  variant="neutral"
  size="md"
  appearance="soft"
  icon
  className=""
  {...props}
>
  Status
</Badge>
```

- `variant`: Color treatment: `neutral`, `brand`, `success`, `warning`, `error`, or `info`. Defaults to `neutral`.
- `size`: Badge size: `sm` or `md`. Defaults to `md`.
- `appearance`: Visual appearance: `soft` or `solid`. Defaults to `soft`.
- `icon`: Registered Tavix icon name displayed before the content.
- `children`: Content displayed inside the badge.
- `className`: Additional classes applied to the badge.
- `...props`: Additional props forwarded to the root `<span>`.

## Behavior

- Renders a compact, presentational label.
- Applies the selected `variant` color treatment.
- Supports `soft` and `solid` appearances.
- Supports `sm` and `md` sizes.
- Renders an icon before the content when `icon` is provided.
- Marks icons as decorative and hides them from assistive technology.
- Forwards additional props to the root `<span>`.
- Does not provide click, focus, or selection behavior.

## Examples

### Status badges

```jsx
<Badge variant="success" appearance="solid" icon="check-circle">
  Active
</Badge>

<Badge variant="warning" size="sm">
  Pending
</Badge>
```

### Badge variants

```jsx
<Badge variant="neutral">Draft</Badge>
<Badge variant="brand">Featured</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="error">Failed</Badge>
<Badge variant="info">Info</Badge>
```

### Soft and solid appearances

```jsx
<Badge variant="brand" appearance="soft">
  Soft badge
</Badge>

<Badge variant="brand" appearance="solid">
  Solid badge
</Badge>
```

### Sizes

```jsx
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
```

### Count badge

```jsx
<Badge variant="error" aria-label="3 unread notifications">
  3
</Badge>
```

## Accessibility

- Badge content should be concise and understandable in its surrounding context.
- Do not rely on color alone to communicate status.
- Icons are decorative and hidden from assistive technology.
- Use `aria-label` when a short or visual badge needs additional context.
- Badge is non-interactive; use a Button or link when users need to take action.

## Notes

- Badge renders a `<span>` element.
- Supported variants are `neutral`, `brand`, `success`, `warning`, `error`, and `info`.
- Supported sizes are `sm` and `md`.
- Supported appearances are `soft` and `solid`.
- The component does not manage state or user interaction.
- Additional props are forwarded to the root element.