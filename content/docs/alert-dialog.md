# Alert Dialog

Use the `AlertDialog` component for confirmation dialogs that communicate critical information and require explicit user action.

## Import Alert Dialog

Import `AlertDialog` from Tavix:

```jsx
import { AlertDialog } from "tavix";
```

## Component API

```jsx
<AlertDialog
  open={false}
  onClose
  onConfirm
  title
  description
  confirmText="Confirm"
  cancelText="Cancel"
  variant="default"
  icon
  loading={false}
  showClose={false}
  closeOnOverlay={true}
  closeOnEscape={true}
/>
```

### Props

- `open`: Controls whether the alert dialog is visible.
- `onClose`: Called when the alert is dismissed.
- `onConfirm`: Called when the confirmation button is clicked.
- `title`: Title shown at the top of the dialog.
- `description`: Supporting content shown below the title.
- `confirmText`: Label for the primary confirmation button.
- `cancelText`: Label for the cancel button.
- `variant`: Visual variant of the alert. Supported values include `default`, `warning`, and `danger`.
- `icon`: Custom icon override.
- `loading`: Disables the action and shows processing state while `true`.
- `showClose`: Shows the close button when enabled.
- `closeOnOverlay`: Closes the dialog when the backdrop is clicked.
- `closeOnEscape`: Closes the dialog when Escape is pressed.

## Behavior

- Renders only when `open` is `true`.
- Uses `role="alertdialog"` and sets proper label/description wiring for accessibility.
- Prevents background scrolling while it is visible.
- Uses a built-in icon based on the dialog variant when none is provided.
- Disables interaction during loading and shows a processing state.
- Calls `onClose` when the user cancels or closes the dialog.

## Examples

### Default alert

```jsx
<AlertDialog
  open={alertOpen}
  onClose={() => setAlertOpen(false)}
  onConfirm={() => console.log("Confirmed")}
  title="Changes saved"
  description="Your updates were successfully applied."
  confirmText="Continue"
/>
```

### Danger alert

```jsx
<AlertDialog
  open={dangerOpen}
  onClose={() => setDangerOpen(false)}
  onConfirm={deleteAccount}
  title="Delete account"
  description="This action is permanent and cannot be undone."
  variant="danger"
  confirmText="Delete"
/>
```

## Notes

- Use `AlertDialog` for high-priority situations where attention and explicit confirmation are necessary.
- If you need a more neutral confirmation flow, prefer `ConfirmationDialog`.
