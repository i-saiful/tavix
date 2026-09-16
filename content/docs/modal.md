# Modal

Use the `Modal` component for focused overlays that require the user to review content or complete a task without leaving the current screen.

## Import Modal

Import `Modal` from Tavix:

```jsx
import { Modal } from "tavix";
```

## Component API

```jsx
<Modal
  open={false}
  onClose
  children
  size="md"
  position="center"
  closeOnOverlay={true}
  closeOnEscape={true}
  showClose={true}
/>
```

### Props

- `open`: Controls whether the modal is visible.
- `onClose`: Callback fired when the modal closes.
- `children`: Content rendered inside the modal body.
- `size`: Modal size variant. Defaults to `md`.
- `position`: Modal alignment. Defaults to `center`.
- `closeOnOverlay`: Closes the modal when the backdrop is clicked.
- `closeOnEscape`: Closes the modal when the Escape key is pressed.
- `showClose`: Shows the close button in the upper-right corner.

## Behavior

- Renders only when `open` is `true`.
- Adds a fullscreen overlay behind the modal.
- Prevents background scrolling while the modal is open.
- Calls `onClose` when the backdrop is clicked and `closeOnOverlay` is enabled.
- Calls `onClose` when the Escape key is pressed and `closeOnEscape` is enabled.
- Uses `role="dialog"` and `aria-modal="true"` for accessibility.
- Stops propagation to avoid closing the modal when interacting with the content area.

## Examples

### Basic modal

```jsx
const [open, setOpen] = useState(false);

<>
  <button type="button" onClick={() => setOpen(true)}>Open modal</button>

  <Modal open={open} onClose={() => setOpen(false)}>
    <div>
      <h2>Profile</h2>
      <p>Update your details and save changes.</p>
    </div>
  </Modal>
</>
```

### Modal with custom size

```jsx
<Modal open={open} onClose={handleClose} size="lg" position="center">
  <div>
    <h2>Subscription settings</h2>
    <p>Choose your plan and billing preferences.</p>
  </div>
</Modal>
```

## Notes

- Use `Modal` for general-purpose overlays and content windows.
- For action-confirmation flows, consider `Dialog` or `AlertDialog` instead of a generic modal.
