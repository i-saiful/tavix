# Selectable Table

A selectable data table built on the Table component. Use it when users need to select one or more rows for bulk actions such as editing, exporting, or deleting.

## Import Selectable Table

Import `SelectableTable` from Tavix:

```jsx
import { SelectableTable } from "tavix";
```

## Component API

```jsx
<SelectableTable
  columns={[]}
  data={[]}
  selectedRowIds
  defaultSelectedRowIds={[]}
  onSelectionChange
  getRowId
  getRowClassName
  loading={false}
  className=""
/>
```

SelectableTable accepts the Table props plus selection-specific props.

### Table props

Pass the same data and column configuration used by `Table`, including `columns`, `data`, `loading`, `stickyHeader`, `getRowClassName`, and column rendering options.

### Selection props

- `selectedRowIds`: Controlled array of selected row IDs.
- `defaultSelectedRowIds`: Initial selected row IDs for uncontrolled usage. Defaults to an empty array.
- `onSelectionChange`: Callback called with `(selectedRows, selectedRowIds)` after selection changes.
- `getRowId`: Callback used to identify a row. Defaults to `row.id ?? rowIndex`.
- `getRowClassName`: Callback for applying classes to table rows.
- `className`: Additional classes applied to the table.

## Behavior

- Prepends a checkbox column for row selection.
- Supports selecting individual rows and changing selection through the row checkboxes.
- Supports controlled selection through `selectedRowIds`.
- Supports uncontrolled selection through `defaultSelectedRowIds`.
- Calls `onSelectionChange` with the selected row objects and selected row IDs.
- Uses `getRowId` to keep selection stable when rows do not use the default identifier.
- Disables pagination for the selectable table.
- Adds row-specific accessible labels to selection checkboxes.
- Applies selected-row styling to selected rows.
- Reuses Table sorting, loading, sticky-header, responsive, column, and cell-rendering behavior.

## Examples

### Basic selectable table

```jsx
<SelectableTable
  columns={[{ key: "name", label: "Name" }]}
  data={users}
  onSelectionChange={(rows, ids) => setSelectedIds(ids)}
/>
```

### Controlled selection

```jsx
const [selectedRowIds, setSelectedRowIds] = useState([]);

<SelectableTable
  columns={columns}
  data={users}
  selectedRowIds={selectedRowIds}
  onSelectionChange={(selectedRows, ids) => {
    setSelectedRowIds(ids);
    console.log("Selected rows:", selectedRows);
  }}
/>;
```

### Initially selected rows

Use `defaultSelectedRowIds` when the table should manage selection after an initial selection:

```jsx
<SelectableTable
  columns={columns}
  data={users}
  defaultSelectedRowIds={["user-1", "user-3"]}
  onSelectionChange={(rows, ids) => {
    console.log(ids);
  }}
/>;
```

### Custom row IDs

Use `getRowId` when the row identifier is stored under a different property:

```jsx
<SelectableTable
  columns={columns}
  data={users}
  getRowId={(row) => row.userId}
  onSelectionChange={(rows, ids) => setSelectedIds(ids)}
/>;
```

### Loading and sorting

```jsx
<SelectableTable
  columns={columns}
  data={users}
  loading
  defaultSortKey="name"
  defaultSortDirection="asc"
  stickyHeader
/>;
```

## Selection events

`onSelectionChange` receives both the selected row objects and their IDs:

```jsx
<SelectableTable
  columns={columns}
  data={users}
  onSelectionChange={(selectedRows, selectedRowIds) => {
    saveSelection(selectedRows);
    console.log(selectedRowIds);
  }}
/>;
```

## Accessibility

- Selection controls are rendered as checkboxes with row-specific accessible labels.
- Use clear column labels so selected rows remain understandable when navigating the table.
- Use `getRowId` to keep selection identity stable across data updates.
- Keep bulk actions close to the table and communicate how many rows are selected.
- Preserve meaningful cell content and labels when using custom column renderers.

## Notes

-   disables pagination and displays selection across the available rows.
- Use `selectedRowIds` with `onSelectionChange` for controlled selection.
- Use `defaultSelectedRowIds` for uncontrolled selection with initial selected rows.
- `getRowId` defaults to `row.id ?? rowIndex`.
- Selectable Table reuses the Table column and rendering configuration.
- The selection callback receives `(selectedRows, selectedRowIds)`.