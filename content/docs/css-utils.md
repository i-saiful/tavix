# Layout and utility classes

Reference for Tavix layout components and utility classes. Import `tavix/css` to enable styling. Class names below omit the leading `.` used in CSS selectors.

## Breakpoints

Responsive classes use a prefix in HTML/JSX and apply at the specified width **and above**:

| Prefix | Minimum viewport width |
| --- | --- |
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |

Only the classes listed as responsive below have prefixed versions. There is no general-purpose responsive prefix for every class. For example, `md:flex` and `md:mt-4` exist, but `md:pt-4` does not. The `.container` and `.section` also change padding at 1280px, without an `xl:` utility prefix.

```jsx
<div className="flex flex-col md:flex-row gap-4 md:gap-8">
  <div className="m-auto md:ml-auto">Content</div>
</div>
```

## Layout

| Purpose | Classes | Effect |
| --- | --- | --- |
| Display | `block`, `inline`, `inline-block`, `flex`, `inline-flex`, `grid`, `inline-grid`, `hidden` | Sets `display`. |
| Flex direction | `flex-row`, `flex-row-reverse`, `flex-col`, `flex-col-reverse` | Sets `flex-direction`. |
| Flex wrapping | `flex-wrap`, `flex-nowrap`, `flex-wrap-reverse` | Sets `flex-wrap`. |
| Flex distribution | `justify-start`, `justify-center`, `justify-end`, `justify-between`, `justify-around`, `justify-evenly` | Sets `justify-content`. |
| Flex alignment | `items-start`, `items-center`, `items-end`, `items-stretch`, `items-baseline` | Sets `align-items`. |
| Self alignment | `self-auto`, `self-start`, `self-center`, `self-end`, `self-stretch`, `self-baseline` | Sets `align-self`. |
| Flex sizing | `flex-0`, `flex-1`, `flex-auto`, `flex-none` | Sets the `flex` shorthand. |
| Equal flex children | `flex-equal` | Applies `flex: 1 1 0%` to direct children. |
| Grid columns | `grid-cols-1`, `grid-cols-2`, `grid-cols-3`, `grid-cols-4`, `grid-cols-5`, `grid-cols-6`, `grid-cols-12` | Sets equal-width grid columns. |
| Position | `static`, `relative`, `absolute`, `fixed`, `sticky`, `top-0` | Sets `position` or `top: 0`. |
| Overflow | `overflow-auto`, `overflow-hidden`, `overflow-visible`, `overflow-scroll`, `overflow-x-auto`, `overflow-y-auto`, `overflow-x-hidden`, `overflow-y-hidden` | Sets overflow on one or both axes. |
| Object fit | `object-contain`, `object-cover`, `object-fill`, `object-none`, `object-scale-down` | Sets `object-fit`. |
| Visibility | `visible`, `invisible` | Sets `visibility` (unlike `hidden`, which sets `display: none`). |

### Width and height

| Classes | Effect |
| --- | --- |
| `w-auto`, `w-full`, `w-screen`, `w-fit`, `w-max`, `w-min` | Width: auto, 100%, 100vw, fit-content, max-content, min-content. |
| `w-30`, `w-64` | Width: 7.5rem, 16rem. |
| `h-auto`, `h-full`, `h-screen`, `h-fit`, `h-max`, `h-min` | Height: auto, 100%, 100vh, fit-content, max-content, min-content. |
| `h-8`, `h-16`, `h-48`, `h-64`, `h-80`, `h-96` | Height: 2rem, 4rem, 12rem, 16rem, 20rem, 24rem. |
| `w-<fraction>`, `h-<fraction>` | Percent width/height; available fractions: `1/2`, `1/3`, `2/3`, `1/4`, `2/4`, `3/4`, `1/5`, `2/5`, `3/5`, `4/5`. These are literal classes such as `w-1/2`. |
| `min-w-0`, `min-w-full` | Minimum width: 0, 100%. |
| `min-h-0`, `min-h-full`, `min-h-screen` | Minimum height: 0, 100%, 100vh. |

### Maximum width and height

Max-size classes limit an element's size without forcing it to fill that size. Every class in this table supports `sm:`, `md:`, and `lg:` prefixes.

| Classes | Effect |
| --- | --- |
| `max-w-none`, `max-h-none` | Removes the maximum width/height limit. |
| `max-w-full`, `max-h-full` | Maximum width/height: 100%. |
| `max-w-screen`, `max-h-screen` | Maximum width: 100vw; maximum height: 100vh. |
| `max-w-fit`, `max-h-fit` | Maximum width/height: fit-content. |
| `max-w-max`, `max-h-max` | Maximum width/height: max-content. |
| `max-w-min`, `max-h-min` | Maximum width/height: min-content. |
| `max-w-<fraction>`, `max-h-<fraction>` | Percent maximum width/height; available fractions: `1/2`, `1/3`, `2/3`, `1/4`, `2/4`, `3/4`, `1/5`, `2/5`, `3/5`, `4/5`. |

Fractions represent their percentage equivalents: `1/2` is 50%, `1/3` is 33.333333%, `2/3` is 66.666667%, quarters are 25%/50%/75%, and fifths are 20%/40%/60%/80%. Percentage height limits require a containing block with a definite height.

There are no fixed numeric max-size classes such as `max-w-30`, `max-w-64`, `max-h-8`, `max-h-16`, `max-h-48`, `max-h-64`, `max-h-80`, or `max-h-96`, including responsive variants. The regular fixed-size `w-*` and `h-*` classes listed above remain available.

```jsx
<div className="w-full max-w-full sm:max-w-3/4 md:max-w-1/2 lg:max-w-1/3">
  Responsive width limit
</div>
<div className="max-h-screen md:max-h-none overflow-y-auto">
  Scrollable content on smaller screens
</div>
```

Use fractions and breakpoint prefixes directly in JSX class names, without the backslash escapes used in CSS selectors.

### Layout helpers

| Class / selector | Effect |
| --- | --- |
| `main` | Width 100%; padding `--space-6` by default, `--space-8` at `md`, `--space-10` at `lg`. |
| `container` | Width 100%, max-width 1440px, centered horizontally; inline padding `--space-4` by default, `--space-8` at `md`, `--space-10` at `lg`, `--space-12` at 1280px. |
| `section` | Width 100%, max-width 1440px, centered horizontally; padding on all sides `--space-4` by default, `--space-6` at `sm`, `--space-8` at `md`, `--space-10` at `lg`, `--space-12` at 1280px. |
| `form` element | All `form` elements receive flex column layout, width 100%, and gap `--space-4`. This is an element rule, not a `.form` class. |

### Main and Section components

`Main` and `Section` are exported from `tavix`. They render native `<main>` and `<section>` elements with the `main` and `section` classes respectively. Both accept `children`, an optional `className` (added to the built-in class), and native element props such as `id`, `style`, and ARIA attributes.

```jsx
import { Main, Section } from "tavix";
import "tavix/css";

<Main>
  <Section className="custom-section" aria-labelledby="features-heading">
    <h2 id="features-heading">Features</h2>
    <p>Section content</p>
  </Section>
</Main>
```

Section layout styling now targets `.section`, not every `<section>` element. Replace existing sections with `<Section>` or add `className="section"` to retain the centered, responsive layout. Bare `<section>` elements no longer receive this styling.

### Responsive layout classes

Each of `sm:`, `md:`, and `lg:` is available for **exactly** these layout classes:

- Display: `block`, `inline`, `inline-block`, `flex`, `inline-flex`, `grid`, `inline-grid`, `hidden`.
- Flex direction: `flex-row`, `flex-col` (not the reverse variants).
- Distribution: `justify-start`, `justify-center`, `justify-end`, `justify-between`, `justify-around`, `justify-evenly`.
- Alignment: `items-start`, `items-center`, `items-end`, `items-stretch`, `items-baseline`.
- Flex sizing: `flex-0`, `flex-1`, `flex-auto`, `flex-none`, `flex-equal`.
- Grid columns: `grid-cols-1`, `grid-cols-2`, `grid-cols-3`, `grid-cols-4`, `grid-cols-5`, `grid-cols-6`, `grid-cols-12`.
- Width/height: `w-auto`, `w-full`, `w-fit`, `w-screen`, `h-auto`, `h-full`, `h-fit`, `h-screen`, and all the `w-<fraction>` and `h-<fraction>` classes listed above.
- Maximum width/height: all the `max-w-*` and `max-h-*` keyword and fraction classes listed above.
- Visibility: `visible`, `invisible`.

For example, `sm:grid-cols-2`, `md:w-1/2`, and `lg:hidden` exist; `sm:overflow-auto` and `lg:w-max` do not.

## Utilities

Spacing values use the CSS tokens `--space-0` through `--space-8` (0, 4, 8, 12, 16, 20, 24, and 32px). In the tables below, `N` means one of **`0`, `1`, `2`, `3`, `4`, `5`, `6`, `8`**; for example, `mt-N` represents `mt-0`, `mt-1`, ..., `mt-8` (not `mt-7`). `x` and `y` use logical inline/block axes; directional `l`, `r`, `t`, `b` use physical sides.

### Padding

| Classes | CSS property |
| --- | --- |
| `p-N` | `padding` |
| `pt-N`, `pr-N`, `pb-N`, `pl-N` | `padding-top`, `padding-right`, `padding-bottom`, `padding-left` |
| `px-N`, `py-N` | `padding-inline`, `padding-block` |

There are no responsive padding variants.

### Margin

| Classes | CSS property |
| --- | --- |
| `m-N`, `m-auto` | `margin` |
| `mt-N`, `mr-N`, `mb-N`, `ml-N` | `margin-top`, `margin-right`, `margin-bottom`, `margin-left` |
| `mt-auto`, `mr-auto`, `mb-auto`, `ml-auto` | Auto margin on the named physical side. |
| `mx-N`, `my-N` | `margin-inline`, `margin-block` |
| `mx-auto`, `my-auto` | `margin-inline: auto`, `margin-block: auto` |

All margin classes in this table support `sm:`, `md:`, and `lg:` prefixes, including auto margins and every numbered value of `N` (`0`, `1`, `2`, `3`, `4`, `5`, `6`, `8`). For example, `sm:mx-auto`, `md:mt-4`, and `lg:my-2` work.

### Spacing between children

| Classes | Effect |
| --- | --- |
| `gap-N` | Sets `gap`; `sm:gap-N`, `md:gap-N`, and `lg:gap-N` also exist for every supported `N`. |
| `space-x-N`, `space-y-N` | Adds left or top margin to each child after the first, via `> * + *`. |
| `-space-x-N`, `-space-y-N` | Same child selector with negative left or top margin; `-space-x-0` and `-space-y-0` remain zero. |

The `space-*` classes have no responsive variants and use physical left/top margins.

### Colors and borders

| Classes | Effect |
| --- | --- |
| `text-placeholder`, `text-secondary`, `text-body`, `text-heading`, `text-title`, `text-primary`, `text-disabled`, `text-inverse`, `text-link`, `text-success`, `text-warning`, `text-error`, `text-info` | Semantic text color. All except `text-placeholder` use `!important`. |
| `bg-canvas`, `bg-surface`, `bg-secondary`, `bg-hover`, `bg-selected`, `bg-selected-subtle`, `bg-brand`, `bg-success`, `bg-warning`, `bg-error`, `bg-info` | Semantic background color. |
| `hover:bg-hover` | Hover-state background using `--color-background-hover`. |
| `border`, `border-dashed`, `border-subtle`, `border-strong`, `border-focus`, `border-error`, `border-success`, `border-warning`, `border-info` | Full 1px border with the named style/color. |
| `border-t`, `border-t-dashed`, `border-t-subtle`, `border-t-strong`, `border-t-focus`, `border-t-error`, `border-t-success`, `border-t-warning`, `border-t-info` | 1px top border with the named style/color. |
| `border-r`, `border-r-dashed`, `border-r-subtle`, `border-r-strong`, `border-r-focus`, `border-r-error`, `border-r-success`, `border-r-warning`, `border-r-info` | 1px right border with the named style/color. |
| `border-b`, `border-b-dashed`, `border-b-subtle`, `border-b-strong`, `border-b-focus`, `border-b-error`, `border-b-success`, `border-b-warning`, `border-b-info` | 1px bottom border with the named style/color. |
| `border-l`, `border-l-dashed`, `border-l-subtle`, `border-l-strong`, `border-l-focus`, `border-l-error`, `border-l-success`, `border-l-warning`, `border-l-info` | 1px left border with the named style/color. |
| `error-border` | Sets error border color on enabled, unfocused elements, including hover. Does not set border width/style by itself. |
| `icon-primary`, `icon-secondary`, `icon-disabled`, `icon-inverse`, `icon-brand`, `icon-success`, `icon-warning`, `icon-error`, `icon-info` | Semantic icon color. |
| `action-primary`, `action-primary-hover`, `action-primary-pressed`, `action-disabled` | Semantic action color (`!important`). These are color values, not automatic hover/pressed selectors. |

### Shape and visual effects

| Classes | Effect |
| --- | --- |
| `rounded-none`, `rounded-xs`, `rounded-sm`, `rounded`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-full` | Border radius from Tavix radius tokens (`rounded` uses `--radius-md`). |
| `rounded-left`, `rounded-right` | `--radius-md` on the corresponding physical corners; square opposite corners. |
| `shadow-none`, `shadow-xs`, `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl` | Box shadow from Tavix shadow tokens. |
| `focus-ring` | Focus/focus-within border color and ring shadow; removes the focus-visible outline. |
| `rotate-0`, `rotate-45`, `rotate-90`, `rotate-180`, `rotate-270`, `rotate-360` | Sets `transform: rotate(...)` in degrees. |
| `spin` | Continuous 1-second linear rotation animation. |

### Cursor

`cursor-auto`, `cursor-default`, `cursor-pointer`, `cursor-wait`, `cursor-text`, `cursor-move`, `cursor-help`, `cursor-not-allowed`, `cursor-none`, `cursor-grab`, `cursor-grabbing`, `cursor-crosshair`, `cursor-zoom-in`, and `cursor-zoom-out` set the corresponding CSS cursor value.

Only `cursor-pointer`, `cursor-default`, and `cursor-not-allowed` have `sm:`, `md:`, and `lg:` variants.

## Typography

Font tokens are set on `:root` and consumed by the classes below. The default `body` font is `--ff-base` (Inter) at `--fw-regular`; there is no `.font-base` class for this — it's applied globally to the `body` element.

### Type scale (display, heading, body, caption, label)

Each of these classes sets `font-size`, `font-weight`, and `line-height` together from paired tokens; you don't need to combine them with separate font-size/weight classes.

| Classes | Token group | Notes |
| --- | --- | --- |
| `display-xl`, `display-lg` | `--fs/fw/lh-display-xl`, `-lg` | Largest marketing/hero sizes; bold weight. |
| `h1`, `h2`, `h3`, `h4`, `h5`, `h6` | `--fs/fw/lh-h1` through `-h6` | Also apply automatically to the matching `h1`–`h6` elements, not just the classes. |
| `body-lg`, `body-md`, `body-sm` | `--fs/fw/lh-body-lg`, `-md`, `-sm` | Regular weight body text. |
| `caption` | `--fs/fw/lh-caption` | Smallest regular-weight text. |
| `label-lg`, `label-md`, `label-sm` | `--fs/fw/lh-label-lg`, `-md`, `-sm` | Medium weight, for form labels and UI text. |

### Font family and weight

| Classes | Effect |
| --- | --- |
| `ff-merienda` | Switches `font-family` to `--ff-merienda` (Merienda). There is no class for the base Inter family since it's the default. |
| `fw-bold` | Sets `font-weight: var(--fw-bold)` (700). There are no `fw-regular`, `fw-medium`, or `fw-semibold` classes; those weights are only available bundled inside the type-scale classes above. |

### Text alignment

`text-left`, `text-center`, `text-right`, and `text-justify` set `text-align`. All four have `sm:`, `md:`, and `lg:` variants.

### Font size (standalone)

These set only `font-size`, reusing the same size tokens as the type scale above, and can be combined with any `font-weight`/`line-height` you choose:

| Classes | Font size token |
| --- | --- |
| `text-xs` | `--fs-caption` (12px) |
| `text-sm` | `--fs-body-sm` (14px) |
| `text-md` | `--fs-body-md` (16px) |
| `text-lg` | `--fs-body-lg` (18px) |
| `text-xl` | `--fs-h4` (20px) |
| `text-2xl` | `--fs-h3` (24px) |
| `text-3xl` | `--fs-h2` (32px) |
| `text-4xl` | `--fs-h1` (40px) |
| `text-5xl` | `--fs-display-lg` (48px) |
| `text-6xl` | `--fs-display-xl` (64px) |

These `text-*` size classes have no responsive variants; only `text-left`/`text-center`/`text-right`/`text-justify` (alignment) do.

### Letter spacing

| Classes | Effect |
| --- | --- |
| `letter-spacing-normal` | `letter-spacing: normal`. |
| `letter-spacing-tight` | `-0.025em`. |
| `letter-spacing-wide` | `0.025em`. |
| `letter-spacing-wider` | `0.05em`. |
| `letter-spacing-widest` | `0.1em`. |

Only `letter-spacing-wide` has responsive variants (`sm:letter-spacing-wide`, `md:letter-spacing-wide`, `lg:letter-spacing-wide`); the other tracking classes do not.

```jsx
<h2 className="h2 text-center md:text-left">
  Section title
</h2>
<p className="body-md letter-spacing-wide">
  Supporting copy.
</p>
```

## Combining utilities

```jsx
<div className="container">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    <article className="p-4 rounded bg-surface border">Card</article>
  </div>
  <div className="flex flex-col md:flex-row gap-2 mt-4">
    <button className="md:ml-auto">Continue</button>
  </div>
</div>
```

Responsive classes are mobile-first: unprefixed styles apply at all sizes until overridden by a matching prefixed class. When combining shorthand and side-specific margins or padding, normal CSS cascade order still applies; class attribute order does not control which rule wins.
