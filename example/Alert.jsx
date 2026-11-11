import { Alert} from "tavix";

export default function AlertComponent() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="h1">Alert Components</h1>

      <Alert variant="success" title="Success">
        Your changes have been saved successfully.
      </Alert>

      <Alert variant="info" title="Information">
        A new version of the application is available.
      </Alert>

      <Alert variant="warning" title="Warning">
        Your session will expire soon.
      </Alert>

      <Alert variant="error" title="Error">
        Something went wrong. Please try again.
      </Alert>

      <Alert variant="success" title="Success">
        Your profile has been updated successfully.
      </Alert>
    </section>
  );
}
