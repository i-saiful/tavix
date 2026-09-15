# Alert

A message component for communicating status, feedback, warnings, errors, and important information.

## Import Alert

Import `Alert` from Tavix:

```jsx
import { Alert } from "tavix";
```

## Component API

```jsx
<Alert
  variant="info"
  title
  icon={true}
  closable={false}
  onClose
  action
  className=""
  {...props}
>
  Message
</Alert>
```

### Props

- `variant`: Semantic message type: `success`, `info`, `warning`, or `error`. Defaults to `info`.
- `title`: Optional heading displayed above the message.
- `children`: Message content displayed inside the alert.
- `icon`: Displays the variant icon when `true`. Defaults to `true`.
- `closable`: Displays a close button when `true`. Defaults to `false`.
- `onClose`: Callback called when the close button is activated.
- `action`: Optional action content, such as a retry or undo button.
- `className`: Additional classes applied to the alert.
- `...props`: Additional props forwarded to the root element.

## Behavior

- Displays semantic styling based on `variant`.
- Uses an appropriate default icon for each variant when `icon` is `true`.
- Renders `title` when provided.
- Renders `children` as the primary alert message.
- Renders custom `action` content when provided.
- Renders a close button when `closable` is `true`.
- Calls `onClose` when the close button is activated.
- Does not hide itself automatically after `onClose`; the parent controls visibility.
- Uses `role="alert"` for error alerts.
- Uses `role="status"` for non-error alerts.

## Examples

### Informational alert

```jsx
<Alert variant="info" title="New update available">
  Refresh the page to load the latest version.
</Alert>
```

### Success alert

```jsx
<Alert variant="success" title="Saved">
  Your changes were saved.
</Alert>

<Alert
  variant="error"
  title="Unable to save"
  closable
  onClose={handleClose}
  action={<button type="button">Retry</button>}
>
  Check your connection and try again.
</Alert>
```

### Warning alert

```jsx
<Alert variant="warning" title="Review required">
  Check these settings before continuing.
</Alert>
```

### Error alert

```jsx
<Alert variant="error" title="Unable to save">
  Check your connection and try again.
</Alert>
```

### Alert without an icon

```jsx
<Alert variant="info" icon={false}>
  This message is displayed without a leading icon.
</Alert>
```

### Dismissible alert

```jsx
const [visible, setVisible] = useState(true);

{visible && (
  <Alert
    variant="success"
    title="Changes saved"
    closable
    onClose={() => setVisible(false)}
  >
    Your preferences were updated.
  </Alert>
)}
```

### Alert with an action

```jsx
<Alert
  variant="error"
  title="Connection lost"
  action={
    <button type="button" onClick={retryConnection}>
      Retry
    </button>
  }
>
  We could not reach the server.
</Alert>
```

## Accessibility

- Error alerts use `role="alert"` for immediate attention.
- Informational, success, and warning alerts use `role="status"`.
- The close button has an accessible label.
- Use a concise `title` and message so the alert is understandable when announced.
- Provide accessible names and keyboard behavior for custom `action` content.
- Do not rely on color or iconography alone to communicate the message type.

## Notes

- Supported variants are `success`, `info`, `warning`, and `error`.
- `icon` defaults to `true`.
- `closable` only renders the close control; the parent must remove the alert.
- `onClose` does not automatically hide or remove the component.
- Use `action` for a follow-up command such as Retry, Undo, or View details.
- Additional props are forwarded to the root alert element.