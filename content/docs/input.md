# Input

Use the `Input` component for labeled form fields with helper text, validation feedback, icons, and password visibility controls.

## Import Input

Import `Input` from Tavix:

```jsx
import { Input } from "tavix";
```

## Component API

```jsx
<Input
  label
  type="text"
  error
  helperText
  leadingIcon
  trailingIcon
  onTrailingIconClick
  required={false}
  ...props
/>
```

### Props

- `label`: Visible label associated with the input.
- `type`: Native input type. Defaults to `text`.
- `error`: Validation message. Takes precedence over `helperText`.
- `helperText`: Supporting text shown below the input when there is no `error`.
- `leadingIcon`: Tavix icon name rendered inside the left side of the input.
- `trailingIcon`: Tavix icon name rendered inside the right side of the input.
- `onTrailingIconClick`: Callback invoked when the trailing icon is clicked.
- `required`: Marks the input as required and displays an asterisk. Defaults to `false`.
- `...props`: Additional native input props, such as `id`, `name`, `value`, `placeholder`, `disabled`, `readOnly`, and event handlers.

## Behavior

- Generates an accessible id with React `useId` when no `id` is provided.
- Associates the label with the input through `htmlFor` and `id`.
- Adds `aria-required` when `required` is `true`.
- Adds `aria-invalid` when `error` is provided.
- Links helper or error text through `aria-describedby`.
- Gives error text an `alert` role.
- Displays an error icon when `error` is provided and the input is not a password input.
- Password inputs render a visibility toggle that switches between `password` and `text`.
- Password inputs give the toggle an accessible label and pressed state.
- When both `error` and `helperText` are provided, only the error message is displayed.

## Examples

### Basic fields

```jsx
<Input label="Name" placeholder="Enter your name" />

<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
/>

<Input
  label="Phone"
  type="tel"
  placeholder="Enter phone number"
/>
```

### Required and helper text

```jsx
<Input
  label="Username"
  placeholder="Enter username"
  required
/>

<Input
  label="Username"
  placeholder="Enter username"
  helperText="Username must be at least 6 characters."
/>
```

### Icons

```jsx
<Input
  label="Search"
  placeholder="Search..."
  leadingIcon="search"
/>

<Input
  label="Email"
  type="email"
  placeholder="Enter email"
  trailingIcon="mail"
/>

<Input
  label="Search"
  placeholder="Search..."
  leadingIcon="search"
  trailingIcon="x"
/>
```

### Interactive trailing icon

```jsx
<Input
  label="Search"
  placeholder="Search..."
  trailingIcon="search"
  onTrailingIconClick={() => {
    console.log("Search clicked");
  }}
/>
```

### Password field

```jsx
<Input
  label="Password"
  type="password"
  placeholder="Enter password"
/>

<Input
  label="Password"
  type="password"
  placeholder="Enter password"
  leadingIcon="lock"
/>
```

The visibility button is rendered automatically for `type="password"`.

### Error, disabled, and read-only states

```jsx
<Input
  label="Email"
  type="email"
  placeholder="Enter email"
  error="Please enter a valid email address."
/>

<Input
  label="Disabled"
  placeholder="Disabled input"
  disabled
/>

<Input
  label="Read Only"
  value="Read only value"
  readOnly
/>
```

## Supported types

Use any native input type supported by the browser. Common examples include:

- `text`
- `email`
- `tel`
- `password`
- `search`
- `url`
- `number`

Additional native attributes and event handlers can be passed through `...props`.

## Behavior

- Generates an accessible `id` with React `useId` when no `id` is provided.
- Associates the label with the input through `htmlFor` and `id`.
- Adds `aria-required` when `required` is `true`.
- Adds `aria-invalid` when `error` is provided.
- Links helper or error text through `aria-describedby`.
- Gives error text an `alert` role.
- Displays an error icon when `error` is provided and the input is not a password input.
- Renders a visibility toggle for password inputs.
- Displays only the error message when both `error` and `helperText` are provided.

## Notes

- The component renders a native `input` element and preserves standard browser form behavior.
- Icon names must be registered in the Tavix icon registry.
- Styling uses Tavix semantic colors, spacing, typography, and form tokens.
