# Copy Button

A button that copies a string to the clipboard while displaying custom content or the value being copied.

## Import Copy Button

Import `CopyButton` from Tavix:

```jsx
import { CopyButton } from "tavix";
```

## Component API

```jsx
<CopyButton
  value="Text to copy"
  children
  className=""
  onCopy
/>
```

### Props

- `value`: String written to the clipboard.
- `children`: Custom content displayed instead of `value`. The copied text still comes from `value`.
- `className`: Additional classes applied to the component wrapper.
- `onCopy`: Optional callback called with `value` after copying succeeds.

## Behavior

- Uses the browser Clipboard API through `navigator.clipboard.writeText`.
- Copies `value` when the button is activated.
- Does nothing when `value` is empty.
- Changes the action icon from copy to check after a successful copy.
- Shows `Copy` and `Copied` tooltip text and accessible button labels.
- Resets the copied state after one second.
- Calls `onCopy` with the copied value after copying succeeds.
- Logs a copy failure to the console when the Clipboard API rejects the request.
- Requires a secure browser context, such as HTTPS or localhost, for clipboard access.

## Examples

### Copy plain text

```jsx
<CopyButton value="npm install tavix" />
```

### Custom displayed content

```jsx
<CopyButton value="https://example.com/docs">
  Documentation URL
</CopyButton>
```

### Handle a successful copy

```jsx
<CopyButton
  value={codeSnippet}
  onCopy={(copiedValue) => {
    console.log("Copied:", copiedValue);
  }}
>
  {codeSnippet}
</CopyButton>
```

### Copy a code snippet

```jsx
<CopyButton value={codeSnippet}>
  {codeSnippet}
</CopyButton>
```

### Empty value

```jsx
<CopyButton value="">
  Nothing to copy
</CopyButton>
```

When `value` is empty, the copy action does nothing.

## Copy callback

Use `onCopy` to respond after the Clipboard API succeeds:

```jsx
<CopyButton
  value={inviteLink}
  onCopy={(copiedValue) => {
    showToast(`Copied ${copiedValue}`);
  }}
>
  Copy invite link
</CopyButton>
```

## Accessibility

- The component renders a native button with an accessible label.
- The label changes from `Copy` to `Copied` after a successful copy.
- Tooltip text communicates the current action state.
- Provide meaningful visible content when using `children`.
- Keep the copy action near the value or content it copies.
- Do not rely on the icon alone to communicate the action.

## Notes

- The displayed content and copied value are separate when `children` is provided.
- `onCopy` runs only after copying succeeds.
- Clipboard access requires HTTPS or localhost in supported browsers.
- The component does not persist copied state; it resets after one second.
- Validate or sanitize sensitive content before passing it to `value`.
