# Sidebar

Use the `Sidebar` component to build a navigation rail or side menu with grouped links, nested sections, and a footer area.

## Import Sidebar

Import `Sidebar` from Tavix:

```jsx
import { Sidebar } from "tavix";
```

## Component API

```jsx
<Sidebar
  logo
  navItems={{
    brand: { name, logo, url },
    menu: [],
    footer: [],
  }}
  Link="a"
  onAction={(action) => {
    if (action === "logout") {
      handleLogout();
    }
  }}
  enableTheme={false}
  curved={false}
/>
```

### Props

- `logo`: Optional custom brand content shown in the sidebar header.
- `navItems`: Structured sidebar config with `brand`, `menu`, and `footer` collections.
- `Link`: Link component used for URL-based nav items. Defaults to `"a"`.
- `onAction`: Callback triggered for action-based sidebar items.
- `enableTheme`: Shows a built-in theme toggle item in the footer when `true`.
- `curved`: Applies a curved visual style to the sidebar.

## Behavior

- Uses a layout with a brand section, a scrollable menu area, and a footer area.
- Supports nested menu items and expands child items when their parent is selected or activated.
- Stores selected and expanded state locally, or through the shared sidebar context when available.
- Handles link items and action items with different click behavior.
- Applies active styling to the selected parent or child route.
- Provides accessibility labels for the brand region and interactive items.

## Examples

### Basic sidebar

```jsx
<Sidebar
  navItems={{
    brand: { name: "Tavix", url: "/" },
    menu: [
      { id: "home", title: "Home", icon: "home", type: "link", url: "/" },
      { id: "docs", title: "Docs", icon: "book", type: "link", url: "/docs" },
      { id: "settings", title: "Settings", icon: "settings", type: "link", url: "/settings" },
    ],
    footer: [
      { id: "help", title: "Help", icon: "help-circle", type: "link", url: "/help" },
      { id: "sign-out", title: "Sign Out", icon: "log-out", type: "action", action: "/logout" },
    ],
  }}
/>
```

### Sidebar with nested groups

```jsx
<Sidebar
  curved
  enableTheme
  navItems={{
    brand: { name: "Admin", url: "/admin" },
    menu: [
      {
        id: "content",
        title: "Content",
        icon: "folder",
        type: "link",
        url: "/content",
        children: [
          { id: "posts", title: "Posts", icon: "file", type: "link", url: "/content/posts" },
          { id: "media", title: "Media", icon: "image", type: "link", url: "/content/media" },
        ],
      },
    ],
    footer: [],
  }}
/>
```

## Notes

- The sidebar is designed for application layouts and admin dashboards.
- The component expects a structured config object rather than ad hoc child elements, which keeps the API consistent and predictable.
