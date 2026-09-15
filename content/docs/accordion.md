# Accordion

A compound expandable content component for organizing related information into collapsible sections.

## Import Accordion

Import `Accordion` from Tavix:

```jsx
import { Accordion } from "tavix";
```

## Component API

```jsx
<Accordion className="">
  <Accordion.Item title="Details" defaultOpen>
    Additional information.
  </Accordion.Item>
</Accordion>
```

### Accordion props

- `children`: Accordion items rendered inside the component.
- `className`: Additional classes applied to the accordion. Defaults to `""`.

### Accordion.Item props

- `title`: Text displayed in the item trigger.
- `children`: Content displayed when the item is expanded.
- `className`: Additional classes applied to the item. Defaults to `""`.
- `defaultOpen`: Opens the item initially. Defaults to `false`.

## Behavior

- Each item manages its own open state internally.
- Items are closed by default unless `defaultOpen` is `true`.
- Clicking an item trigger toggles its expanded state.
- Multiple items can be open at the same time.
- Item triggers render as native buttons.
- Expanded triggers expose `aria-expanded` and `aria-controls`.
- Expanded content uses `role="region"` and is associated with its trigger.
- The component does not expose a controlled open-state callback.

## Examples

### Basic accordion

```jsx
<Accordion>
  <Accordion.Item title="Shipping" defaultOpen>
    Ships within two business days.
  </Accordion.Item>
  <Accordion.Item title="Returns">
    Returns are accepted within 30 days.
  </Accordion.Item>
</Accordion>
```

### Initially expanded item

```jsx
<Accordion>
  <Accordion.Item title="Shipping" defaultOpen>
    Ships within two business days.
  </Accordion.Item>
  <Accordion.Item title="Returns">
    Returns are accepted within 30 days.
  </Accordion.Item>
</Accordion>
```

### Multiple sections

```jsx
<Accordion className="faq-sections">
  <Accordion.Item title="What payment methods are supported?">
    Cards and bank transfers are supported.
  </Accordion.Item>
  <Accordion.Item title="When will my order ship?">
    Orders usually ship within two business days.
  </Accordion.Item>
  <Accordion.Item title="How do I contact support?">
    Contact the support team through the help center.
  </Accordion.Item>
</Accordion>
```

### Rich content

```jsx
<Accordion>
  <Accordion.Item title="Account details">
    <p>Review your account information before saving changes.</p>
    <ul>
      <li>Email address</li>
      <li>Notification preferences</li>
    </ul>
  </Accordion.Item>
</Accordion>
```

## Accessibility

- Item triggers use native buttons and can be activated with a pointer or keyboard.
- `aria-expanded` communicates whether an item is open or closed.
- `aria-controls` connects each trigger to its expandable content.
- Expanded content uses `role="region"`.
- Use concise, descriptive titles so users can understand each section before opening it.
- Keep interactive controls inside expanded content fully labeled and keyboard accessible.

## Notes

- Accordion items manage their own state.
- Use `defaultOpen` when an item should start expanded.
- Multiple items may remain open simultaneously.
- The component does not provide a controlled `open` prop or `onToggle` callback.
- Use `className` to customize the accordion or an individual item.