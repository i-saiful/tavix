import { Skeleton } from "tavix";

export default function Loading() {
  return (
    <article className="docs-content">
      <Skeleton variant="title" width="100%" height="40px" />

      <Skeleton variant="text" />
      <Skeleton variant="text" width="80%" />
      <Skeleton variant="text" />
      <Skeleton variant="text" width="40%" />
      <Skeleton variant="card" height="180px" />
      <Skeleton variant="text" />
      <Skeleton variant="title" width="100%" height="40px" />
    </article>
  );
}