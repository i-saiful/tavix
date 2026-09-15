# Grid

A responsive CSS grid layout component for arranging related content into flexible or fixed columns.

## Import Grid

Import `Grid` from Tavix:

```jsx
import { Grid } from "tavix";
```

## Component API

```jsx
<Grid
  gap={4}
  columns
  minWidth={250}
  className=""
  {...props}
>
  Children
</Grid>
```

### Props

- `children`: Elements rendered as grid items.
- `gap`: Spacing value used to create the `--grid-gap` custom property. Defaults to `4`.
- `columns`: Optional fixed column count, such as `2`. Supported utility counts are `1` through `6` and `12`.
- `minWidth`: Minimum item width used by the responsive auto-fit layout. Defaults to `250` pixels.
- `className`: Additional layout and responsive utility classes.
- `...props`: Additional DOM props forwarded to the grid root element.

## Behavior

- Renders children in a CSS grid layout.
- Uses responsive auto-fit behavior when `columns` is not provided.
- Uses `minWidth` to determine how many items fit in each row in auto-fit mode.
- Supports a fixed column count through `columns`.
- Supports responsive utility classes such as `md:grid-cols-2` through `className`.
- Creates the `--grid-gap` custom property from `gap`.
- Does not consume the `--grid-gap` property directly in the current stylesheet.
- Forwards additional DOM props to the root element.

## Examples

### Responsive auto-fit grid

```jsx
<Grid className="gap-4" minWidth={280}>
  <Card>One</Card>
  <Card>Two</Card>
  <Card>Three</Card>
</Grid>
```

### Two-column layout

```jsx
<Grid columns={2} className="gap-4">
  <Card>
    <h2>Profile</h2>
    <p>Manage profile information.</p>
  </Card>
  <Card>
    <h2>Security</h2>
    <p>Review security settings.</p>
  </Card>
</Grid>
```

### Fixed columns

```jsx
<Grid className="gap-4" columns={2}>
  <Card>One</Card>
  <Card>Two</Card>
</Grid>
```

### Responsive utility columns

```jsx
<Grid className="gap-4 md:grid-cols-2">
  <Card>One</Card>
  <Card>Two</Card>
  <Card>Three</Card>
</Grid>
```

### Responsive card collection

```jsx
<Grid minWidth={280} className="gap-4">
  {products.map((product) => (
    <Card key={product.id}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </Card>
  ))}
</Grid>
```

### Forwarded DOM props

```jsx
<Grid
  id="dashboard-grid"
  aria-label="Dashboard metrics"
  data-layout="metrics"
  className="gap-4"
>
  <Card>Revenue</Card>
  <Card>Orders</Card>
</Grid>
```

## Spacing and styles

Use a spacing utility such as `gap-4` for visible spacing between items:

```jsx
<Grid className="gap-4 md:grid-cols-2">
  <Card>One</Card>
  <Card>Two</Card>
</Grid>
```

The `gap` prop currently creates the `--grid-gap` custom property, but the stylesheet does not consume that variable directly. Additional `style` props replace the generated style object because they are spread afterward.

## Accessibility

- Use a descriptive `aria-label` when the grid represents a distinct collection without a visible heading.
- Give each grid item meaningful content and accessible names for interactive controls.
- Use headings inside cards or sections when the grid contains separate content groups.
- Do not use Grid as a replacement for semantic lists when the content is inherently a list.
- Ensure responsive columns do not hide or reorder content in a confusing way.

## Notes

- Grid uses responsive auto-fit layout when `columns` is omitted.
- Supported fixed column utility counts are `1` through `6` and `12`.
- `minWidth` defaults to `250` pixels.
- Use `className` for visible spacing and responsive column utilities.
- The current `gap` prop only creates `--grid-gap`; use a spacing utility such as `gap-4` for actual spacing.
- Additional DOM props are forwarded to the root element.