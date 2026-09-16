# Toast

A temporary notification intended for use through `useToast`.

## `useToast` Hook

Use `useToast` inside a component rendered within `TavixProvider`:

```jsx
import { useToast } from "tavix/hooks";

const { toast, removeToast, clear } = useToast();
```

### Usage example

```jsx
"use client";

import { Button } from "tavix";
import { useToast } from "tavix/hooks";

export default function SaveButton() {
	const { toast } = useToast();

	const handleSave = async () => {
		try {
			await saveChanges();
			toast.success("Your changes were saved.", {
				title: "Saved",
			});
		} catch {
			toast.error("Unable to save your changes.", {
				title: "Save failed",
			});
		}
	};

	return (
		<Button onClick={handleSave} className="btn-primary">
			Save changes
		</Button>
	);
}
```

The component must be rendered inside `TavixProvider` for `useToast` to work:

```jsx
<TavixProvider>
	<SaveButton />
</TavixProvider>
```

The hook returns:

- `toast(options)`: Creates a toast and returns its generated id.
- `toast.success(message, options)`: Creates a success toast.
- `toast.error(message, options)`: Creates an error toast.
- `toast.warning(message, options)`: Creates a warning toast.
- `toast.info(message, options)`: Creates an informational toast.
- `removeToast(id)`: Removes one toast by id.
- `clear()`: Removes all active toasts.

### Toast options

The object passed to `toast` accepts four options:

```jsx
toast({
	type: "success",
	title: "Success",
	message: "Your profile has been updated successfully.",
	duration: 4000,
});
```

- `type`: `success`, `info`, `warning`, or `error`. Defaults to `info`.
- `title`: Short heading displayed in the notification.
- `message`: Main notification text.
- `duration`: Auto-dismiss delay in milliseconds. Defaults to `4000`. Values less than or equal to `0` disable auto-dismiss.

The `toast` function returns the generated toast id:

```jsx
const toastId = toast({
	type: "info",
	title: "Processing",
	message: "Your request is being processed.",
});

removeToast(toastId);
```

## Behavior

- Supports `success`, `info`, `warning`, and `error` notifications.
- Toast helpers set the corresponding notification type automatically.
- Notifications dismiss automatically after `4000` milliseconds by default.
- Use a duration less than or equal to `0` to disable auto-dismiss.
- `toast` returns the generated toast id.
- Use `removeToast(id)` to remove one notification or `clear()` to remove all notifications.
- ToastProvider defaults to `position="top-right"` and `maxToasts={5}`.
- Auto-dismiss timers are cleaned up when notifications unmount.

## Accessibility

- Toasts use `role="alert"` and `aria-live="polite"`.
- Close buttons have accessible labels.
- Keep titles and messages concise so announcements are easy to understand.
- Do not use a toast as the only way to communicate critical or persistent information.
- Use a persistent page-level message when users need to review information later.

## Notes

- Wrap the application or notification area with `ToastProvider` before calling `useToast`.
- Use `toast.success`, `toast.error`, `toast.warning`, or `toast.info` for common notification types.
- Toasts are intended for temporary feedback; use Alert for persistent page-level messaging.