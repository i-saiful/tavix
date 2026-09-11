import { notFound } from "next/navigation";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { Markdown } from "tavix";

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

  const content = await readFile(
    path.join(process.cwd(), "content/docs", page.file),
    "utf8",
  );

  return <article className="docs-content">
   <Markdown content={content} />
  </article>;
}