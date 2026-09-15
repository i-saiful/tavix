# Calendar

A month calendar for selecting a date with month and year navigation, date bounds, disabled dates, and selection states.

## Import Calendar

Import `Calendar` from Tavix:

```jsx
import { Calendar, Calendar2 } from "tavix";
```

## Component API

```jsx
<Calendar
  value=""
  onChange
  minDate
  maxDate
  disabledDates={[]}
  minYear
  maxYear
  weekStartsOn={0}
  showOutsideDays={true}
  className
/>
```

### Props

- `value`: Selected date in `YYYY-MM-DD` format.
- `onChange`: Callback called with the selected date in `YYYY-MM-DD` format.
- `minDate`: Earliest selectable date in `YYYY-MM-DD` format.
- `maxDate`: Latest selectable date in `YYYY-MM-DD` format.
- `disabledDates`: Dates that cannot be selected, provided as `YYYY-MM-DD` strings.
- `minYear`: Earliest year available in the year selector. Defaults to `1900`.
- `maxYear`: Latest year available in the year selector. Defaults to `2100`.
- `weekStartsOn`: First day of the week, where `0` is Sunday and `1` is Monday. Defaults to `0`.
- `showOutsideDays`: Displays days from adjacent months in the calendar grid. Defaults to `true`.
- `className`: Additional classes applied to the calendar.

## Behavior

- Renders the selected month as a 42-cell calendar grid.
- Uses `value` as the selected date and marks today separately.
- Calls `onChange` with a `YYYY-MM-DD` value when a selectable day is chosen.
- Prevents dates before `minDate` or after `maxDate` from being selected.
- Prevents dates listed in `disabledDates` from being selected.
- Limits year navigation to `minYear` and `maxYear`, also constrained by `minDate` and `maxDate`.
- Supports moving between months and years.
- Supports a Today action for quickly returning to the current date.
- Shows adjacent-month dates when `showOutsideDays` is `true`.
- Keeps outside-month dates visible but does not treat them as part of the active month.

## Examples

### Basic calendar

```jsx
<Calendar
  value={date}
  onChange={setDate}
/>;
```

### Calendar with date bounds

```jsx
<Calendar
  value="2026-09-15"
  onChange={setDate}
  minDate="2026-01-01"
  maxDate="2026-12-31"
/>;
```

### Disabled dates

```jsx
<Calendar
  value={date}
  onChange={setDate}
  disabledDates={[
    "2026-09-18",
    "2026-09-19",
    "2026-09-25",
  ]}
/>;
```

### Monday as the first day of the week

```jsx
<Calendar
  value={date}
  onChange={setDate}
  weekStartsOn={1}
/>;
```

### Hide outside-month days

```jsx
<Calendar
  value={date}
  onChange={setDate}
  showOutsideDays={false}
/>;
```

### Controlled calendar

```jsx
const [date, setDate] = useState("2026-09-15");

<Calendar
  value={date}
  onChange={(nextDate) => {
    setDate(nextDate);
  }}
/>;
```

## Date format

Calendar values and date constraints use the `YYYY-MM-DD` format:

```jsx
<Calendar
  value="2026-09-15"
  minDate="2026-01-01"
  maxDate="2026-12-31"
  onChange={(date) => {
    console.log(date); // "2026-09-15"
  }}
/>;
```

## Accessibility

- Day controls expose selected and today states.
- Use a controlled `value` so the selected date remains synchronized with application state.
- Keep date bounds and disabled dates consistent with the surrounding form validation.
- Use a clear label or surrounding field label when the calendar is used as part of a form.

## Notes

- Calendar is controlled through `value` and `onChange`.
- Dates are emitted as strings rather than JavaScript `Date` objects.
- The default year range is `1900` through `2100`.
- `minDate` and `maxDate` further constrain the available date and year range.
- Date strings should use zero-padded months and days, such as `2026-09-05`.