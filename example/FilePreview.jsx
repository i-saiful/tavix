"use client";

import { FilePreview } from "tavix";

const files = [
  {
    id: "1",
    name: "app-screenshot.jpg",
    url: "/tavix/images/app-screenshot.jpg",
    type: "image/jpeg",
    size: 14853,
    status: "uploading",
    progress: 42,
  },
  {
    id: "2",
    name: "user-avatar.jpg",
    url: "/tavix/images/user-avatar.jpg",
    type: "image/jpeg",
    size: 8624461,
    status: "success",
  },
  {
    id: "3",
    name: "project-proposal.pdf",
    url: "/tavix/files/project-proposal.pdf",
    type: "application/pdf",
    size: 1024,
    status: "success",
  },
  {
    id: "4",
    name: "contacts-export.csv",
    url: "/tavix/files/contacts-export.csv",
    type: "text/csv",
    size: 1024,
    status: "success",
  },
  {
    id: "5",
    name: "design-assets.zip",
    url: "/files/design-assets.zip",
    type: "application/zip",
    size: 1651614,
  },
];

export default function FilePreviewComponent() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="h1">File Preview Component</h1>

      <div className="flex flex-col gap-4">
        <FilePreview
          files={files}
          onRemove={(file) => {
            console.log(file);
          }}
        />
        <FilePreview
          files={files}
          groupByStatus
          onRemove={(file) => {
            console.log(file);
          }}
        />
      </div>
    </section>
  );
}
