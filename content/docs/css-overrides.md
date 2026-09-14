# CSS Overrides

Use these CSS variables to customize the global font and color palette for your app. Start with the font setup, then add the color systems your project needs.

## Import fonts

Choose the fonts your app needs and add their imports at the top of your global stylesheet.

### Inter

```css
/* Inter — Dashboard, SaaS, ERP */
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
```

### Roboto

```css
/* Roboto — Material Design */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
```

### Open Sans

```css
/* Open Sans — Business Applications */
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap");
```

### Poppins

```css
/* Poppins — Marketing Websites */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
```

### Nunito Sans

```css
/* Nunito Sans — Friendly, Modern Interfaces */
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700&display=swap");
```

### Merienda

```css
/* Merienda — Playful, Creative */
@import url("https://fonts.googleapis.com/css2?family=Merienda:wght@400;500;600;700&display=swap");
```

## Declare font variables

Define a variable for each imported font inside `:root`. Set `--ff-base` to the font you want to use across the app.

```css
:root {
  /* Font Family */
  --ff-inter: "Inter", sans-serif;
  --ff-roboto: "Roboto", sans-serif;
  --ff-open-sans: "Open Sans", sans-serif;
  --ff-poppins: "Poppins", sans-serif;
  --ff-nunito-sans: "Nunito Sans", sans-serif;
  --ff-merienda: "Merienda", cursive;

  /* Default Font */
  --ff-base: var(--ff-inter);
}
```

## Add variables to your global stylesheet

Place the font variables and color variables in your app's global stylesheet. Tavix uses these variables globally, so no component-level setup is required.

### React/Vite

Add the variables to `src/index.css` or another stylesheet imported by `main.jsx`. Import `tavix/css` before your application CSS.

```jsx
import "tavix/css";
import "./index.css";
```

### Next.js

Add the variables to `app/globals.css`, which is imported by `app/layout.js`. Import `tavix/css` before your application CSS.

```jsx
import "tavix/css";
import "./globals.css";
```

## Color system

Add each color family to `:root` as needed. Keeping each family separate makes the palette easier to copy, review, and customize.

### Neutral colors

```css
:root {
  /* Neutral */
  --color-neutral-0: #ffffff;
  --color-neutral-50: #f9fafb;
  --color-neutral-100: #f3f4f6;
  --color-neutral-200: #e5e7eb;
  --color-neutral-300: #d1d5db;
  --color-neutral-400: #9ca3af;
  --color-neutral-500: #6b7280;
  --color-neutral-600: #4b5563;
  --color-neutral-700: #374151;
  --color-neutral-800: #1f2937;
  --color-neutral-900: #111827;
  --color-neutral-950: #030712;
}
```

### Brand colors

```css
:root {
  /* Brand */
  --color-brand-50: #eff6ff;
  --color-brand-100: #dbeafe;
  --color-brand-200: #bfdbfe;
  --color-brand-300: #93c5fd;
  --color-brand-400: #60a5fa;
  --color-brand-500: #3b82f6;
  --color-brand-600: #2563eb;
  --color-brand-700: #1d4ed8;
  --color-brand-800: #1e40af;
  --color-brand-900: #1e3a8a;
}
```

### Success colors

```css
:root {
  /* Success */
  --color-success-50: #f0fdf4;
  --color-success-100: #dcfce7;
  --color-success-200: #bbf7d0;
  --color-success-300: #86efac;
  --color-success-400: #4ade80;
  --color-success-500: #22c55e;
  --color-success-600: #16a34a;
  --color-success-700: #15803d;
  --color-success-800: #166534;
  --color-success-900: #14532d;
}
```

### Warning colors

```css
:root {
  /* Warning */
  --color-warning-50: #fefce8;
  --color-warning-100: #fef9c3;
  --color-warning-200: #fef08a;
  --color-warning-300: #fde047;
  --color-warning-400: #facc15;
  --color-warning-500: #eab308;
  --color-warning-600: #ca8a04;
  --color-warning-700: #a16207;
  --color-warning-800: #854d0e;
  --color-warning-900: #713f12;
}
```

### Error colors

```css
:root {
  /* Error */
  --color-error-50: #fef2f2;
  --color-error-100: #fee2e2;
  --color-error-200: #fecaca;
  --color-error-300: #fca5a5;
  --color-error-400: #f87171;
  --color-error-500: #ef4444;
  --color-error-600: #dc2626;
  --color-error-700: #b91c1c;
  --color-error-800: #991b1b;
  --color-error-900: #7f1d1d;
}
```

### Info colors

```css
:root {
  /* Info */
  --color-info-50: #ecfeff;
  --color-info-100: #cffafe;
  --color-info-200: #a5f3fc;
  --color-info-300: #67e8f9;
  --color-info-400: #22d3ee;
  --color-info-500: #06b6d4;
  --color-info-600: #0891b2;
  --color-info-700: #0e7490;
  --color-info-800: #155e75;
  --color-info-900: #164e63;
}
```

## Semantic color system

Use semantic variables instead of raw palette colors. Keep the token names the same in both themes.

### `light.css`

```css
:root {
  --color-text-body: var(--color-neutral-700);
  --color-background-surface: var(--color-neutral-0);
  --color-action-primary: var(--color-brand-600);
}
```

### `dark.css`

```css
[data-theme="dark"] {
  --color-text-body: var(--color-neutral-300);
  --color-background-surface: var(--color-neutral-900);
  --color-action-primary: var(--color-brand-500);
}
```

### `utils.css`

```css
.text-body {
  color: var(--color-text-body);
}
```

When adding a color, create one purpose-based semantic variable in both theme files, then use it in your component or utility class.

## Customization tips

- Import only the fonts your project uses.
- Keep `--ff-base` as the single source of truth for the application font.
- Add only the color families needed by your design system.
- Use semantic variables for component-specific colors when light and dark themes need different values.
