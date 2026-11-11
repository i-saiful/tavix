import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Markdown } from "tavix";
import sidebar from "@/content/data/sidebar.json";
import { readDoc } from "@/utils/read-doc";
import { ExampleTabs, Loading } from "@/components";

const pages = sidebar.menu
  .flatMap((item) => item.children ?? [])
  .map((page) => ({
    ...page,
    section: page.url.split("/")[1],
  }));

function getPage(section, slug) {
  return pages.find((page) => page.section === section && page.url === `/${section}/${slug}`);
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

async function DocsContent({ params }) {
  const { section, slug } = await params;
  const page = getPage(section, slug);

  if (!page) {
    notFound();
  }

  const content = await readDoc(page.file);

  return (
    <article className="docs-content">
      {page.component ? <ExampleTabs componentName={page.component} /> : null}
      <Markdown content={content} />
    </article>
  );
}

export default function DocsPage({ params }) {
  return (
    <Suspense fallback={<Loading />}>
      <DocsContent params={params} />
    </Suspense>
  );
}
