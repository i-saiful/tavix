# Dialog

Use the `Dialog` component for confirmation-style overlays with a title, body, and action buttons.

## Import Dialog

Import `Dialog` from Tavix:

```jsx
import { Dialog } from "tavix";
```

## Component API

```jsx
<Dialog
  open={false}
  onClose
  onConfirm
  title
  children
  size="md"
  closeOnOverlay={true}
  closeOnEscape={true}
  showClose={true}
  showActions={true}
  cancelLabel="Cancel"
  confirmLabel="Confirm"
/>
```

### Props

- `open`: Controls whether the dialog is visible.
- `onClose`: Callback fired when the dialog is dismissed.
- `onConfirm`: Callback fired when the confirm button is clicked.
- `title`: Optional title rendered in the dialog header.
- `children`: Body content rendered inside the dialog.
- `size`: Dialog size variant. Defaults to `md`.
- `closeOnOverlay`: Closes the dialog when the backdrop is clicked.
- `closeOnEscape`: Closes the dialog when the Escape key is pressed.
- `showClose`: Shows the close button in the header.
- `showActions`: Shows the cancel and confirm action row.
- `cancelLabel`: Label for the cancel button.
- `confirmLabel`: Label for the confirm button.

## Behavior

- Renders only when `open` is `true`.
- Uses `role="dialog"` and `aria-modal="true"` for accessibility.
- Uses built-in `Button` actions for the footer actions.
- Calls `onClose` when the cancel action or close button is triggered.
- Calls `onConfirm` when the confirm action is clicked.
- Closes on overlay or Escape by default when enabled.

## Examples

### Basic dialog

```jsx
const [open, setOpen] = useState(false);

<>
  <button type="button" onClick={() => setOpen(true)}>Delete item</button>

  <Dialog
    open={open}
    onClose={() => setOpen(false)}
    onConfirm={() => {
      console.log("Confirmed");
      setOpen(false);
    }}
    title="Delete item"
    confirmLabel="Delete"
  >
    <p>This action cannot be undone.</p>
  </Dialog>
</>
```

### Non-default action labels

```jsx
<Dialog
  open={open}
  onClose={handleClose}
  onConfirm={handleConfirm}
  title="Save changes"
  cancelLabel="Discard"
  confirmLabel="Save"
>
  <p>Do you want to save your changes before continuing?</p>
</Dialog>
```

## Notes

- This is a good default choice for a simple confirmation or destructive action flow.
- It keeps the API small while providing a clear cancel/confirm pattern.
