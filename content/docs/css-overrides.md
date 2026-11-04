# Customize Tavix CSS

Install Tavix before using its components and styles.

```bash
npm i tavix
```

Import Tavix's base stylesheet first. Then add your font and color overrides to your application's global stylesheet.

## CSS overrides

Import `tavix/css` before your application stylesheet so your variables can override the base styles.

### React/Vite

Import both stylesheets in `main.jsx`:

```jsx
+import "tavix/css";
import "./index.css";
```

### Next.js

Import both stylesheets in `app/layout.js`:

```jsx
+import "tavix/css";
import "./globals.css";
```

## Set the global body font

Declare the font in `:root`, then apply it to `body` to use it across the page.

```css
:root {
  --font-inter: "Inter", sans-serif;
  --font-base: var(--font-inter);
}

body {
  font-family: var( --font-base);
}
```

## Where to add overrides

Add your font and color variables to your global stylesheet, such as `src/index.css` or `app/globals.css`.

## Color system

Each token combines its prefix with one of the shade values below. For example, neutral shade `700` is `--color-neutral-700`.

| Palette | Token prefix | Shade values | Count |
| ---7 | ---11 | --- | :---:5 |
| Neutral | `--color-neutral-` | 0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 | 12 |
| Brand | `--color-brand-` | 50, 100, 200, 300, 400, 500, 600, 700, 800, 900 | 10 |
| Success | `--color-success-` | 50, 100, 200, 300, 400, 500, 600, 700, 800, 900 | 10 |
| Warning | `--color-warning-` | 50, 100, 200, 300, 400, 500, 600, 700, 800, 900 | 10 |
| Error | `--color-error-` | 50, 100, 200, 300, 400, 500, 600, 700, 800, 900 | 10 |
| Info | `--color-info-` | 50, 100, 200, 300, 400, 500, 600, 700, 800, 900 | 10 |

## Semantic color system

Semantic variables describe how a color is used, while palette tokens provide its value. Keep each semantic variable name the same across themes, and change its palette value for light and dark modes.

For example, define `--color-text-body` for each theme, then use that variable in your styles:

```css
:root {
  --color-text-body: var(--color-neutral-700);
}

[data-theme="dark"] {
  --color-text-body: var(--color-neutral-300);
}

body {
  color: var(--color-text-body);
}
```

When adding a color, define its purpose-based semantic variable in each theme and use that variable in your components or utility classes.

### Semantic Tokens at a Glance

Keep semantic variable names the same in each theme. Change the palette value for light and dark modes, then use the semantic variable in your styles.

#### Text

- `--color-text-primary`: Main interface text.
- `--color-text-title`: Page and screen titles.
- `--color-text-heading`: Section headings.
- `--color-text-body`: Paragraphs and other body copy.
- `--color-text-secondary`: Supporting or less prominent text.
- `--color-text-placeholder`: Hints inside empty fields.
- `--color-text-disabled`: Text in unavailable controls.
- `--color-text-inverse`: Text on contrasting backgrounds.
- `--color-text-link`: Default link text.
- `--color-text-link-hover`: Link text while hovered.
- `--color-text-selected`: Selected text.
- `--color-text-success`: Success messages or labels.
- `--color-text-warning`: Warning messages or labels.
- `--color-text-error`: Error messages or labels.
- `--color-text-info`: Informational messages or labels.

#### Background

- `--color-background-canvas`: Main page background.
- `--color-background-surface`: Background for cards, panels, and other content surfaces.
- `--color-background-secondary`: Background for nested or lower-emphasis surfaces.
- `--color-background-overlay`: Dimmed layer behind a dialog or modal.
- `--color-background-hover`: Background for hovered items.
- `--color-background-selected-subtle`: Subtle background for selected items.
- `--color-background-selected`: Strong background for selected items.
- `--color-background-disabled`: Background for unavailable controls.
- `--color-background-brand`: Brand-colored surface.
- `--color-background-success`: Background for success states.
- `--color-background-warning`: Background for warning states.
- `--color-background-error`: Background for error states.
- `--color-background-info`: Background for informational states.

#### Border

- `--color-border-subtle`: Low-emphasis borders and separators.
- `--color-border-default`: Standard borders.
- `--color-border-strong`: High-emphasis borders.
- `--color-border-disabled`: Borders on unavailable controls.
- `--color-border-brand`: Brand-colored borders.
- `--color-border-focus`: Borders on focused controls.
- `--color-border-selected`: Borders on selected items.
- `--color-border-success`: Borders for success states.
- `--color-border-warning`: Borders for warning states.
- `--color-border-error`: Borders for error states.
- `--color-border-info`: Borders for informational states.

#### Icon

- `--color-icon-primary`: Main interface icons.
- `--color-icon-secondary`: Supporting icons.
- `--color-icon-disabled`: Icons in unavailable controls.
- `--color-icon-inverse`: Icons on contrasting surfaces.
- `--color-icon-brand`: Brand-colored icons.
- `--color-icon-selected`: Icons in selected items.
- `--color-icon-success`: Icons for success states.
- `--color-icon-warning`: Icons for warning states.
- `--color-icon-error`: Icons for error states.
- `--color-icon-info`: Icons for informational states.

#### Action

- `--color-action-primary`: Default primary action.
- `--color-action-primary-hover`: Primary action on hover.
- `--color-action-primary-pressed`: Primary action while pressed.
- `--color-action-secondary`: Default secondary action.
- `--color-action-secondary-hover`: Secondary action on hover.
- `--color-action-secondary-pressed`: Secondary action while pressed.
- `--color-action-danger`: Default destructive action.
- `--color-action-danger-hover`: Destructive action on hover.
- `--color-action-danger-pressed`: Destructive action while pressed.
- `--color-action-disabled`: Unavailable actions.

#### Other

- `--color-focus-ring`: Keyboard-focus indicator.
- `--color-divider`: Separators between content.
- `--color-background-tooltip`: Tooltip background.
- `--color-text-tooltip`: Tooltip text.
- `color-scheme: dark`: Tells the browser to use dark styling for native controls.

## Customization tips

- Import only the fonts your project uses.
- Keep `--font-base` as the single source of truth for the application font.
- Add only the color families needed by your design system.
- Use semantic variables for component-specific colors when light and dark themes need different values.
