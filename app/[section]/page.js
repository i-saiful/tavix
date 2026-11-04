import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Markdown } from "tavix";
import sidebar from "@/content/data/sidebar.json";
import { readDoc } from "@/utils/read-doc";
import { Loading } from "@/components";

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

async function SectionContent({ params }) {
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

export default function SectionPage({ params }) {
  return (
    <Suspense fallback={<Loading />}>
      <SectionContent params={params} />
    </Suspense>
  );
}
