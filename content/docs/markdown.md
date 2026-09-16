# Markdown

Use the `Markdown` component to render structured markdown content with basic heading, paragraph, list, and code-block formatting.

## Import Markdown

Import `Markdown` from Tavix:

```jsx
import { Markdown } from "tavix";
```

## Component API

```jsx
<Markdown
  content=""
  className
/>
```

### Props

- `content`: Markdown string to render.
- `className`: Additional class names for the article wrapper.

## Behavior

- Renders markdown into semantic HTML sections.
- Supports headings, paragraphs, lists, ordered lists, and fenced code blocks.
- Uses inline code formatting where appropriate.
- Delegates code rendering to the internal `CodeBlock` component with copy support.
- Keeps the overall layout consistent with the documentation styling used in Tavix.

## Examples

### Basic markdown

```jsx
<Markdown
  content={`# Welcome

This is a simple markdown example.

- Item one
- Item two

\\`\\`\\`js
const greeting = "Hello Tavix";
console.log(greeting);
\\`\\`\\`
`}
/>
```

### Content with headings and lists

```jsx
<Markdown
  content={`## Features

- Responsive helper UI
- Accessible form patterns
- Clean documentation examples

1. Install Tavix
2. Import a component
3. Build your screen
`}
/>
```

## Notes

- The component is ideal for docs, static content blocks, andtutorial-style content.
- It is intentionally lightweight and focuses on the common markdown structures needed for documentation and UI examples.