# Tooltip

A short contextual description shown when users hover over or focus an associated element.

## Import Tooltip

Import `Tooltip` from Tavix:

```jsx
import { Tooltip } from "tavix";
```

## Component API

```jsx
<Tooltip
  content="Edit item"
  position="top"
  disabled={false}
  width="max-content"
>
  <button type="button">Edit</button>
</Tooltip>
```

### Props

- `children`: Element or content that triggers the tooltip.
- `content`: Text or content displayed inside the tooltip.
- `position`: Placement: `top`, `bottom`, `left`, or `right`. Defaults to `top`.
- `disabled`: Prevents the tooltip from being shown. Defaults to `false`.
- `width`: Tooltip width. Defaults to `max-content`.

## Behavior

- Shows the tooltip when the child is hovered.
- Shows the tooltip when the child receives focus.
- Hides the tooltip when the pointer leaves the child.
- Hides the tooltip when the child loses focus.
- Renders content only while the tooltip is visible.
- Uses `role="tooltip"` for the visible tooltip content.
- Applies the selected `position` placement.
- Applies the configured `width` through the tooltip width style.
- Does not show the tooltip when `disabled` is `true`.

## Examples

### Button tooltip

```jsx
<Tooltip content="Edit item" position="right">
  <button type="button">Edit</button>
</Tooltip>

<Tooltip content="Unavailable" disabled>
  <button type="button" disabled>
    Delete
  </button>
</Tooltip>
```

### Placement

```jsx
<Tooltip content="Shown above" position="top">
  <button type="button">Top</button>
</Tooltip>

<Tooltip content="Shown below" position="bottom">
  <button type="button">Bottom</button>
</Tooltip>

<Tooltip content="Shown to the left" position="left">
  <button type="button">Left</button>
</Tooltip>

<Tooltip content="Shown to the right" position="right">
  <button type="button">Right</button>
</Tooltip>
```

### Custom width

```jsx
<Tooltip
  content="This tooltip has room for a longer explanation."
  width="240px"
>
  <button type="button">More details</button>
</Tooltip>
```

### Icon control

Use a focusable control and an accessible name when the trigger is an icon-only button:

```jsx
<Tooltip content="Delete item">
  <button type="button" aria-label="Delete item">
    <Icon name="trash" aria-hidden="true" />
  </button>
</Tooltip>
```

### Disabled tooltip

```jsx
<Tooltip content="Unavailable" disabled>
  <button type="button" disabled>
    Delete
  </button>
</Tooltip>
```

## Accessibility

- Tooltip content uses `role="tooltip"` while visible.
- Use a focusable child so keyboard users can trigger the tooltip.
- Give icon-only triggers an accessible `aria-label`.
- Keep tooltip text concise and supplementary.
- Do not place essential instructions or status information only in a tooltip.
- Do not rely on hover alone for content that keyboard or touch users must access.

## Notes

- Visibility is controlled by mouse enter/leave and focus/blur.
- Content is rendered only while visible.
- The default position is `top`.
- The default width is `max-content`.
- `disabled` prevents the tooltip from showing but does not disable the child.
- Use a Button or another accessible control as the child when the trigger performs an action.
