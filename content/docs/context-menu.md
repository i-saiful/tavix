# Context Menu

Use the `ContextMenu` component to show a menu anchored to a right-click or context interaction.

## Import Context Menu

Import `ContextMenu` from Tavix:

```jsx
import { ContextMenu } from "tavix";
```

## Component API

```jsx
<ContextMenu
  children
  items={[]}
  disabled={false}
/>
```

### Props

- `children`: Content that triggers the context menu when right-clicked.
- `items`: Array of menu items. Each item may include `id`, `label`, `icon`, `shortcut`, `disabled`, `danger`, and `onClick`.
- `disabled`: Disables the context-menu trigger when `true`.

## Behavior

- Opens the menu when the user right-clicks on the trigger content.
- Anchors the menu near the click location, clamped to the viewport bounds.
- Closes when the user clicks outside the menu, presses Escape, or scrolls the page.
- Renders separators through `item.type === "separator"`.
- Supports keyboard-friendly menu items with clickable actions and optional shortcuts.

## Examples

### Basic context menu

```jsx
<ContextMenu
  items={[
    { id: "open", label: "Open", onClick: () => console.log("Open") },
    { id: "rename", label: "Rename", onClick: () => console.log("Rename") },
    { type: "separator", id: "divider" },
    { id: "delete", label: "Delete", danger: true, onClick: () => console.log("Delete") },
  ]}
>
  <div className="context-surface">Right click here</div>
</ContextMenu>
```

## Notes

- Context menus are intended for desktop-style contextual actions and quick-launch patterns.
- Because they are triggered by a right-click, they are especially useful for file lists, canvas views, or data grids.
