import { TimePicker} from "tavix";

export default function TimePickerComponent() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="h1 mb-4">Time Picker Component</h1>
      <TimePicker label="Start time" format="24h" minuteStep={5} />

      <TimePicker
        label="Start time"
        required
        error="Please select a start time"
      />
    </section>
  );
}
