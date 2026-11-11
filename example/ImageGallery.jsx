import { ImageGallery } from "tavix";

const imagesData = [
  {
    id: "1",
    url: "https://picsum.photos/id/1015/1200/1560",
  },
  {
    id: "2",
    url: "https://picsum.photos/id/1016/1200/900",
  },
  {
    id: "3",
    url: "https://picsum.photos/id/1018/1200/1860",
  },
  {
    id: "4",
    url: "https://picsum.photos/id/1020/1200/750",
  },
  {
    id: "5",
    url: "https://picsum.photos/id/1024/1200/1080",
  },
  {
    id: "6",
    url: "https://picsum.photos/id/1035/1200/1500",
  },
];

const images = imagesData.map((image) => ({
  id: image.id,
  content: <img src={image.url} alt={`Gallery item ${image.id}`} />,
}));

export default function ImageGalleryComponent() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="h1">Image Gallery Component</h1>
      <ImageGallery images={images} columns={4} layout="masonry" gap="sm" />
    </section>
  );
}
