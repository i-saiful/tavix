# Navbar

Use the `Navbar` component to create a responsive top navigation bar with branding, menu links, actions, and optional theme switching.

## Import Navbar

Import `Navbar` from Tavix:

```jsx
import { Navbar } from "tavix";
```

## Component API

```jsx
<Navbar
  title="Title"
  logo={null}
  items={[]}
  actions={null}
  Link="a"
  enableTheme={false}
/>
```

### Props

- `title`: Brand text displayed when no custom `logo` is supplied.
- `logo`: Optional brand logo or custom brand content.
- `items`: Array of menu items. Each item may include a `label`, `href`, and optional nested `children` for dropdown menus.
- `actions`: Extra content rendered on the right side of the navbar.
- `Link`: Link component used for navigation items and brand links. Defaults to the native `a` element.
- `enableTheme`: Shows a theme toggle button in the navbar when `true`.

## Behavior

- Renders a responsive header with a mobile menu toggle on smaller screens.
- Supports nested dropdown navigation items through `children`.
- Uses accessible `aria-expanded`, `aria-controls`, and `aria-label` values for menu interaction.
- Shows the theme toggle when `enableTheme` is enabled.
- Uses the existing Tavix theme hook for dark and light mode switching.
- Keeps the main navigation accessible for keyboard and pointer users.

## Examples

### Basic navbar

```jsx
<Navbar
  title="Tavix"
  items={[
    { label: "Home", href: "/" },
    { label: "Docs", href: "/docs" },
    { label: "Components", href: "/components" },
  ]}
/>
```

### Navbar with dropdown items

```jsx
<Navbar
  title="Studio"
  items={[
    {
      label: "Resources",
      href: "/resources",
      children: [
        { label: "Guides", href: "/guides" },
        { label: "Examples", href: "/examples" },
      ],
    },
    { label: "Pricing", href: "/pricing" },
  ]}
/>
```

### Navbar with actions and theme toggle

```jsx
<Navbar
  title="Acme"
  enableTheme
  actions={
    <button type="button">Sign in</button>
  }
  items={[
    { label: "Overview", href: "/overview" },
    { label: "Settings", href: "/settings" },
  ]}
/>
```

## Notes

- Navbar content is intentionally simple and composable, allowing custom actions and a custom link component to be passed in.
- The mobile menu and dropdown behavior are handled internally for a clean consumer API.
