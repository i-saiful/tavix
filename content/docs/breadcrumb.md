# Breadcrumb

Use the `Breadcrumb` component to show a user’s location in a navigation hierarchy and make multi-level pages easier to understand.

## Import Breadcrumb

Import `Breadcrumb` from Tavix:

```jsx
import { Breadcrumb } from "tavix";
```

## Component API

```jsx
<Breadcrumb
  items={[]}
  separator
  LinkComponent="a"
  border={false}
  className
/>
```

### Props

- `items`: Array of breadcrumb items. Each item should include a `label` and may include `href`, `id`, and other link props.
- `separator`: Custom separator content shown between breadcrumb items.
- `LinkComponent`: Component or tag used for non-current breadcrumb links. Defaults to `"a"`.
- `border`: Adds a border styling to the breadcrumb container.
- `className`: Additional class names for the breadcrumb root.

## Behavior

- Renders a semantic `nav` element with an accessible label.
- Uses an ordered list for the breadcrumb trail.
- Marks the current page with `aria-current="page"`.
- Renders the last item as the current page and does not link it.
- Falls back to a chevron separator when no custom `separator` is provided.
- Accepts either string labels or custom content objects from the `items` array.

## Examples

### Basic breadcrumb

```jsx
<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Laptops" },
  ]}
/>
```

### Custom separator and border

```jsx
<Breadcrumb
  items={[
    { label: "Dashboard", href: "/dashboard" },
    { label: "Reports", href: "/reports" },
    { label: "Monthly" },
  ]}
  separator="/"
  border
/>
```

## Notes

- Breadcrumb items are best used for deep navigation where context matters.
- The `items` array is intentionally lightweight and can be composed with existing router link components.
