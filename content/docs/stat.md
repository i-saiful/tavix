# Stat

A compact metric display for highlighting a key value with optional description, trend, and icon treatment.

## Import Stat

Import `Stat` from Tavix:

```jsx
import { Stat } from "tavix";
```

## Component API

```jsx
<Stat
  label
  value
  compactFrom={1000000}
  description
  trend
  trendLabel
  icon
  iconVariant="default"
  className=""
/>
```

### Props

- `label`: Text identifying the metric.
- `value`: Metric value, normally a number. Supports absolute values and locale formatting.
- `compactFrom`: Threshold at which large values use compact notation. Defaults to `1_000_000`.
- `description`: Supporting text displayed with the metric.
- `trend`: Numeric trend value. Positive values receive a `+` prefix.
- `trendLabel`: Supporting text describing the trend comparison.
- `icon`: Tavix icon name displayed with the metric.
- `iconVariant`: Icon color treatment: `default`, `brand`, `success`, `warning`, or `error`.
- `className`: Additional classes applied to the stat. Defaults to `""`.

## Behavior

- Displays a label, primary value, and optional description.
- Formats numeric values using locale-aware formatting.
- Uses compact notation for values at or above `compactFrom`, such as `1.2M`.
- Displays a positive trend with a `+` prefix.
- Distinguishes positive, negative, and neutral trend values through styling.
- Displays `trendLabel` alongside the trend when provided.
- Displays the configured icon and `iconVariant` when `icon` is provided.
- Renders as a presentation component without built-in interaction.

## Examples

### Basic stat

```jsx
<Stat
  label="Active users"
  value={1248}
  description="Across all workspaces"
/>;
```

### Revenue metric

```jsx
<Stat
  label="Revenue"
  value={1250000}
  trend={8.4}
  trendLabel="vs last month"
  icon="wallet-minimal"
  iconVariant="success"
/>
```

### Compact values

Values at or above `compactFrom` use compact notation by default:

```jsx
<Stat
  label="Total views"
  value={2450000}
  compactFrom={1000000}
/>;
```

The displayed value uses compact notation such as `2.5M`.

### Trend states

```jsx
<Stat
  label="Conversion rate"
  value="8.4%"
  trend={12.5}
  trendLabel="vs last month"
/>;

<Stat
  label="Error rate"
  value="1.2%"
  trend={-4.1}
  trendLabel="vs last week"
/>;

<Stat
  label="Response time"
  value="240 ms"
  trend={0}
  trendLabel="no change"
/>;
```

### Icon variants

```jsx
<Stat label="Revenue" value={1250000} icon="wallet-minimal" />
<Stat label="Successful jobs" value={984} icon="check" iconVariant="success" />
<Stat label="Warnings" value={12} icon="triangle-alert" iconVariant="warning" />
<Stat label="Errors" value={3} icon="circle-alert" iconVariant="error" />
```

## Formatting

Numeric values use locale-aware formatting. Values at or above `compactFrom` use compact notation, while smaller values remain readable as full values:

```jsx
<Stat label="Downloads" value={987654} />
<Stat label="Downloads" value={1200000} />
```

Use a string when the value already includes a unit or custom formatting:

```jsx
<Stat label="Uptime" value="99.99%" />
<Stat label="Latency" value="240 ms" />
```

## Accessibility

- Use a descriptive `label` so the purpose of the metric is clear.
- Include a `description` or `trendLabel` when additional context is needed.
- Do not rely on trend color alone to communicate positive or negative change.
- Use meaningful icon choices that reinforce, rather than replace, the label.
- Keep stat values readable and avoid hiding important units in visual styling.

## Notes

- Stat is a presentation component and does not provide interaction by itself.
- Positive trends receive a `+` prefix.
- Trend styling distinguishes positive, negative, and neutral values.
- `compactFrom` defaults to `1_000_000`.
- Supported icon variants are `default`, `brand`, `success`, `warning`, and `error`.
- Pass preformatted strings when the value includes a unit or custom display format.