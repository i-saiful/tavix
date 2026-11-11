import { Spinner} from "tavix";

export default function SpinnerComponent() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="h1">Spinner Components</h1>
      <div className="flex flex-wrap gap-4 items-center">
        <Spinner size="sm" />
        <Spinner />
        <Spinner size="lg" />
        <Spinner size="xl" />
        <Spinner size="xxl" />
        <Spinner variant="success" size="xxl" />
        <Spinner variant="error" size="xxl" />
        <Spinner variant="inverse" size="xxl" />
      </div>
    </section>
  );
}
