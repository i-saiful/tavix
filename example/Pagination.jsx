"use client";

import { Pagination} from "tavix";
import { useState } from "react";

export default function PaginationComponent() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const totalItems = 250;
  const totalPages = Math.ceil(totalItems / pageSize);

  return (
    <section className="flex flex-col gap-4">
      <h1 className="h1">Pagination Component</h1>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
        siblingCount={1}
        size="md"
        pageSize={pageSize}
        pageSizeOptions={[10, 20, 50, 100]}
        onPageSizeChange={(size) => {
          setPageSize(size);
          setPage(1);
        }}
        showPageSize
        pageSizeLabel="Rows"
        showPageSizeLabel={true}
        showGoToPage
        goToPageLabel="Page"
      />
    </section>
  );
}