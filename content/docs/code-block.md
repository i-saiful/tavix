# CodeBlock

Use the `CodeBlock` component to display syntax-highlighted code snippets with a quick-copy action.

## Import CodeBlock

Import `CodeBlock` from the media-content folder or the package path if it is exported in your app structure:

```jsx
import { CodeBlock } from "tavix";
```

## Component API

```jsx
<CodeBlock
  content=""
  language
/>
```

### Props

- `content`: The code string to display.
- `language`: Optional language hint used for syntax highlighting. Examples include `js`, `jsx`, `html`, `css`, `bash`, and `json`.

## Behavior

- Renders the supplied code snippet in a styled code container.
- Applies syntax highlighting for JavaScript, JSX, HTML, and CSS content.
- Displays a copy button in the upper corner.
- Uses hover and state feedback to confirm when code has been copied.
- Keeps long code blocks readable with a dedicated long-block presentation state.

## Examples

### JavaScript snippet

```jsx
<CodeBlock
  content={`const greeting = "Hello Tavix";
console.log(greeting);`}
  language="js"
/>
```

### JSX snippet

```jsx
<CodeBlock
  content={`<Button variant="primary">Save</Button>`}
  language="jsx"
/>
```

### CSS snippet

```jsx
<CodeBlock
  content={`.tavix-button {
  background: var(--color-background-brand);
  color: var(--color-text-inverse);
}`}
  language="css"
/>
```

## Notes

- This component is most useful in documentation, examples, and content-rich interfaces.
- The syntax styling is intentionally lightweight and designed to support common web code examples without adding heavy dependencies.
