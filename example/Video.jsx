import { Video, VideoPlayer} from "tavix";

const video = {
  src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  poster: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1280&q=80",
};

export default function VideoComponent() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="h1">Video Component</h1>
      <VideoPlayer {...video} />
      <Video {...video} />
    </section>
  );
}