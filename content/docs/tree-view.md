# TreeView

A hierarchical tree for displaying nested items such as files, folders, navigation, and categories.

## Import TreeView

Import `TreeView` from Tavix:

```jsx
import { TreeView } from "tavix";
```

## Component API

```jsx
<TreeView
  items={items}
  defaultSelectedId
  defaultExpandedIds
  curved={false}
  showIcons={false}
  onSelect
/>
```

### Props

- `items`: One tree item or an array of tree items to display.
- `defaultSelectedId`: Initially selected item ID.
- `defaultExpandedIds`: Initially expanded item IDs. Root nodes are expanded by default when omitted.
- `curved`: Changes connector styling. Defaults to `false`.
- `showIcons`: Renders item icons and changes the toggle treatment. Defaults to `false`.
- `onSelect`: Callback called with the selected item.

### Item shape

```js
{
  id: "src",
  label: "src",
  icon: "folder",
  children: [
    { id: "index", label: "index.js" },
  ],
}
```

- `id`: Unique identifier for the item.
- `label`: Text displayed for the item.
- `icon`: Optional Tavix icon name displayed when `showIcons` is enabled.
- `children`: Optional nested items.

## Behavior

- Renders nested items from the `items` tree.
- Supports one root item or an array of root items.
- Expands root nodes by default when `defaultExpandedIds` is omitted.
- Uses `defaultExpandedIds` to set the initial expanded nodes.
- Uses `defaultSelectedId` to set the initial selected item.
- Manages selection and expansion internally after the initial values are applied.
- Calls `onSelect` with the selected item when a row is selected.
- Renders item icons when `showIcons` is `true`.
- Changes connector styling when `curved` is `true`.
- Does not expose controlled selected or expanded state props.

## Examples

### Basic tree

```jsx
<TreeView
  items={treeItems}
  defaultSelectedId="src"
  defaultExpandedIds={["src"]}
  showIcons
  onSelect={(item) => console.log(item)}
/>
```

### File tree

```jsx
const treeItems = [
  {
    id: "src",
    label: "src",
    icon: "folder",
    children: [
      { id: "app", label: "app.js", icon: "file" },
      { id: "styles", label: "styles.css", icon: "file" },
    ],
  },
  {
    id: "readme",
    label: "README.md",
    icon: "file",
  },
];

<TreeView items={treeItems} showIcons />;
```

### Selected and expanded items

```jsx
<TreeView
  items={treeItems}
  defaultSelectedId="app"
  defaultExpandedIds={["src"]}
  showIcons
  onSelect={(item) => {
    console.log("Selected:", item.id);
  }}
/>;
```

### Curved connectors

```jsx
<TreeView
  items={treeItems}
  curved
  showIcons
/>;
```

### Nested categories

```jsx
<TreeView
  items={[
    {
      id: "components",
      label: "Components",
      children: [
        {
          id: "forms",
          label: "Forms",
          children: [
            { id: "input", label: "Input" },
            { id: "select", label: "Select" },
          ],
        },
      ],
    },
  ]}
  onSelect={(item) => console.log(item)}
/>;
```

## Selection and expansion

`defaultSelectedId` and `defaultExpandedIds` set the initial state. Selection and expansion are then managed internally; use `onSelect` to respond to selection changes.

## Accessibility

- Use descriptive `label` values so each row is understandable.
- Provide unique `id` values for all items.
- Use `onSelect` to update surrounding context when a user selects an item.
- The current implementation uses clickable rows without tree roles, keyboard handling, or expanded/selected ARIA state.
- Provide surrounding labels and context when stronger accessibility semantics are required.
- Do not rely on connector styling or icons alone to communicate hierarchy.

## Notes

- Items can be nested through the `children` property.
- Root nodes are expanded by default when `defaultExpandedIds` is omitted.
- Selection and expansion are internally controlled after initialization.
- `showIcons` changes both item icon visibility and toggle treatment.
- `curved` changes connector styling.
- `onSelect` receives the selected item object.