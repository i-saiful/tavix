"use client";

import { TreeView } from "tavix";

const treeData = {
  id: "tree",
  label: "Project",
  icon: "folder",
  children: [
    {
      id: "src",
      label: "src",
      icon: "folder",
      children: [
        {
          id: "components",
          label: "components",
          icon: "folder",
        },
      ],
    },
    {
      id: "public",
      label: "public",
      icon: "folder",
    },
    {
      id: "package",
      label: "package.json",
      icon: "file",
    },
  ],
};

export default function TreeViewComponent() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="h1 text-2xl font-bold mb-2">TreeView Component</h1>

      <TreeView
        items={treeData}
        curved
        onSelect={(item) => {
          console.log(item);
        }}
      />

      <TreeView
        items={treeData}
        curved
        showIcons
        onSelect={(item) => {
          console.log(item);
        }}
      />

      <TreeView
        items={treeData}
        onSelect={(item) => {
          console.log(item);
        }}
      />

      <TreeView
        items={treeData}
        defaultSelectedId="button"
        defaultExpandedIds={["tree", "src", "components"]}
        showIcons
        onSelect={(item) => {
          console.log(item);
        }}
      />
    </section>
  );
}
