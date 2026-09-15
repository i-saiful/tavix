# Main

A layout component for the primary content area of a page. It renders a semantic `<main>` landmark with full width and responsive padding.

## Import Main

Import `Main` from Tavix:

```jsx
import { Main } from "tavix";
```

## Component API

```jsx
<Main className="" {...props}>
  Content
</Main>
```

### Props

- `children`: Primary page content rendered inside the main landmark.
- `className`: Additional classes applied to the main element. Defaults to `""`.
- `...props`: Additional DOM props forwarded to the root `<main>`, such as `id`, `aria-labelledby`, and `data-*` attributes.

## Behavior

- Renders a semantic `<main>` element.
- Applies full-width layout styling.
- Applies responsive padding for page content.
- Preserves the children passed to the component.
- Forwards additional DOM props to the root element.
- Does not provide navigation, interaction, or page-level state behavior.

## Examples

### Basic page content

```jsx
<Main>
  <h1>Dashboard</h1>
  <Grid className="gap-4">
    <Card>Summary</Card>
    <Card>Activity</Card>
  </Grid>
</Main>
```

### Labeled main content

```jsx
<Main aria-labelledby="page-title">
  <h1 id="page-title">Account settings</h1>
  <p>Manage your profile and preferences.</p>
</Main>
```

### Main with custom classes

```jsx
<Main className="docs-content" data-page="documentation">
  <h1>Component documentation</h1>
  <p>Explore the available Tavix components.</p>
</Main>
```

### Main with layout components

```jsx
<Main>
  <h1>Dashboard</h1>
  <Grid className="gap-4 md:grid-cols-2">
    <Card>Summary</Card>
    <Card>Activity</Card>
  </Grid>
</Main>
```

## Accessibility

- Main renders the semantic `<main>` landmark for primary page content.
- Use one primary `Main` landmark per page.
- Use `aria-labelledby` when a visible heading identifies the page content.
- Use `aria-label` when there is no visible heading.
- Keep navigation, complementary content, and repeated site chrome outside the main landmark.
- Provide a clear heading hierarchy inside the main content.

## Notes

- Main renders a semantic `<main>` element with full width and responsive padding.
- The component does not manage page state or navigation.
- Use `className` for custom layout and spacing utilities.
- Additional DOM props are forwarded to the root element.
- Avoid nesting one `Main` component inside another.