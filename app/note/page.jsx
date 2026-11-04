import { Markdown } from "tavix";
import { readDoc } from "@/utils/read-doc";

export default async function NotePage() {
  const content = await readDoc("note.md");

  return (
    <article className="docs-content">
      <Markdown content={content} />
    </article>
  );
}