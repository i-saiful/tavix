# CSS Overrides

Use the following CSS variables to set the global font and color palette for your app. The `--ff-base` variable is the default body font used across the application.

## Global font variables

```css
/* Inter — Dashboard, SaaS, ERP */
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

/* Roboto — Material Design */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

/* Open Sans — Business Applications */
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap");

/* Poppins — Marketing Websites */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

/* Nunito Sans — Friendly, Modern Interfaces */
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700&display=swap");

/* Merienda — Playful, Creative */
@import url("https://fonts.googleapis.com/css2?family=Merienda:wght@400;500;600;700&display=swap");

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

## Global colors

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

## React usage

In React/Vite, add this CSS to your global stylesheet, such as `src/index.css` or `src/styles.css`.

```css
body {
  font-family: var(--ff-base);
  background: var(--color-neutral-50);
  color: var(--color-neutral-900);
}
```

## Next.js usage

In Next.js, import the CSS file in your app entry, for example in `app/globals.css` or `app/layout.js`.

```css
body {
  font-family: var(--ff-base);
  background: var(--color-neutral-50);
  color: var(--color-neutral-900);
}
```

```js
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

## Notes

- `--ff-base` is the default body font for the entire application.
- Use the color variables for consistent theme design across components.
- You can change the base font by replacing `var(--ff-inter)` with another font variable such as `var(--ff-poppins)` or `var(--ff-roboto)`.
