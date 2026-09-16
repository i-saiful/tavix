# Popover

Use the `Popover` component for lightweight contextual overlays anchored to a trigger element.

## Import Popover

Import `Popover` from Tavix:

```jsx
import { Popover } from "tavix";
```

## Component API

```jsx
<Popover
  trigger
  children
  placement="bottom-start"
  open
  defaultOpen={false}
  onOpenChange
  closeOnOutside={true}
  closeOnEscape={true}
  triggerClassName
/>
```

### Props

- `trigger`: Trigger content rendered in the button that opens the popover.
- `children`: Content displayed inside the popover panel.
- `placement`: Placement relative to the trigger. Defaults to `bottom-start`.
- `open`: Controlled open state.
- `defaultOpen`: Initial open state for uncontrolled usage.
- `onOpenChange`: Callback fired with the next open state.
- `closeOnOutside`: Closes the popover when a click occurs outside the container.
- `closeOnEscape`: Closes the popover when the Escape key is pressed.
- `triggerClassName`: Additional class names for the trigger button.

## Behavior

- Provides a trigger button with `aria-expanded`, `aria-haspopup="dialog"`, and `aria-controls` support.
- Supports controlled or uncontrolled open state.
- Closes when the user clicks outside and `closeOnOutside` is enabled.
- Closes when Escape is pressed and `closeOnEscape` is enabled.
- Renders the popover content only while open.

## Examples

### Basic popover

```jsx
<Popover trigger="More actions">
  <div>
    <button type="button">Edit</button>
    <button type="button">Duplicate</button>
    <button type="button">Delete</button>
  </div>
</Popover>
```

### Controlled popover

```jsx
const [open, setOpen] = useState(false);

<Popover
  trigger="Open menu"
  open={open}
  onOpenChange={setOpen}
>
  <div>Custom contextual content</div>
</Popover>
```

## Notes

- `Popover` is best for brief contextual content attached to a trigger, such as help text or small actions.
- For larger dialogs and full-screen overlays, prefer `Modal` or `Dialog`.
