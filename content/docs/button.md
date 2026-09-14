# Button

Use the `Button` component for actions such as submitting forms, saving changes, opening dialogs, or navigating between steps.

## Import Button

Import `Button` from Tavix:

```jsx
import { Button } from "tavix";
```

## Component API

```jsx
<Button
  children
  leadingIcon
  trailingIcon
  loading={false}
  loadingText
  className=""
  disabled={false}
  type="button"
  {...props}
/>
```

### Props

- `children`: Content displayed inside the button.
- `leadingIcon`: Icon name displayed before the button label.
- `trailingIcon`: Icon name displayed after the button label.
- `loading`: Shows a spinner and disables the button when `true`.
- `loadingText`: Optional label displayed while the button is loading. Defaults to `children`.
- `className`: Classes used to control size and visual style.
- `disabled`: Prevents interaction when `true`.
- `type`: Native button type. Defaults to `button`.
- `...props`: Additional native button attributes.

## Sizes

Use `btn-sm`, `btn-md`, or `btn-lg` with a style class.

### Small

```jsx
<Button className="btn-sm btn-primary">Small button</Button>
```

### Medium

```jsx
<Button className="btn-md btn-primary">Medium button</Button>
```

### Large

```jsx
<Button className="btn-lg btn-primary">Large button</Button>
```

## Variants

Use `btn-primary`, `btn-secondary`, `btn-danger`, or `btn-outline` to choose the visual style.

```jsx
<Button className="btn-md btn-primary">Primary</Button>
<Button className="btn-md btn-secondary">Secondary</Button>
<Button className="btn-md btn-danger">Danger</Button>
<Button className="btn-md btn-outline">Outline</Button>
```

## Icons

Pass an icon name through `leadingIcon` or `trailingIcon`.

```jsx
<Button className="btn-md btn-primary" leadingIcon="search">
  Search
</Button>

<Button className="btn-md btn-secondary" trailingIcon="arrow-right">
  Continue
</Button>

<Button
  className="btn-md btn-primary"
  leadingIcon="save"
  trailingIcon="arrow-right"
>
  Save changes
</Button>
```

## Loading and disabled states

Set `loading` to show progress and disable interaction. Use `loadingText` when the default label is not specific enough.

```jsx
<Button className="btn-md btn-primary" loading>
  Save changes
</Button>

<Button className="btn-md btn-primary" loading loadingText="Saving...">
  Save changes
</Button>

<Button className="btn-md btn-disabled" disabled>
  Unavailable
</Button>
```

## Form buttons

Set the native `type` when using a button inside a form.

```jsx
<form>
  <Button className="btn-md btn-primary" type="submit">
    Submit
  </Button>

  <Button className="btn-md btn-secondary" type="reset">
    Reset
  </Button>
</form>
```

## Behavior

- A loading button is disabled automatically.
- Loading buttons expose `aria-busy` while progress is active.
- The component renders a native `button` element.
- Use a clear label so the action is understandable without relying on color or icons alone.
