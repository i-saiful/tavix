# Sidebar

Use the Sidebar component to build a navigation rail or side menu with grouped links, nested sections, and a footer area.

## Source Structure

```sh
src/
|-- Sidebar.jsx
`-- utils/
	`-- persistence.js
```

## `persistence.js`

```js
const SIDEBAR_SELECTION_KEY = "sidebar";

export function initSidebarSelection() {
  const savedSelection = getLocalStorage(SIDEBAR_SELECTION_KEY);
  if (!savedSelection) {
    return { activeId: null, expandedId: null };
  }

  try {
    const selection = JSON.parse(savedSelection);
    return {
      activeId: typeof selection?.activeId === "string" ? selection.activeId : null,
      expandedId: typeof selection?.expandedId === "string" ? selection.expandedId : null,
    };
  } catch {
    return { activeId: null, expandedId: null };
  }
}

export function saveSidebarSelection(selection) {
  return setLocalStorage(SIDEBAR_SELECTION_KEY, JSON.stringify(selection));
}
```

## `Sidebar.jsx`

```jsx
import { useState } from "react";
import { Sidebar } from "tavix";
import { initSidebarSelection, saveSidebarSelection } from "./utils/persistence";

const items = {
  brand: { name: "MyApp", url: "/" },
  menu: [
    { id: "dashboard", title: "Dashboard", icon: "house", type: "link", url: "/dashboard" },
    {
      id: "content",
      title: "Content",
      icon: "folder",
      type: "link",
      url: "/content",
      children: [
        { id: "posts", title: "Posts", icon: "file", type: "link", url: "/content/posts" },
        { id: "media", title: "Media", icon: "image", type: "link", url: "/content/media" },
        { id: "categories", title: "Categories", icon: "folder", type: "link", url: "/content/categories" },
      ],
    },
    {
      id: "users",
      title: "Users & Access",
      icon: "user",
      type: "link",
      url: "/users",
      children: [
        { id: "all-users", title: "All Users", icon: "users", type: "link", url: "/users/all" },
        { id: "roles", title: "Roles", icon: "shield", type: "link", url: "/users/roles" },
      ],
    },
    { id: "analytics", title: "Analytics", icon: "file", type: "link", url: "/analytics" },
    { id: "settings", title: "Settings", icon: "settings", type: "link", url: "/settings" },
  ],
  footer: [
    { id: "help", title: "Help Center", icon: "question", type: "link", url: "/help" },
    { id: "sign-out", title: "Sign Out", icon: "log-out", type: "action", action: "/logout" },
  ],
};

export default function AppSidebar() {
  const [selection, setSelection] = useState(initSidebarSelection);

  function handleSelectionChange(nextSelection) {
    setSelection(nextSelection);
    saveSidebarSelection(nextSelection);
  }

  return (
    <Sidebar
      navItems={items}
      Link="a"
      activeId={selection.activeId}
      expandedId={selection.expandedId}
      onSelectionChange={handleSelectionChange}
      onAction={(action) => {
        if (action === "/logout") {
          window.location.assign(action);
        }
      }}
      enableTheme={true}
      curved={false}
    />
  );
}
```

### Sidebar Layout

```jsx
<main className="flex bg-surface h-screen overflow-hidden">
  <Sidebar />
  <div className="flex-1 overflow-y-auto">{children}</div>
</main>
```