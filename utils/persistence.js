const THEME_KEY = "theme";

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