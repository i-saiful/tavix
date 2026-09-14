import { notFound } from "next/navigation";
import { Markdown } from "tavix";
import { readDoc } from "@/utils/read-doc";

const installationPages = {
  react: {
    file: "react-installation.md",
    title: "React Installation",
  },
  nextjs: {
    file: "nextjs-installation.md",
    title: "Next.js Installation",
  },
};

export function generateStaticParams() {
  return Object.keys(installationPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = installationPages[slug];

  return page ? { title: page.title } : {};
}

export default async function InstallationPage({ params }) {
  const { slug } = await params;
  const page = installationPages[slug];

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
