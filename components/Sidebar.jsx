"use client";

import { Sidebar } from "tavix";
import { useMount } from "tavix/hooks";
import Link from "next/link";
import sidebar from "@/content/data/sidebar.json";
import { initTheme, saveTheme, THEMES, initSidebar, saveSidebar } from "@/utils/persistence.js";
import { useState } from "react";

export default function AppSidebar() {
  const [theme, setTheme] = useState();
  const [selection, setSelection] = useState({ activeId: null, expandedId: null });

  useMount(() => {
    setTheme(initTheme());
    setSelection(initSidebar());
  });

  function toggleTheme() {
    const nextTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    setTheme(nextTheme);
    saveTheme(nextTheme);
  }

  function handleSelectionChange(nextSelection) {
    setSelection(nextSelection);
    saveSidebar(nextSelection);
  }

  return (
    <Sidebar
      navItems={sidebar}
      Link={Link}
      activeId={selection.activeId}
      expandedId={selection.expandedId}
      onSelectionChange={handleSelectionChange}
      onThemeToggle={toggleTheme}
      enableTheme={true}
      isDarkMode={theme === THEMES.DARK}
    />
  );
}
