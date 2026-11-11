import { Card} from "tavix";

export default function CardComponent() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="h1">Card Components</h1>
      <div className="card-grid">
        <Card>Card 1</Card>
        <Card>Card 2</Card>
        <Card>Card 3</Card>
      </div>
    </section>
  );
}
