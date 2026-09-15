# Card

A bordered surface container for grouping related content, summaries, and actions.

## Import Card

Import `Card` from Tavix:

```jsx
import { Card } from "tavix";
```

## Component API

```jsx
<Card
  className=""
  {...props}
>
  Content
</Card>
```

### Props

- `children`: Content rendered inside the card.
- `className`: Additional classes applied to the card. Defaults to `""`.
- `...props`: Additional DOM props forwarded to the root `<div>`, such as `id`, `aria-labelledby`, and `data-*` attributes.

## Behavior

- Renders a `<div>` container for grouped content.
- Applies a surface background, border, radius, shadow, full width, and responsive padding.
- Preserves the content and DOM props passed through `children` and `...props`.
- Does not provide a semantic role by default.
- Does not provide built-in keyboard, click, selection, or focus behavior.

## Examples

### Basic card

```jsx
<Card aria-labelledby="feature-title">
  <h2 id="feature-title">Feature title</h2>
  <p>Card content.</p>
</Card>
```

### Card with actions

```jsx
<Card aria-labelledby="account-title">
  <h2 id="account-title">Account settings</h2>
  <p>Manage your profile and notification preferences.</p>
  <div className="card-actions">
    <Button className="btn-sm btn-primary">Edit settings</Button>
  </div>
</Card>
```

### Card with custom styling

```jsx
<Card className="profile-card" data-section="profile">
  <Avatar size="lg">JD</Avatar>
  <h2>Jane Doe</h2>
  <p>Product designer</p>
</Card>
```

### Card collection

```jsx
<Grid columns={3} gap={4}>
  <Card>
    <h2>Revenue</h2>
    <p>$12,450</p>
  </Card>
  <Card>
    <h2>Orders</h2>
    <p>248</p>
  </Card>
  <Card>
    <h2>Customers</h2>
    <p>1,204</p>
  </Card>
</Grid>
```

## Accessibility

- Add a heading and connect it with `aria-labelledby` when the card represents a distinct section.
- Use `aria-label` when there is no visible heading.
- Preserve accessible names for buttons, links, and form controls inside the card.
- Do not rely on the card’s border, shadow, or background alone to communicate meaning.
- The card itself is not interactive; use a Button or link for actions.

## Notes

- Card renders a semantic `<div>` without a built-in landmark role.
- Use one clear subject or purpose per card.
- Avoid nesting cards inside other cards.
- Use `className` for custom layout or visual styles.
- Additional DOM props are forwarded to the root element.