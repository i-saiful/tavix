import { Markdown } from "tavix";

export default function MarkdownComponent() {
  const content =
    "# Markdown Example\n\nThis is a **simple** Markdown example.";

  return (
    <section className="flex flex-col gap-4">
      <Markdown content={content} />
    </section>
  );
}
