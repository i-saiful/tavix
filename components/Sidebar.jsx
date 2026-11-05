"use client";

import { useSyncExternalStore, useState } from "react";
import { Sidebar } from "tavix";
import { useMount } from "tavix/hooks";
import Link from "next/link";
import sidebar from "@/content/data/sidebar.json";
import { initTheme, saveTheme, THEMES } from "@/utils/persistence.js";

const STORAGE_KEY = "sidebar";

const DEFAULT_SELECTION = {
  activeId: null,
  expandedId: null,
};

const listeners = new Set();

function getSnapshot() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function getServerSnapshot() {
  return null;
}

function subscribe(callback) {
  listeners.add(callback);
  window.addEventListener("storage", callback);

  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function updateSelection(selection) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selection));
  } catch {
    // Ignore unavailable storage
  }

  listeners.forEach((callback) => callback());
}

export default function AppSidebar() {
  const [theme, setTheme] = useState();
  const saved = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useMount(() => {
    setTheme(initTheme());
  });

  function toggleTheme() {
    const nextTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    setTheme(nextTheme);
    saveTheme(nextTheme);
  }

  let selection = DEFAULT_SELECTION;

  try {
    if (saved) {
      selection = {
        ...DEFAULT_SELECTION,
        ...JSON.parse(saved),
      };
    }
  } catch {
    // Use default selection
  }

  return (
    <Sidebar
      navItems={sidebar}
      Link={Link}
      activeId={selection.activeId}
      expandedId={selection.expandedId}
      onSelectionChange={updateSelection}
      onThemeToggle={toggleTheme}
      enableTheme={true}
      isDarkMode={theme === THEMES.DARK}
    />
  );
}
