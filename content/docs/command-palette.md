# CommandPalette

Use the `CommandPalette` component to provide searchable command shortcuts in a keyboard-first interface.

## Import CommandPalette

Import `CommandPalette` from Tavix:

```jsx
import { CommandPalette } from "tavix";
```

## Component API

```jsx
<CommandPalette
  open={false}
  onClose
  commands={[]}
  placeholder="Search commands..."
/>
```

### Props

- `open`: Controls whether the command palette is visible.
- `onClose`: Callback fired when the palette is closed.
- `commands`: Array of command groups. Each group may contain `id`, `label`, and an array of command items.
- `placeholder`: Placeholder text shown in the search input.

## Behavior

- Opens a full-screen overlay with a search input and grouped result list.
- Filters commands based on label, description, and keywords.
- Supports keyboard navigation with arrow keys, `Enter`, and `Escape`.
- Keeps the input focused when opened.
- Prevents background scrolling while the palette is open.
- Calls `onClose` when a command is selected and `closeOnSelect` is not disabled.

## Examples

### Basic command palette

```jsx
const commands = [
  {
    id: "navigation",
    label: "Navigation",
    items: [
      { id: "home", label: "Go to home", onSelect: () => console.log("Home") },
      { id: "settings", label: "Open settings", onSelect: () => console.log("Settings") },
    ],
  },
];

<CommandPalette
  open={open}
  onClose={() => setOpen(false)}
  commands={commands}
/>
```

### Searchable commands with descriptions

```jsx
<CommandPalette
  open={open}
  onClose={closePalette}
  commands={[
    {
      id: "actions",
      label: "Actions",
      items: [
        {
          id: "new-project",
          label: "New project",
          description: "Create a new project from scratch",
          keywords: ["create", "project"],
          onSelect: () => console.log("New project"),
        },
      ],
    },
  ]}
  placeholder="Search actions..."
/>
```

## Notes

- `CommandPalette` is ideal for developer tools, admin dashboards, and keyboard-centric workflows.
- It is most useful when a large number of commands need to be searched and invoked quickly.
