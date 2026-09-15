# TimePicker

A controlled or uncontrolled time picker with 12-hour and 24-hour formats. Use it when users need to choose a time through separate hour, minute, and period controls.

## Import TimePicker

Import `TimePicker` from Tavix:

```jsx
import { TimePicker } from "tavix";
```

## Component API

```jsx
<TimePicker
  label
  value
  defaultValue=""
  onChange
  error
  helperText
  disabled={false}
  required={false}
  format="12h"
  minuteStep={1}
  placeholder="Select time"
  clearable={true}
  className
  name
  id
  {...props}
/>
```

### Props

- `label`: Visible label associated with the time picker.
- `value`: Controlled time value.
- `defaultValue`: Initial time value for uncontrolled usage. Defaults to an empty string.
- `onChange`: Callback called as the time value changes.
- `error`: Validation message displayed below the time picker.
- `helperText`: Supporting text displayed when there is no `error`.
- `disabled`: Prevents opening and changing the time. Defaults to `false`.
- `required`: Marks the field as required. Defaults to `false`.
- `format`: Time format, either `12h` or `24h`. Defaults to `12h`.
- `minuteStep`: Increment used by the minute selector. Defaults to `1`.
- `placeholder`: Text displayed when no time is selected. Defaults to `Select time`.
- `clearable`: Displays a control for clearing the selected time. Defaults to `true`.
- `className`: Additional classes applied to the time picker.
- `name`: Name used when the field is included in a form.
- `id`: Id used to associate the field with its label.
- `...props`: Additional input attributes and event handlers.

## Behavior

- Supports controlled usage through `value` and `onChange`.
- Supports uncontrolled usage through `defaultValue`.
- Provides separate controls for hours, minutes, and the period in 12-hour mode.
- Provides hour and minute controls in 24-hour mode.
- Applies `minuteStep` to the minute selector.
- Calls `onChange` as time parts are selected.
- Supports keyboard toggling and closes with Escape.
- Closes when the user clicks outside the component.
- Provides a Done action for completing time selection.
- Clears the selected time when the clear control is used and `clearable` is enabled.
- Displays `error` instead of `helperText` when both are provided.
- Prevents opening and editing when `disabled` is `true`.

## Examples

### Basic time picker

```jsx
<TimePicker
  label="Start time"
  format="24h"
  minuteStep={15}
  clearable
  onChange={setStartTime}
/>
```

### Controlled time picker

```jsx
const [startTime, setStartTime] = useState("");

<TimePicker
  label="Start time"
  value={startTime}
  format="24h"
  onChange={(nextTime) => {
    setStartTime(nextTime);
  }}
/>;
```

### Uncontrolled time picker

Use `defaultValue` when the component should manage its own time after an initial value:

```jsx
<TimePicker
  label="Opening time"
  defaultValue="9:00 AM"
  onChange={(time) => {
    console.log(time);
  }}
/>;
```

### 12-hour format

```jsx
<TimePicker
  label="Appointment"
  format="12h"
  minuteStep={15}
  placeholder="Choose an appointment time"
  onChange={setAppointmentTime}
/>;
```

Values in 12-hour mode look like `2:05 PM`.

### 24-hour format

```jsx
<TimePicker
  label="Departure"
  format="24h"
  minuteStep={5}
  onChange={setDepartureTime}
/>;
```

Values in 24-hour mode look like `14:05`.

### Required and helper text

```jsx
<TimePicker
  label="Meeting time"
  required
  helperText="Choose a time during business hours."
  onChange={setMeetingTime}
/>;
```

### Error, disabled, and clearable states

```jsx
<TimePicker
  label="End time"
  error="End time must be after the start time."
  onChange={setEndTime}
/>;

<TimePicker
  label="Locked time"
  value="14:05"
  format="24h"
  disabled
  onChange={setTime}
/>;

<TimePicker
  label="Optional reminder"
  clearable
  onChange={setReminderTime}
/>;
```

## Change events

`onChange` fires as the user selects the hour, minute, or period. Store the returned value as a string so the displayed format is preserved:

```jsx
<TimePicker
  label="Reminder"
  format="24h"
  onChange={(time) => {
    setReminderTime(time);
  }}
/>;
```

## Accessibility

- Provide a clear `label` so the time picker has an accessible name.
- Use `required` to communicate that a time must be selected.
- Use `error` to communicate validation feedback.
- Keep the minute step appropriate for the time-selection workflow.
- Use `disabled` when the time cannot currently be changed.
- Keep the placeholder descriptive when no time is selected.

## Notes

- TimePicker supports controlled and uncontrolled usage.
- Use `value` with `onChange` for controlled usage.
- Use `defaultValue` for uncontrolled usage with an initial time.
- `format="12h"` produces values such as `2:05 PM`.
- `format="24h"` produces values such as `14:05`.
- `onChange` fires as time parts are selected, before the Done action is used.
- Escape, outside-click closing, clearing, and Done are supported interactions.