"use client";

import { Badge, Checkbox, Icon, InputTable, SelectableTable, Table} from "tavix";
import { useEffect, useState } from "react";

const columns = [
  { key: "id", label: "ID", width: 100 },
  { key: "name", label: "Name", width: 240 },
  { key: "phone", label: "Phone", width: 220 },
];

const contacts = [
  { id: 1, name: "Alice", phone: "+1 202-555-0101" },
  { id: 2, name: "Bob", phone: "+1 202-555-0102" },
  { id: 3, name: "Charlie", phone: "+1 202-555-0103" },
  { id: 4, name: "Diana", phone: "+1 202-555-0104" },
  { id: 5, name: "Ethan", phone: "+1 202-555-0105" },
  { id: 6, name: "Fatima", phone: "+1 202-555-0106" },
  { id: 7, name: "Grace", phone: "+1 202-555-0107" },
  { id: 8, name: "Henry", phone: "+1 202-555-0108" },
  { id: 9, name: "Iris", phone: "+1 202-555-0109" },
  { id: 10, name: "Jack", phone: "+1 202-555-0110" },
];

const mobileOptions = [
  { label: "iPhone 15", value: "iPhone 15", brand: "Apple", price: 799.99 },
  { label: "Galaxy S24", value: "Galaxy S24", brand: "Samsung", price: 799.99 },
  { label: "Samsung Galaxy S24 Ultra Enterprise Edition 1TB", value: "Samsung Galaxy S24 Ultra Enterprise Edition 1TB", brand: "Samsung Business", price: 1599.99 },
  { label: "Pixel 9", value: "Pixel 9", brand: "Google", price: 699.99 },
  { label: "OnePlus 12", value: "OnePlus 12", brand: "OnePlus", price: 799.99 },
  { label: "Xiaomi 14", value: "Xiaomi 14", brand: "Xiaomi", price: 699.99 },
];

const initialMobileRows = [
  { id: 1, name: "", brand: "", price: "", imei: "", amount: "" },
];

const mobileColumns = [
  { key: "id", label: "#", width: 72 },
  {
    key: "name",
    label: "Name",
    width: 220,
    autocomplete: {
      options: mobileOptions,
      fillColumns: { brand: "brand", price: "price" },
      width: 300,
      placeholder: "",
      renderOption: (option) => (
        <span className="flex min-w-0 flex-1 items-center justify-start gap-2 overflow-hidden whitespace-nowrap">
          <Icon name="phone" width={14} height={14} className="flex-none text-secondary" aria-hidden="true" />
          <span className="label-md flex-none whitespace-nowrap text-primary">{option.label}</span>
          <span
            className="body-sm flex min-w-0 items-center gap-1 overflow-hidden whitespace-nowrap text-secondary"
            style={{ flex: "0 1 11rem" }}>
            <span className="min-w-0 overflow-hidden whitespace-nowrap" style={{ flex: "0 1 6rem", textOverflow: "ellipsis" }}>
              {option.brand},
            </span>
            <span className="flex-none">{option.price}</span>
          </span>
        </span>
      ),
    },
  },
  {
    key: "brand",
    label: "Brand",
    width: 140,
    disabled: true,
  },
  {
    key: "price",
    label: "Price",
    width: 120,
    disabled: true,
  },
  {
    key: "imei",
    label: "IMEI",
    width: 220,
    input: { type: "text", inputMode: "numeric", maxLength: 15 },
  },
  {
    key: "amount",
    label: "Amount",
    width: 120,
    input: { type: "number", min: 0, step: "0.01" },
  },
];

const contactActions = [
  { label: "Edit", icon: "square-pen" },
  { label: "Delete", icon: "trash", danger: true },
  { label: "More", icon: "ellipsis-vertical" },
];

const initialQuery = {
  currentPage: 1,
  pageSize: 5,
  sortKey: null,
  sortDirection: "asc",
};

const getContactResponse = (query) => {
  const { currentPage, pageSize, sortKey, sortDirection } = query;
  const rows = [...contacts];

  if (sortKey) {
    rows.sort((first, second) => {
      const result = String(first[sortKey]).localeCompare(
        String(second[sortKey]),
        undefined,
        { numeric: true, sensitivity: "base" },
      );
      return sortDirection === "desc" ? -result : result;
    });
  }

  const start = (currentPage - 1) * pageSize;
  return {
    query,
    data: rows.slice(start, start + pageSize),
    pagination: {
      currentPage,
      pageSize,
      totalItems: contacts.length,
      totalPages: Math.ceil(contacts.length / pageSize),
    },
  };
};

export default function TableComponent() {
  const [selectedAction, setSelectedAction] = useState("No action selected");
  const [selectedRows, setSelectedRows] = useState([]);
  const [mobileRows, setMobileRows] = useState(() => initialMobileRows.map((row) => ({ ...row })));
  const [previewLoading, setPreviewLoading] = useState(false);
  const [showActions, setShowActions] = useState(true);
  const [stickyHeader, setStickyHeader] = useState(true);
  const [clientSort, setClientSort] = useState({
    key: null,
    direction: "asc",
  });
  const [serverQuery, setServerQuery] = useState(initialQuery);
  const [response, setResponse] = useState(() => ({
    ...getContactResponse(initialQuery),
    query: null,
  }));
  const loading = response.query !== serverQuery;

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setResponse(getContactResponse(serverQuery));
    }, 300);
    return () => window.clearTimeout(timeout);
  }, [serverQuery]);

  const changePage = (currentPage) =>
    setServerQuery((query) => ({ ...query, currentPage }));
  const changePageSize = (pageSize) =>
    setServerQuery((query) => ({ ...query, currentPage: 1, pageSize }));
  const changeSort = ({ key, direction }) =>
    setServerQuery((query) => ({
      ...query,
      currentPage: 1,
      sortKey: key,
      sortDirection: direction,
    }));

  const actions = showActions ? contactActions : [];
  const handleAction = (action, row, rowIndex) => {
    setSelectedAction(`${action.label}: ${row.name} (row ${rowIndex + 1})`);
  };
  return (
    <section className="flex flex-col gap-4">
      <header className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="h1 text-xl text-heading">Contacts</h1>
          <Badge>{contacts.length} contacts</Badge>
        </div>
        <div className="flex flex-wrap items-center gap-6 py-3 border-b-subtle">
          <label className="inline-flex items-center gap-2 cursor-pointer body-sm">
            <Checkbox
              size={20}
              checked={previewLoading}
              onChange={(event) => setPreviewLoading(event.target.checked)}
            />
            Loading
          </label>
          <label className="inline-flex items-center gap-2 cursor-pointer body-sm">
            <Checkbox
              size={20}
              checked={showActions}
              onChange={(event) => setShowActions(event.target.checked)}
            />
            Actions
          </label>
          <label className="inline-flex items-center gap-2 cursor-pointer body-sm">
            <Checkbox
              size={20}
              checked={stickyHeader}
              onChange={(event) => setStickyHeader(event.target.checked)}
            />
            Sticky header
          </label>
        </div>
      </header>

      <section aria-label="Server Pagination" className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="h2 text-lg text-heading">Server Pagination</h2>
          <Badge variant={loading ? "warning" : "neutral"}>
            {loading ? "Loading" : `Page ${response.pagination.currentPage} of ${response.pagination.totalPages}`}
          </Badge>
        </div>
        <Table
          columns={columns}
          data={response.data}
          pagination={response.pagination}
          pageSize={response.pagination.pageSize}
          pageSizeOptions={[3, 5, 10]}
          onPageChange={changePage}
          onPageSizeChange={changePageSize}
          loading={loading || previewLoading}
          loadingRows={5}
          stickyHeader={stickyHeader}
          maxHeight={360}
          sortKey={serverQuery.sortKey}
          sortDirection={serverQuery.sortDirection}
          onSortChange={changeSort}
          actions={actions}
          onAction={handleAction}
        />
        <p className="body-sm text-secondary" role="status">{selectedAction}</p>
      </section>

      <section aria-label="Client Pagination" className="flex flex-col gap-4">
        <h2 className="h2 text-lg text-heading">Client Pagination</h2>
        <Table
          columns={columns}
          data={contacts}
          pagination={true}
          pageSize={5}
          pageSizeOptions={[3, 5, 10]}
          loading={previewLoading}
          loadingRows={5}
          stickyHeader={stickyHeader}
          maxHeight={360}
          defaultSortKey={null}
          defaultSortDirection="asc"
          onSortChange={setClientSort}
          actions={actions}
          onAction={handleAction}
        />
        <p className="body-sm text-secondary" role="status">
          Sort: {clientSort.key ? `${clientSort.key} (${clientSort.direction})` : "None"}
        </p>
      </section>

      <section aria-label="Selectable Table" className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="h2 text-lg text-heading">Selectable Table</h2>
          <Badge variant={selectedRows.length ? "brand" : "neutral"} role="status">
            {selectedRows.length} selected
          </Badge>
        </div>
        <SelectableTable
          columns={columns}
          actions={actions}
          onAction={handleAction}
          data={contacts}
          onSelectionChange={setSelectedRows}
          loading={previewLoading}
          loadingRows={5}
          stickyHeader={stickyHeader}
          maxHeight={420}
        />
      </section>

      <section aria-label="Mobile List" className="flex flex-col gap-4">
        <h2 className="h2 text-lg text-heading">Mobile List</h2>
        <InputTable
          columns={mobileColumns}
          data={mobileRows}
          onDataChange={setMobileRows}
        />
      </section>
    </section>
  );
}
