import { Markdown } from "tavix";
import { readDoc } from "@/utils/read-doc";

export default async function Home() {
  const content = await readDoc("css-overrides.md");

  return (
    <article className="docs-content">
      <Markdown content={content} />
    </article>
  );
}
