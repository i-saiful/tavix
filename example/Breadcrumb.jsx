import { Breadcrumb, Icon} from "tavix";

export default function BreadcrumbComponent() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="h1">Breadcrumb Component</h1>

      <Breadcrumb
        separator="/"
        items={[
          { label: <Icon name="folder" />, href: "/" },
          {
            label:
              "Very Long Product Category Name That Should Not Break Layout Very Long Product Category Name That Should Not Break Layout",
            href: "/products",
          },
          {
            label: "A Very Long Product Name That Should Be Truncated",
          },
        ]}
      />

      <Breadcrumb
        border={true}
        items={[
          { label: "Home", href: "/" },
          {
            label:
              "Very Long Product Category Name That Should Not Break Layout",
            href: "/products",
          },
          {
            label: "Enterprise Software Solutions",
            href: "/products/enterprise",
          },
          {
            label: "Operations Management Platform",
            href: "/products/enterprise/operations",
          },
          {
            label: "Quarterly Planning and Performance Dashboard",
            href: "/products/enterprise/operations/planning",
          },
          {
            label: "Workspace Configuration",
            href: "/products/enterprise/operations/planning/workspace",
          },
          {
            label: "A Very Long Product Name That Should Be Truncated",
          },
        ]}
      />

      {/* many items */}
      <Breadcrumb
        border={true}
        items={[
          { label: "Home", href: "/" },
          {
            label:
              "Very Long Product Category Name That Should Not Break Layout",
            href: "/products",
          },
          {
            label: "A Very Long Product Name That Should Be Truncated",
          },
        ]}
      />
    </section>
  );
}
