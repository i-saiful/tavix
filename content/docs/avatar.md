# Avatar

A compact visual representation of a person, account, or entity. Avatar supports initials, images, custom content, fallback icons, and status indicators.

## Import Avatar

Import `Avatar` from Tavix:

```jsx
import { Avatar } from "tavix";
```

## Component API

```jsx
<Avatar
  size="md"
  status
  className=""
>
  JD
</Avatar>
```

### Props

- `children`: Initials, an image, or custom content displayed inside the avatar.
- `size`: Avatar size: `xs`, `sm`, `md`, `lg`, or `xl`. Defaults to `md`.
- `status`: Status indicator such as `online`, `busy`, or `offline`.
- `className`: Additional classes applied to the avatar. Defaults to `""`.

## Behavior

- Displays children as the avatar content when provided.
- Renders a user icon when no children are provided.
- Supports text initials for lightweight identity displays.
- Supports images and custom content inside the avatar.
- Applies the selected size to the avatar surface.
- Displays a status indicator when `status` is provided.
- Gives status indicators an accessible `aria-label`.
- Preserves the image `alt` text when an image is passed as children.

## Examples

### Initials and status

```jsx
<Avatar size="lg" status="online">
  JD
</Avatar>
```

### Image avatar

```jsx
<Avatar size="md">
  <img src="/avatar.jpg" alt="Jane Doe" />
</Avatar>
```

### Sizes

```jsx
<Avatar size="xs">XS</Avatar>
<Avatar size="sm">SM</Avatar>
<Avatar size="md">MD</Avatar>
<Avatar size="lg">LG</Avatar>
<Avatar size="xl">XL</Avatar>
```

### Status indicators

```jsx
<Avatar status="online">ON</Avatar>
<Avatar status="busy">BU</Avatar>
<Avatar status="offline">OF</Avatar>
```

### Fallback avatar

When no children are supplied, Avatar displays the default user icon:

```jsx
<Avatar size="lg" status="offline" />
```

### Custom content

```jsx
<Avatar className="team-avatar">
  <span aria-hidden="true">T</span>
</Avatar>
```

## Accessibility

- Provide meaningful `alt` text when an image identifies a person or entity.
- Use initials only when they are understandable in the surrounding context.
- Status indicators receive accessible labels from the `status` value.
- Use surrounding text or an accessible label when the avatar is interactive or represents a specific person.
- Do not rely on color alone to communicate status.

## Notes

- Avatar renders a user icon when no children are provided.
- Supported sizes are `xs`, `sm`, `md`, `lg`, and `xl`.
- Status values commonly include `online`, `busy`, and `offline`.
- `className` can be used to customize the avatar surface.
- Avatar does not provide interaction behavior by itself; wrap it in an accessible control when it acts as a button or link.