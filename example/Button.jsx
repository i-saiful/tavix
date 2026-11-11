import { Button } from "tavix";

export default function ButtonComponent() {
  return (
    <section className="flex flex-col gap-4">
      {/* Small, Medium, and Large Button Examples */}
      <div className="border p-4 rounded flex flex-col gap-4">
        <h3 className="h3 border-b-dashed">Small Buttons</h3>
        <div className="flex gap-4">
          <Button className="btn-sm btn-primary" leadingIcon="search">
            Primary
          </Button>
          <Button className="btn-sm btn-secondary" trailingIcon="arrow-right">
            Secondary
          </Button>

          <Button className="btn-sm btn-danger" variant="danger" leadingIcon="save" trailingIcon="arrow-right">
            Danger
          </Button>

          <Button className="btn-sm btn-outline" variant="outline" leadingIcon="save" trailingIcon="arrow-right">
            Outline
          </Button>

          <Button className="btn-sm btn-disabled" leadingIcon="save" loading={true}>
            Loading
          </Button>
        </div>
      </div>
      {/* Medium Button Examples */}
      <div className="border p-4 rounded flex flex-col gap-4">
        <h3 className="h3 border-b-dashed">Medium Buttons</h3>
        <div className="flex gap-4">
          <Button className="btn-md btn-primary" leadingIcon="search">
            Primary
          </Button>
          <Button className="btn-md btn-secondary" trailingIcon="arrow-right">
            Secondary
          </Button>

          <Button className="btn-md btn-danger" leadingIcon="save" trailingIcon="arrow-right">
            Danger
          </Button>

          <Button className="btn-md btn-outline" variant="outline" leadingIcon="save" trailingIcon="arrow-right">
            Outline
          </Button>

          <Button className="btn-md btn-danger" leadingIcon="save" loading={true}>
            Loading or Disable
          </Button>
        </div>
      </div>
      {/* Large Button Examples */}
      <div className="border p-4 rounded flex flex-col gap-4">
        <h3 className="h3 border-b-dashed">Large Buttons</h3>
        <div className="flex gap-4">
          <Button className="btn-lg btn-primary" leadingIcon="search">
            Primary
          </Button>
          <Button className="btn-lg btn-secondary" trailingIcon="arrow-right">
            Secondary
          </Button>

          <Button className="btn-lg btn-danger" leadingIcon="save" trailingIcon="arrow-right">
            Danger
          </Button>

          <Button className="btn-lg btn-outline" variant="outline" leadingIcon="save" trailingIcon="arrow-right">
            Outline
          </Button>

          <Button className="btn-lg btn-primary" leadingIcon="save" loading={true}>
            Loading
          </Button>
        </div>
      </div>
    </section>
  );
}
