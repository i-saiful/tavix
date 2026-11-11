import { ImagePreview} from "tavix";

export default function ImagePreviewComponent() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="h1">Image Preview Component</h1>
      <ImagePreview>
        <img
          src="/tavix/images/app-screenshot.jpg"
          alt="Product"
          width={320}
          height={240}
          className="rounded"
        />
      </ImagePreview>
    </section>
  );
}
