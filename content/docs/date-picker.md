# DatePicker

A controlled date field with a read-only display and calendar toggle. Use it when users should choose a date from a calendar instead of typing a date manually.

## Import DatePicker

Import `DatePicker` from Tavix:

```jsx
import { DatePicker, DatePicker2 } from "tavix";
```

## Component API

```jsx
<DatePicker
  label
  value=""
  onChange
  minDate
  maxDate
  disabledDates={[]}
  minYear
  maxYear
  weekStartsOn={0}
  showOutsideDays={true}
  placeholder="YYYY-MM-DD"
  format="YYYY-MM-DD"
  required={false}
  disabled={false}
  error=""
  helperText=""
  className=""
/>
```

### Props

- `label`: Visible label associated with the date field.
- `value`: Selected date in `YYYY-MM-DD` format.
- `onChange`: Callback called with the selected date in `YYYY-MM-DD` format.
- `minDate`: Earliest selectable date in `YYYY-MM-DD` format.
- `maxDate`: Latest selectable date in `YYYY-MM-DD` format.
- `disabledDates`: Dates that cannot be selected, provided as `YYYY-MM-DD` strings.
- `minYear`: Earliest year available in the calendar year selector. Defaults to `1900`.
- `maxYear`: Latest year available in the calendar year selector. Defaults to `2100`.
- `weekStartsOn`: First day of the week, where `0` is Sunday and `1` is Monday. Defaults to `0`.
- `showOutsideDays`: Displays days from adjacent months in the calendar. Defaults to `true`.
- `placeholder`: Text displayed when no date is selected. Defaults to `YYYY-MM-DD`.
- `format`: Format used to display the selected date. Defaults to `YYYY-MM-DD`.
- `required`: Marks the field as required. Defaults to `false`.
- `disabled`: Prevents opening the calendar and changing the value. Defaults to `false`.
- `error`: Validation message displayed below the field.
- `helperText`: Supporting text displayed when there is no `error`.
- `className`: Additional classes applied to the date picker.

## Behavior

- Displays the selected date as a read-only field.
- Opens the Calendar when the date field is activated.
- Calls `onChange` with a `YYYY-MM-DD` value after a date is selected.
- Closes the calendar after a date is selected.
- Closes the calendar when the user clicks outside the component.
- Uses `minDate`, `maxDate`, and `disabledDates` to constrain selectable dates.
- Passes `minYear`, `maxYear`, `weekStartsOn`, and `showOutsideDays` to the calendar.
- Uses `format` for display formatting without changing the emitted value format.
- Displays `error` instead of `helperText` when both are provided.
- Does not provide a `defaultValue` prop; control the selected date with `value`.

## Examples

### Basic date picker

```jsx
<DatePicker
  label="Birthday"
  value={date}
  onChange={setDate}
  placeholder="YYYY-MM-DD"
  required
/>
```

### Controlled date picker

```jsx
const [date, setDate] = useState("");

<DatePicker
  label="Appointment date"
  value={date}
  onChange={(nextDate) => {
    setDate(nextDate);
  }}
  placeholder="Select a date"
/>;
```

### Date bounds and disabled dates

```jsx
<DatePicker
  label="Travel date"
  value={date}
  onChange={setDate}
  minDate="2026-06-01"
  maxDate="2026-09-30"
  disabledDates={["2026-07-04", "2026-09-07"]}
/>;
```

### Custom display format

The value remains `YYYY-MM-DD` while `format` controls how the selected date is displayed:

```jsx
<DatePicker
  label="Birthday"
  value="2026-09-15"
  onChange={setDate}
  format="MMM D, YYYY"
/>;
```

### Helper and error text

```jsx
<DatePicker
  label="Start date"
  value={date}
  onChange={setDate}
  helperText="Choose a date within the current quarter."
/>;

<DatePicker
  label="Start date"
  value={date}
  onChange={setDate}
  error="Please choose a valid start date."
/>;
```

### Disabled date picker

```jsx
<DatePicker
  label="Closed date"
  value="2026-09-15"
  onChange={setDate}
  disabled
/>;
```

## Date format

DatePicker values, date bounds, and disabled dates use the `YYYY-MM-DD` format:

```jsx
<DatePicker
  label="Due date"
  value="2026-09-15"
  minDate="2026-01-01"
  maxDate="2026-12-31"
  onChange={(date) => {
    console.log(date); // "2026-09-15"
  }}
/>;
```

The `format` prop changes the displayed date only. It does not change the value passed to `onChange`.

## Accessibility

- Provide a clear `label` so the date field has an accessible name.
- Use `required` to communicate that a date must be selected.
- Use `error` to communicate validation feedback.
- Keep the date field read-only so users choose dates through the calendar controls.
- Keep date bounds and disabled dates consistent with the surrounding form validation.

## Notes

- DatePicker uses Calendar internally for date selection and navigation.
- The calendar closes after selection and when the user clicks outside the component.
- DatePicker is controlled through `value` and `onChange`.
- Dates are emitted as strings rather than JavaScript `Date` objects.
- The default year range is `1900` through `2100`, further constrained by date bounds.
- Date strings should use zero-padded months and days, such as `2026-09-05`.