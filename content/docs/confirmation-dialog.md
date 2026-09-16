# Confirmation Dialog

Use the `ConfirmationDialog` component for straightforward yes/no decision prompts with a clear confirmation action.

## Import Confirmation Dialog

Import `ConfirmationDialog` from Tavix:

```jsx
import { ConfirmationDialog } from "tavix";
```

## Component API

```jsx
<ConfirmationDialog
  open={false}
  onClose
  onConfirm
  title="Are you sure?"
  description
  confirmText="Confirm"
  cancelText="Cancel"
  variant="primary"
  icon
  loading={false}
  loadingText="Processing..."
  showClose={false}
  closeOnOverlay={true}
  closeOnEscape={true}
/>
```

### Props

- `open`: Controls whether the dialog is visible.
- `onClose`: Called when the user dismisses the dialog.
- `onConfirm`: Called when the confirmation button is clicked.
- `title`: Title shown at the top of the confirmation prompt.
- `description`: Additional explanatory copy below the title.
- `confirmText`: Text for the confirm action button.
- `cancelText`: Text for the cancel action button.
- `variant`: Visual variant of the dialog, such as `primary` or `danger`.
- `icon`: Custom icon override.
- `loading`: Disables button actions and shows loading state while set to `true`.
- `loadingText`: Text displayed while loading is active.
- `showClose`: Displays a close button when enabled.
- `closeOnOverlay`: Closes the dialog when the backdrop is clicked.
- `closeOnEscape`: Closes the dialog when Escape is pressed.

## Behavior

- Renders only when `open` is `true`.
- Prevents the page from scrolling while the dialog is open.
- Uses `role="dialog"` and `aria-modal="true"` for accessibility.
- Moves the user through a standard confirm/cancel pattern.
- Disables the confirm flow while `loading` is active.
- Uses the default `Button` component for action buttons.

## Examples

### Basic confirmation

```jsx
<ConfirmationDialog
  open={confirmOpen}
  onClose={() => setConfirmOpen(false)}
  onConfirm={handleDelete}
  title="Delete project"
  description="This will remove the project and all associated files."
  confirmText="Delete"
  cancelText="Keep"
  variant="danger"
/>
```

### Loading confirmation

```jsx
<ConfirmationDialog
  open={savingOpen}
  onClose={closeDialog}
  onConfirm={saveChanges}
  title="Save changes"
  description="Your edits will be published immediately."
  loading={isSaving}
  loadingText="Saving..."
/>
```

## Notes

- Use this component when the user needs to confirm a non-critical but important action.
- For warning-level actions with a more alerting tone, `AlertDialog` may be more appropriate.
