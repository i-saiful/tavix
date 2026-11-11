import { CopyButton} from "tavix";

export default function CopyButtonComponent() {
  const text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's is ok standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.";

  return (
    <section className="flex flex-col gap-4">
      <h1 className="h1 text-2xl font-bold mb-2">Copy Button Component</h1>
      <CopyButton value={text}>{text}</CopyButton>
    </section>
  );
}
