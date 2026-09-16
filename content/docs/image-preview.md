# Image Preview

Use the `ImagePreview` component when you want a thumbnail or image block that opens in a larger dialog overlay.

## Import Image Preview

Import `ImagePreview` from Tavix:

```jsx
import { ImagePreview } from "tavix";
```

## Component API

```jsx
<ImagePreview className>
  <img src="/images/demo.jpg" alt="Demo" />
</ImagePreview>
```

### Props

- `children`: The image or content shown in the preview trigger and the full-size overlay.
- `className`: Additional class names applied to the trigger element.

## Behavior

- Renders a button trigger around the provided content.
- Opens a dialog overlay when the trigger is clicked.
- Closes when the user clicks the backdrop or presses the Escape key.
- Locks page scroll while the preview dialog is open.
- Restores scroll after closing.
- Uses `role="dialog"` and `aria-modal="true"` for accessibility.
- Provides a close button with an accessible label.

## Examples

### Basic preview

```jsx
<ImagePreview>
  <img src="/images/gallery-1.jpg" alt="Sunset landscape" />
</ImagePreview>
```

### With custom styling

```jsx
<ImagePreview className="feature-image-preview">
  <img src="/images/team-photo.jpg" alt="Team photo" />
</ImagePreview>
```

## Notes

- The child content should be a valid image or HTML element that can be displayed in a larger modal view.
- The component is ideal for thumbnails, product images, and gallery entries where a lightweight preview is useful.
