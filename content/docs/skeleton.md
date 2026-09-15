# Skeleton

A decorative loading placeholder for representing content before it is available. It provides preset shapes, optional dimensions, shimmer animation, and reduced-motion support.

## Import Skeleton

Import `Skeleton` from Tavix:

```jsx
import { Skeleton } from "tavix";
```

## Component API

```jsx
<Skeleton
  variant="text"
  width
  height
  radius
  className=""
  {...props}
/>
```

### Props

- `variant`: Placeholder shape: `text`, `title`, `avatar`, `thumbnail`, `button`, `input`, or `card`. Defaults to `text`.
- `width`: Inline width override for the placeholder.
- `height`: Inline height override for the placeholder.
- `radius`: Inline border-radius override.
- `className`: Additional classes applied to the skeleton.
- `...props`: Additional props forwarded to the root `<span>`.

## Behavior

- Renders a decorative placeholder while content is loading.
- Applies preset dimensions and styling based on `variant`.
- Supports inline `width`, `height`, and `radius` overrides.
- Uses shimmer animation by default.
- Is hidden from assistive technology with `aria-hidden` by default.
- Respects the user's reduced-motion preference.
- Forwards additional props to the root `<span>`.

## Examples

### Text placeholders

```jsx
<Skeleton variant="text" width="70%" />
<Skeleton variant="title" width="45%" />
```

### Profile placeholder

```jsx
<div className="profile-loading">
  <Skeleton variant="avatar" />
  <div>
    <Skeleton variant="title" width="140px" />
    <Skeleton variant="text" width="200px" />
  </div>
</div>
```

### Content placeholders

```jsx
<Skeleton variant="thumbnail" width="240px" height="140px" />
<Skeleton variant="card" height="180px" />
<Skeleton variant="input" height="40px" />
<Skeleton variant="button" width="120px" />
```

### Custom dimensions

```jsx
<Skeleton
  variant="text"
  width="80%"
  height="18px"
  radius="4px"
/>;
```

### Loading list

```jsx
{isLoading ? (
  <div className="loading-list">
    <Skeleton variant="text" width="60%" />
    <Skeleton variant="text" width="80%" />
    <Skeleton variant="text" width="45%" />
  </div>
) : (
  <Results items={items} />
)}
```

## Loading states

Use Skeleton as a visual placeholder while content is loading, then replace it with the loaded content. Pair the visual placeholder with a separate accessible loading status when users need to know that content is being fetched:

```jsx
{isLoading && <span role="status">Loading results</span>}
{isLoading ? <Skeleton variant="card" /> : <Results />}
```

## Accessibility

- Skeleton is decorative and uses `aria-hidden` by default.
- Provide a separate `role="status"` or other accessible loading message when the loading state needs to be announced.
- Do not put essential information only inside a visual skeleton shape.
- Replace skeleton placeholders with real content when loading completes.
- Respect reduced-motion preferences when relying on shimmer animation.

## Notes

- Supported variants are `text`, `title`, `avatar`, `thumbnail`, `button`, `input`, and `card`.
- The default variant is `text`.
- Use `width`, `height`, and `radius` for format-specific placeholders.
- Skeleton does not fetch data or manage loading state.
- Use conditional rendering to replace Skeleton with the loaded content.
- Additional props are forwarded to the root `<span>`.