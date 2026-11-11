import { Badge} from "tavix";

export default function BadgeComponent() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="h1">Badge Components</h1>

      {/* Badge Variants */}
      <div className="flex flex-wrap gap-2">
        <Badge>Default</Badge>
        <Badge variant="neutral">Draft</Badge>
        <Badge variant="brand">New</Badge>
        <Badge variant="success">Active</Badge>
        <Badge variant="warning">Pending</Badge>
        <Badge variant="error">Failed</Badge>
        <Badge variant="info">Information</Badge>
      </div>

      {/* Badge with Icons */}
      <div className="flex flex-wrap gap-2">
        <Badge variant="success" icon="check-circle">
          Active
        </Badge>
        <Badge variant="warning" icon="clock">
          Pending
        </Badge>
        <Badge variant="error" icon="circle-x">
          Failed
        </Badge>
      </div>

      {/* Badge Sizes */}
      <div className="flex flex-wrap gap-2">
        <Badge size="sm">Small</Badge>
        <Badge size="md" variant="success">
          Medium
        </Badge>
        <Badge size="md" variant="warning">
          Medium
        </Badge>
      </div>

      {/* Badge Appearances */}
      <div className="flex flex-wrap gap-2">
        <Badge variant="brand" appearance="solid">
          New
        </Badge>
        <Badge variant="success" appearance="solid">
          Active
        </Badge>
        <Badge variant="error" appearance="solid">
          Failed
        </Badge>
      </div>
    </section>
  );
}
