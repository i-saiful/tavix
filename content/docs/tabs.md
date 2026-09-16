# Tabs

Use the `Tabs` component to switch between related content panels in a controlled or uncontrolled way.

## Import Tabs

Import `Tabs` from Tavix:

```jsx
import { Tabs } from "tavix";
```

## Component API

```jsx
<Tabs
  items={[]}
  value
  defaultValue
  onChange
  variant="line"
  size="md"
  orientation="horizontal"
  fullWidth={false}
  activation="automatic"
  className
/>
```

### Props

- `items`: Array of tab items. Each item should include a unique `value`, `label`, and may include `content`, `icon`, `badge`, and `disabled`.
- `value`: Controlled active tab value.
- `defaultValue`: Default value used for uncontrolled mode.
- `onChange`: Callback fired when a tab is selected.
- `variant`: Visual variant of the tabs. Defaults to `line`.
- `size`: Tabs size variant. Defaults to `md`.
- `orientation`: Orientation of the tab list. Supported values include `horizontal` and `vertical`.
- `fullWidth`: Expands tab buttons to fill the available width.
- `activation`: Keyboard activation mode. Supports `automatic` and `manual`.
- `className`: Additional class names for the root tabs wrapper.

## Behavior

- Supports both controlled and uncontrolled usage.
- Keeps the current panel in sync with the selected tab value.
- Renders tab list semantics with `role="tablist"` and `role="tab"`.
- Connects each tab to its corresponding panel through `aria-controls` and `aria-labelledby`.
- Uses arrow keys, `Home`, and `End` for keyboard navigation.
- Allows `Enter` or `Space` for manual activation mode.
- Supports tab badges and optional icons.

## Examples

### Basic tabs

```jsx
<Tabs
  items={[
    { value: "overview", label: "Overview", content: <div>Overview content</div> },
    { value: "activity", label: "Activity", content: <div>Activity content</div> },
    { value: "settings", label: "Settings", content: <div>Settings content</div> },
  ]}
  defaultValue="overview"
/>
```

### Controlled tabs

```jsx
const [activeTab, setActiveTab] = useState("overview");

<Tabs
  value={activeTab}
  onChange={setActiveTab}
  items={[
    { value: "overview", label: "Overview", content: <div>Overview</div> },
    { value: "analytics", label: "Analytics", content: <div>Analytics</div> },
  ]}
/>
```

### Vertical tabs

```jsx
<Tabs
  orientation="vertical"
  items={[
    { value: "profile", label: "Profile", content: <div>Profile</div> },
    { value: "security", label: "Security", content: <div>Security</div> },
  ]}
/>
```

## Notes

- The tab panel content can be passed directly or created by a function, which keeps the API flexible.
- This component is best for switching between related views without leaving the current screen.
