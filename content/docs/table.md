# Table

A data table for displaying structured rows and columns with sorting, pagination, loading skeletons, sticky headers, truncation, and custom cell rendering.

## Import Table

Import `Table` from Tavix:

```jsx
import { Table } from "tavix";
```

## Component API

```jsx
<Table
  columns={[]}
  data={[]}
  pagination={false}
  pageSize={10}
  pageSizeOptions={[5, 10, 20, 50]}
  loading={false}
  stickyHeader={false}
  defaultSortKey={null}
  defaultSortDirection="asc"
  sortKey
  sortDirection
  onSortChange
  getRowClassName
  className=""
/>
```

### Props

- `columns`: Column definitions used to render headers and cells.
- `data`: Row data displayed in the table.
- `pagination`: Enables pagination. A boolean enables client-side slicing; an object can provide server-side pagination totals.
- `pageSize`: Number of rows displayed per page. Defaults to `10`.
- `pageSizeOptions`: Available page sizes. Defaults to `[5, 10, 20, 50]`.
- `loading`: Displays loading skeletons instead of row content. Defaults to `false`.
- `stickyHeader`: Keeps the table header visible while scrolling. Defaults to `false`.
- `defaultSortKey`: Initial sort column for uncontrolled sorting.
- `defaultSortDirection`: Initial sort direction, either `asc` or `desc`. Defaults to `asc`.
- `sortKey`: Controlled sort column.
- `sortDirection`: Controlled sort direction.
- `onSortChange`: Callback called when sorting changes.
- `getRowClassName`: Callback for applying classes to rows.
- `className`: Additional classes applied to the table.

### Column shape

```js
{
  key: "name",
  label: "Name",
  width: "200px",
  skeletonWidth: "120px",
  className: "",
  align: "left",
  maxWidth: "240px",
  sortable: true,
  truncate: true,
  wrap: false,
  render: (value, row, index) => value,
  sorter: (firstRow, secondRow) => 0,
  sortValue: (row) => row.name,
}
```

Column properties:

- `key`: Property used to read the cell value.
- `label`: Header text displayed for the column.
- `width`: Column width.
- `skeletonWidth`: Width used by loading skeletons.
- `className`: Additional classes applied to the column.
- `align`: Cell alignment, such as `left`, `center`, or `right`.
- `maxWidth`: Maximum column width.
- `sortable`: Enables sorting for the column.
- `truncate`: Truncates overflowing cell content.
- `wrap`: Allows cell content to wrap.
- `render`: Custom cell renderer receiving `(value, row, index)`.
- `sorter`: Custom comparator receiving two rows.
- `sortValue`: Value accessor used for sorting.

## Behavior

- Renders column headers and data rows from `columns` and `data`.
- Supports client-side sorting through `defaultSortKey` or controlled sorting props.
- Calls `onSortChange` when the active sort key or direction changes.
- Supports client-side pagination when `pagination` is `true`.
- Supports server-side pagination when `pagination` is configured with an object value.
- Displays loading skeletons when `loading` is `true`.
- Keeps headers visible while scrolling when `stickyHeader` is `true`.
- Truncates or wraps cell content according to the column configuration.
- Uses custom `render` functions for formatted or interactive cell content.
- Applies row classes returned by `getRowClassName`.
- Renders nothing for an empty table that is not loading.
- Uses `scope="col"` and `aria-sort` for sortable headers.
- Makes sorting controls keyboard accessible.

## Examples

### Basic table

```jsx
<Table
  columns={[
    { key: "name", label: "Name", sortable: true },
    {
      key: "status",
      label: "Status",
      render: (value) => <strong>{value}</strong>,
    },
  ]}
  data={rows}
  pagination
  pageSize={10}
/>
```

### Controlled sorting

```jsx
const [sort, setSort] = useState({
  key: "name",
  direction: "asc",
});

<Table
  columns={columns}
  data={rows}
  sortKey={sort.key}
  sortDirection={sort.direction}
  onSortChange={(key, direction) => {
    setSort({ key, direction });
  }}
/>;
```

### Client-side pagination

```jsx
<Table
  columns={columns}
  data={rows}
  pagination
  pageSize={20}
  pageSizeOptions={[10, 20, 50]}
/>;
```

Boolean pagination slices the supplied data on the client.

### Custom cell rendering

```jsx
<Table
  columns={[
    { key: "name", label: "Name" },
    {
      key: "status",
      label: "Status",
      render: (value) => <strong>{value}</strong>,
    },
    {
      key: "amount",
      label: "Amount",
      align: "right",
      render: (value) => `$${value.toFixed(2)}`,
    },
  ]}
  data={rows}
/>;
```

### Loading and sticky header

```jsx
<Table
  columns={columns}
  data={rows}
  loading
  stickyHeader
/>;
```

### Truncation and wrapping

```jsx
<Table
  columns={[
    {
      key: "description",
      label: "Description",
      maxWidth: "240px",
      truncate: true,
    },
    {
      key: "notes",
      label: "Notes",
      wrap: true,
    },
  ]}
  data={rows}
/>;
```

## Sorting

Use `defaultSortKey` and `defaultSortDirection` for uncontrolled sorting:

```jsx
<Table
  columns={[
    { key: "name", label: "Name", sortable: true },
    { key: "createdAt", label: "Created", sortable: true },
  ]}
  data={rows}
  defaultSortKey="createdAt"
  defaultSortDirection="desc"
/>;
```

For controlled sorting, pass `sortKey`, `sortDirection`, and `onSortChange` together.

## Accessibility

- Column headers use `scope="col"`.
- Sortable headers expose the current state through `aria-sort`.
- Sorting controls can be operated with the keyboard.
- Use descriptive column labels so row values have clear context.
- Preserve accessible names when rendering interactive content through `render`.
- Keep loading and empty states understandable to users of assistive technology.

## Notes

- Use `defaultSortKey` for uncontrolled sorting or `sortKey` and `sortDirection` for controlled sorting.
- Boolean `pagination` enables client-side slicing.
- An object pagination value supports server-side totals.
- Empty non-loading tables render nothing.
- `render` receives the cell value, row, and row index.
- `sortValue` can provide a normalized value for sorting.