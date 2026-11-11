import { lazy } from "react";
import { CodeBlock, Tabs } from "tavix";
import { readExample } from "@/utils/read-example";

const exampleModules = import.meta.webpackContext("@/example", {
  recursive: false,
  regExp: /\.jsx$/,
  mode: "lazy",
});

const exampleComponents = Object.fromEntries(
  exampleModules.keys().map((path) => [
    path.slice(2, -4),
    lazy(() => exampleModules(path)),
  ]),
);

export default async function ExampleTabs({ componentName }) {
  const ExampleComponent = exampleComponents[componentName];

  if (!ExampleComponent) {
    return null;
  }

  const exampleCode = await readExample(componentName);

  return (
    <Tabs
      className="px-5 py-3"
      defaultValue="preview"
      items={[
        {
          value: "preview",
          label: "Preview",
          content: <ExampleComponent />,
        },
        {
          value: "code",
          label: "Code",
          content: <CodeBlock content={exampleCode} language="jsx" />,
        },
      ]}
    />
  );
}