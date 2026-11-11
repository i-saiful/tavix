"use client";

import { ContextMenu, Icon } from "tavix";
import { getShortcutLabel, useKeyboardShortcut } from "tavix/hooks";
import { useState } from "react";

const actions = {
  edit: { name: "Edit", shortcut: "mod+e" },
  copy: { name: "Copy", shortcut: "mod+c" },
  duplicate: { name: "Duplicate", shortcut: "mod+shift+d" },
  download: { name: "Download", shortcut: "alt+arrowdown" },
  delete: { name: "Delete" },
};

export default function ContextMenuComponent() {
  const [lastAction, setLastAction] = useState("No action selected");

  const handleAction = (action) => {
    setLastAction(`${action} selected for Q3 roadmap.pdf`);
  };

  useKeyboardShortcut(actions.edit.shortcut, () =>
    handleAction(actions.edit.name),
  );
  useKeyboardShortcut(actions.copy.shortcut, () =>
    handleAction(actions.copy.name),
  );
  useKeyboardShortcut(actions.duplicate.shortcut, () =>
    handleAction(actions.duplicate.name),
  );
  useKeyboardShortcut(actions.download.shortcut, () =>
    handleAction(actions.download.name),
  );

  const items = [
    {
      id: "edit",
      label: "Edit file",
      icon: "square-pen",
      shortcut: getShortcutLabel(actions.edit.shortcut),
      onClick: () => handleAction(actions.edit.name),
    },
    {
      id: "copy",
      label: "Copy file",
      icon: "copy",
      shortcut: getShortcutLabel(actions.copy.shortcut),
      onClick: () => handleAction(actions.copy.name),
    },
    {
      id: "duplicate",
      label: "Duplicate file",
      icon: "copy",
      shortcut: getShortcutLabel(actions.duplicate.shortcut),
      onClick: () => handleAction(actions.duplicate.name),
    },
    {
      id: "download",
      label: "Download file",
      icon: "download",
      shortcut: getShortcutLabel(actions.download.shortcut),
      onClick: () => handleAction(actions.download.name),
    },
    {
      type: "separator",
      id: "file-actions-divider",
    },
    {
      id: "delete",
      label: "Delete file",
      icon: "trash",
      danger: true,
      shortcut: getShortcutLabel(actions.download.shortcut),
      onClick: () => handleAction(actions.delete.name),
    },
  ];

  return (
    <section className="flex flex-col gap-4">
      <h1 className="h1">Context Menu Component</h1>

      <ContextMenu items={items}>
        <div className="p-6 border rounded-lg flex items-center gap-3">
          <Icon name="file-text" size={24} className="icon-brand" />
          <div>
            <strong className="text-title">Q3 roadmap.pdf</strong>
            <p className="mt-1 text-secondary">2.4 MB PDF document</p>
          </div>
        </div>
      </ContextMenu>

      <p className="text-body">{lastAction}</p>
    </section>
  );
}
