"use client";

import { Button, CommandPalette} from "tavix";
import { useKeyboardShortcut } from "tavix/hooks";
import { useState } from "react";

const commandGroups = [
  {
    id: "navigation",
    label: "Navigation",
    items: [
      {
        id: "dashboard",
        label: "Dashboard",
        description: "Go to dashboard",
        icon: "house",
      },
      {
        id: "products",
        label: "Products",
        description: "Manage products",
        icon: "tags",
      },
      {
        id: "orders",
        label: "Orders",
        description: "View orders",
        icon: "file-text",
      },
    ],
  },
  {
    id: "actions",
    label: "Actions",
    items: [
      {
        id: "create",
        label: "Create Product",
        description: "Add a new product",
        icon: "plus",
      },
      {
        id: "settings",
        label: "Settings",
        icon: "settings",
      },
    ],
  },
];

function buildCommands(handleAction) {
  return commandGroups.map((group) => ({
    ...group,
    items: group.items.map((command) => ({
      ...command,
      onSelect: () => handleAction(command.id),
    })),
  }));
}

export default function CommandPaletteComponent() {
  const [open, setOpen] = useState(false);
  const [lastAction, setLastAction] = useState("No command selected");

  const handleAction = (action) => {
    setLastAction(`${action} selected`);
  };

  const commands = buildCommands(handleAction);

  useKeyboardShortcut("mod+k", () => setOpen((current) => !current), {
    shouldIgnoreTypingTarget: false,
  });

  return (
   <section className="flex flex-col gap-4">
      <h1 className="h1">Command Palette Component</h1>

      <Button onClick={() => setOpen(true)} className="btn-outline">Open Command Palette</Button>
      <CommandPalette
        open={open}
        onClose={() => setOpen(false)}
        commands={commands}
      />

      <p className="text-body">{lastAction}</p>
    </section>
  );
}
