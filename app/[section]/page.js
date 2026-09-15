import { notFound } from "next/navigation";
import { Markdown } from "tavix";
import sidebar from "@/content/data/sidebar.json";
import { readDoc } from "@/utils/read-doc";

const pages = sidebar.menu.filter((item) => !item.children);

function getPage(section) {
  return pages.find((page) => page.url === `/${section}`);
}

export function generateStaticParams() {
  return pages.map((page) => ({
    section: page.url.slice(1),
  }));
}

export async function generateMetadata({ params }) {
  const { section } = await params;
  const page = getPage(section);

  return page ? { title: page.title } : {};
}

export default async function SectionPage({ params }) {
  const { section } = await params;
  const page = getPage(section);

  if (!page?.file) {
    notFound();
  }

  const content = await readDoc(page.file);

  return (
    <article className="docs-content">
      <Markdown content={content} />
    </article>
  );
}
