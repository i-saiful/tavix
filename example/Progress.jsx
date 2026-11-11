import { Progress} from "tavix";

export default function ProgressComponent() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="h1">Progress Components</h1>

      <Progress value={25} />
      <Progress value={60} label="Uploading" showValue />
      <Progress value={85} size="lg" variant="success" label="Completed" showValue />
      <Progress value={45} variant="warning" label="Processing" showValue />
      <Progress value={30} variant="error" label="Error" showValue />
      <Progress indeterminate label="Loading..." />
    </section>
  );
}
