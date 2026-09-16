# Dropdown

Use the `Dropdown` component to show a menu of actions or selectable options triggered by a button.

## Import Dropdown

Import `Dropdown` from Tavix:

```jsx
import { Dropdown } from "tavix";
```

## Component API

```jsx
<Dropdown
  trigger
  items={[]}
  value
  onChange
  placement="bottom-start"
  disabled={false}
  textWeight="normal"
/>
```

### Props

- `trigger`: Content displayed in the dropdown trigger button.
- `items`: Array of menu items. Each item may include `id`, `label`, `value`, `icon`, `disabled`, `type`, and `onClick`.
- `value`: Current selected value used for highlighting the active item.
- `onChange`: Callback fired when an item is selected.
- `placement`: Placement relative to the trigger button. Defaults to `bottom-start`.
- `disabled`: Disables the trigger button and prevents opening the menu.
- `textWeight`: Controls the menu text weight. Common values include `normal` and `bold`.

## Behavior

- Renders a trigger button with `aria-expanded` and `aria-haspopup="menu"` support.
- Toggles the menu open and closed when the trigger is clicked.
- Closes when the user clicks outside or presses Escape.
- Supports item separators via `item.type === "separator"`.
- Highlights the selected item when `value` matches the item value or id.
- Calls `item.onClick` and then closes the menu after a selection.

## Examples

### Basic dropdown

```jsx
<Dropdown
  trigger="Sort by"
  items={[
    { id: "newest", label: "Newest" },
    { id: "oldest", label: "Oldest" },
    { id: "popular", label: "Popular" },
  ]}
  onChange={(value) => console.log(value)}
/>
```

### Dropdown with icons and selected item

```jsx
<Dropdown
  trigger="Actions"
  value="edit"
  items={[
    { id: "edit", label: "Edit", icon: "pencil" },
    { id: "duplicate", label: "Duplicate", icon: "copy" },
    { type: "separator", id: "divider" },
    { id: "delete", label: "Delete", icon: "trash", danger: true },
  ]}
/>
```

## Notes

- Use `Dropdown` for compact selection menus and quick action lists.
- It is lighter-weight than a full popover and better suited to direct user choices.
