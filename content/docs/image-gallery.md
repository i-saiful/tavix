# Image Gallery

Use the `ImageGallery` component to display a responsive collection of image cards in either a standard grid or a masonry-style layout.

## Import Image Gallery

Import `ImageGallery` from Tavix:

```jsx
import { ImageGallery } from "tavix";
```

## Component API

```jsx
<ImageGallery
  images={[]}
  columns={3}
  gap="md"
  layout="grid"
  className
/>
```

### Props

- `images`: Array of image objects to render. Each item should include `content` and may include an `id` for stable keys.
- `columns`: Number of columns in grid layouts. Defaults to `3`.
- `gap`: Gap size token for the gallery spacing. Defaults to `md`.
- `layout`: Layout mode. Supported values include `grid` and `masonry`.
- `className`: Additional class names for the gallery root.

## Behavior

- Renders each image through `ImagePreview` so every item can open in a full-screen dialog.
- Supports both `grid` and `masonry` layouts.
- Uses the image `id` when present, otherwise falls back to its array index.
- Produces a varying masonry tile size by hashing the image key.
- Returns `null` when the `images` array is empty.

## Examples

### Standard grid

```jsx
const images = [
  { id: "img-1", content: <img src="/images/one.jpg" alt="One" /> },
  { id: "img-2", content: <img src="/images/two.jpg" alt="Two" /> },
  { id: "img-3", content: <img src="/images/three.jpg" alt="Three" /> },
  { id: "img-4", content: <img src="/images/four.jpg" alt="Four" /> },
];

<ImageGallery images={images} columns={3} gap="md" layout="grid" />;
```

### Masonry layout

```jsx
<ImageGallery
  images={images}
  columns={2}
  gap="lg"
  layout="masonry"
/>
```

### Empty state

```jsx
<ImageGallery images={[]} />;
```

## Notes

- The gallery expects each item to render its own content, which makes it flexible for images, cards, or custom media blocks.
- The component prefers composition over a fixed data model, so the caller can provide any valid image-like content.
