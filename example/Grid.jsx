import { Card, Grid} from "tavix";

export default function GridComponent() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="h1">Grid Components</h1>
      <Grid gap={4}>
        <Card />
        <Card />
        <Card />
      </Grid>

      <Grid columns={2} gap={3}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </section>
  );
}
