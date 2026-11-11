import { Textarea} from "tavix";

export default function TextareaComponent() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="h1 mb-4">Textarea Components</h1>

      <Textarea label="Description" placeholder="Enter description..." />

      <Textarea
        label="Description"
        required
        placeholder="Enter description..."
      />

      <Textarea
        label="Description"
        error="Description is required"
        placeholder="Enter description..."
      />

      <Textarea
        label="Description"
        helperText="Maximum 500 characters"
        placeholder="Enter description..."
      />

      <Textarea
        label="Message"
        rows={6}
        maxLength={500}
        placeholder="Write your message..."
      />
    </section>
  );
}
