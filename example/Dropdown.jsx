"use client";

import { Dropdown, Icon} from "tavix";
import { useState } from "react";

const statusItems = [
  {
    id: "active",
    label: "Active",
  },
  {
    id: "inactive",
    label: "Inactive",
  },
  {
    id: "pending",
    label: "Pending",
  },
];

export default function DropdownComponent() {
  const [status, setStatus] = useState("active");
  const selectedStatus = statusItems.find((item) => item.id === status);

  const projectActions = [
    {
      id: "edit",
      label: "Edit project",
      icon: "square-pen",
      type: "action",
      onClick: () => console.log("Edit project"),
    },
    {
      id: "duplicate",
      label: "Duplicate project",
      icon: "copy",
      type: "action",
      onClick: () => console.log("Duplicate project"),
    },
    {
      id: "divider",
      type: "separator",
    },
    {
      id: "delete",
      label: "Delete project",
      icon: "trash",
      type: "action",
      onClick: () => console.log("Delete project"),
    },
  ];

  return (
    <section className="flex flex-col gap-4">
      <h1 className="h1">Dropdown Component</h1>

      <div className="flex items-center gap-4">
        <Dropdown
          trigger={`Status: ${selectedStatus.label}`}
          // value={status}
          items={statusItems}
          onChange={setStatus}
          textWeight="normal"
        />

        <Dropdown
          trigger={<Icon name="ellipsis-vertical" size={20} />}
          placement="bottom-end"
          items={projectActions}
          textWeight="bold"
        />
      </div>

      <p className="text-body">
        Showing {selectedStatus.label.toLowerCase()} projects.
      </p>
    </section>
  );
}
