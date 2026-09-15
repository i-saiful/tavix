# Timeline

A timeline for displaying ordered events, milestones, or activity history in horizontal or vertical orientation.

## Import Timeline

Import `Timeline` from Tavix:

```jsx
import { Timeline } from "tavix";
```

## Component API

```jsx
<Timeline
  orientation="horizontal"
  className=""
>
  <Timeline.Item
    title
    description
    time
    icon
    status="default"
  >
    {children}
  </Timeline.Item>
</Timeline>
```

### Timeline props

- `children`: Timeline items rendered in order.
- `orientation`: Layout direction, either `horizontal` or `vertical`. Defaults to `horizontal`.
- `className`: Additional classes applied to the timeline. Defaults to `""`.

### Timeline.Item props

- `title`: Primary text for the event.
- `description`: Supporting text for the event.
- `time`: Date, time, or other temporal label.
- `icon`: Tavix icon name displayed for the item.
- `status`: Visual status: `default`, `success`, `warning`, `error`, or `brand`.
- `children`: Additional content rendered inside the item.
- `className`: Additional classes applied to the item.

## Behavior

- Renders items in the order they are passed as children.
- Supports horizontal and vertical layouts through `orientation`.
- Switches horizontal timelines to a vertical layout on narrow screens.
- Displays the item title, description, time, icon, status, and children when provided.
- Uses status styling to distinguish default, success, warning, error, and brand states.
- Timeline items are non-interactive.
- Does not manage selection, expansion, or navigation state.

## Examples

### Basic vertical timeline

```jsx
<Timeline orientation="vertical">
  <Timeline.Item title="Created" time="09:00" status="success">
    Account created successfully.
  </Timeline.Item>
  <Timeline.Item title="Completed" time="10:30" status="brand" />
</Timeline>
```

### Horizontal timeline

```jsx
<Timeline orientation="horizontal">
  <Timeline.Item title="Started" time="09:00" status="success" />
  <Timeline.Item title="In progress" time="10:30" status="brand" />
  <Timeline.Item title="Completed" time="12:00" status="success" />
</Timeline>
```

### Timeline with descriptions

```jsx
<Timeline orientation="vertical">
  <Timeline.Item
    title="Order placed"
    description="Your order has been received."
    time="May 12"
    status="success"
  />
  <Timeline.Item
    title="Preparing shipment"
    description="The warehouse is preparing your package."
    time="May 13"
    status="brand"
  />
  <Timeline.Item
    title="Delivered"
    description="Delivery is expected tomorrow."
    time="May 15"
  />
</Timeline>
```

### Status and icons

```jsx
<Timeline orientation="vertical">
  <Timeline.Item
    title="Deployment completed"
    time="10:15"
    icon="check"
    status="success"
  />
  <Timeline.Item
    title="Build warning"
    time="10:20"
    icon="triangle-alert"
    status="warning"
  />
  <Timeline.Item
    title="Deployment failed"
    time="10:25"
    icon="circle-alert"
    status="error"
  />
</Timeline>
```

### Custom item content

```jsx
<Timeline>
  <Timeline.Item title="Review complete" status="success">
    <strong>Approved by the design team.</strong>
    <p>All requested changes have been addressed.</p>
  </Timeline.Item>
</Timeline>
```

## Responsive behavior

Horizontal timelines switch to a vertical layout on narrow screens. Use the horizontal orientation for short sequences and the vertical orientation when event descriptions or longer content need more room.

## Accessibility

- Use descriptive titles so each event is understandable when read independently.
- Include meaningful time or date labels when chronology is important.
- Do not rely on status color alone; include status information in the title or description when it matters.
- Keep timeline content non-interactive unless an accessible control is intentionally added inside an item.
- Provide accessible names for icons when they convey information not present in the text.

## Notes

- Timeline items are non-interactive by default.
- Supported orientations are `horizontal` and `vertical`.
- Horizontal layouts become vertical on narrow screens.
- Supported statuses are `default`, `success`, `warning`, `error`, and `brand`.
- Use `className` on the timeline or an individual item for custom styling.