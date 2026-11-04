# Theme Toggle

This React app lets you switch between light and dark themes. The selected theme is saved in browser local storage and restored when the app loads again.

## How It Works

- The app reads the saved theme when it initializes. If there is no saved dark theme, it starts in light mode.
- Select **Theme Change** to switch between light and dark.
- The active theme is set on the main element with the `data-theme` attribute, which the app's styles use to apply theme colors.
- The choice is stored under the `theme` local-storage key. If browser storage is unavailable, the app continues to work for the current page, but the choice may not persist after reload.

## Code Example

### Source Structure

```bash
src/
|-- App.jsx
|-- index.css
|-- main.jsx
`-- utils/
	`-- persistence.js
```

### persistence.js

```js
export function getLocalStorage(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function setLocalStorage(key, value) {
  try {
    window.localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

export const THEME_KEY = "theme";
export const THEMES = Object.freeze({
  DARK: "dark",
  LIGHT: "light",
});

export function getTheme() {
  return getLocalStorage(THEME_KEY) === THEMES.DARK ? THEMES.DARK : THEMES.LIGHT;
}

export function saveTheme(theme) {
  return setLocalStorage(THEME_KEY, theme);
}
```

### App.jsx
```jsx
import { useState } from "react";
import { Button } from "tavix";
+import { getTheme, saveTheme, THEMES } from "./utils/persistence.js";

function App() {
+  const [theme, setTheme] = useState(getTheme);

+  function toggleTheme() {
+    const nextTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
+    setTheme(nextTheme);
+    saveTheme(nextTheme);
+  }

  return (
+    <main className="flex justify-center items-center h-screen flex-col gap-5 bg-canvas" data-theme={theme}>
      <h1 className="h1 text-primary">
        Currently Theme is
        <span className="font-monospace bg-surface px-3 rounded ml-4 letter-spacing-widest">
+          {theme === THEMES.LIGHT ? "Light theme" : "Dark theme"}
        </span>
      </h1>
+      <Button className="btn btn-primary" onClick={toggleTheme}>
        Theme Change
      </Button>
    </main>
  );
}

export default App;
```