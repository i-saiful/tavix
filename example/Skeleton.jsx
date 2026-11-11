import { Skeleton} from "tavix";

export default function SkeletonComponent() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="h1">Skeleton Components</h1>
      <Skeleton variant="text" />
      <Skeleton variant="text" width="70%" />
      <Skeleton variant="title" />
      <Skeleton variant="avatar" />
      <Skeleton variant="thumbnail" />
      <Skeleton variant="button" />
      <Skeleton variant="input" />
      <Skeleton variant="card" />
      <Skeleton width="200px" height="20px" radius="4px" />
    </section>
  );
}
