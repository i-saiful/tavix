# Drawer

Use the `Drawer` component to present a side panel that slides in from the edge of the viewport.

## Import Drawer

Import `Drawer` from Tavix:

```jsx
import { Drawer } from "tavix";
```

## Component API

```jsx
<Drawer
  open={false}
  onClose
  children
  side="right"
  size="md"
  closeOnOverlay={true}
  closeOnEscape={true}
  showClose={true}
/>
```

### Props

- `open`: Controls whether the drawer is visible.
- `onClose`: Callback fired when the drawer closes.
- `children`: Content rendered inside the drawer panel.
- `side`: Side the drawer slides from. Common values include `left`, `right`, `top`, and `bottom`.
- `size`: Drawer size variant. Defaults to `md`.
- `closeOnOverlay`: Closes the drawer when the backdrop is clicked.
- `closeOnEscape`: Closes the drawer when the Escape key is pressed.
- `showClose`: Shows the close button in the drawer.

## Behavior

- Renders a backdrop and an anchored side panel when open.
- Prevents background page scrolling while the drawer is visible.
- Closes on backdrop click and Escape when those options are enabled.
- Uses `role="dialog"` and `aria-modal="true"` for accessibility.
- Stops overlay interaction from bubbling out of the panel.

## Examples

### Right-aligned drawer

```jsx
const [open, setOpen] = useState(false);

<>
  <button type="button" onClick={() => setOpen(true)}>Open filters</button>

  <Drawer open={open} onClose={() => setOpen(false)} side="right" size="md">
    <div>
      <h2>Filters</h2>
      <p>Refine the results by category and date.</p>
    </div>
  </Drawer>
</>
```

### Left drawer

```jsx
<Drawer open={open} onClose={handleClose} side="left" size="lg">
  <div>
    <h2>Navigation</h2>
    <ul>
      <li>Dashboard</li>
      <li>Orders</li>
      <li>Settings</li>
    </ul>
  </div>
</Drawer>
```

## Notes

- Drawers are ideal for contextual side panels that should not interrupt the full page flow as much as a modal does.
- Use `side` and `size` to match your layout needs without creating a custom overlay.
