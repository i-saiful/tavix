import { notFound } from "next/navigation";
import { Markdown } from "tavix";
import sidebar from "@/content/data/sidebar.json";
import { readDoc } from "@/utils/read-doc";

const pages = sidebar.menu
  .flatMap((item) => item.children ?? [])
  .map((page) => ({
    ...page,
    section: page.url.split("/")[1],
  }));

function getPage(section, slug) {
  return pages.find(
    (page) => page.section === section && page.url === `/${section}/${slug}`,
  );
}

export function generateStaticParams() {
  return pages.map((page) => ({
    section: page.section,
    slug: page.url.split("/").pop(),
  }));
}

export async function generateMetadata({ params }) {
  const { section, slug } = await params;
  const page = getPage(section, slug);

  return page ? { title: page.title } : {};
}

export default async function DocsPage({ params }) {
  const { section, slug } = await params;
  const page = getPage(section, slug);

  if (!page) {
    notFound();
  }

  const content = await readDoc(page.file);

  return (
    <article className="docs-content">
      <Markdown content={content} />
    </article>
  );
}
