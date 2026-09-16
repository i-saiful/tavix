# Pagination

Use the `Pagination` component to navigate through large sets of data with page buttons, page-size controls, and a direct page jump field.

## Import Pagination

Import `Pagination` from Tavix:

```jsx
import { Pagination } from "tavix";
```

## Component API

```jsx
<Pagination
  currentPage={1}
  totalPages={10}
  siblingCount={1}
  pageSize={10}
  pageSizeOptions={[10, 20, 50]}
  showPageSize={true}
  showGoTo={true}
  onPageChange
  onPageSizeChange
  className
/>
```

### Props

- `currentPage`: The active page number.
- `totalPages`: Total number of pages available.
- `siblingCount`: Number of neighboring pages shown around the current page.
- `pageSize`: Current page-size value.
- `pageSizeOptions`: Allowed page-size choices for the dropdown.
- `showPageSize`: Shows the page-size selector when `true`.
- `showGoTo`: Shows the quick go-to-page input when `true`.
- `onPageChange`: Callback fired when the page changes.
- `onPageSizeChange`: Callback fired when the page-size value changes.
- `className`: Additional class names for the pagination wrapper.

## Behavior

- Renders a compact, accessible pagination control with buttons and ellipses.
- Provides previous and next button actions.
- Handles page ranges with ellipsis for large page counts.
- Supports a page-size dropdown with a listbox role and selected state.
- Includes a number input to jump to a specific page.
- Validates invalid page numbers and resets them to the current value.
- Uses `aria-label`, `aria-current`, and `aria-selected` on interactive elements.

## Examples

### Basic pagination

```jsx
<Pagination
  currentPage={4}
  totalPages={12}
  onPageChange={(page) => console.log("Page", page)}
/>
```

### With page size and jump controls

```jsx
<Pagination
  currentPage={2}
  totalPages={25}
  pageSize={10}
  pageSizeOptions={[10, 20, 50]}
  showPageSize
  showGoTo
  onPageChange={setPage}
  onPageSizeChange={(size) => console.log("Page size", size)}
/>
```

## Notes

- Pagination is commonly used with tabular data or search results.
- The component is controlled from the parent, so the consuming application manages the active page state.
