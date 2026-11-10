const THEME_KEY = "theme";
const SIDEBAR_KEY = "sidebar";

function getLocalStorage(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function setLocalStorage(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {}
}

export const THEMES = Object.freeze({
  DARK: "dark",
  LIGHT: "light",
});

export function initTheme() {
  const theme = getLocalStorage(THEME_KEY) === THEMES.LIGHT ? THEMES.LIGHT : THEMES.DARK;
  document.documentElement.dataset.theme = theme;
  return theme;
}

export function saveTheme(theme) {
  document.documentElement.dataset.theme = theme;
  setLocalStorage(THEME_KEY, theme);
}

export function initSidebar() {
  const savedSelection = getLocalStorage(SIDEBAR_KEY);
  if (!savedSelection) {
    return { activeId: null, expandedId: null };
  }

  try {
    const selection = JSON.parse(savedSelection);
    return {
      activeId: typeof selection?.activeId === "string" ? selection.activeId : null,
      expandedId: typeof selection?.expandedId === "string" ? selection.expandedId : null,
    };
  } catch {
    return { activeId: null, expandedId: null };
  }
}

export function saveSidebar(selection) {
  return setLocalStorage(SIDEBAR_KEY, JSON.stringify(selection));
}
