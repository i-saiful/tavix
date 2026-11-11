import { Tooltip} from "tavix";

export default function TooltipComponent() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="h1">Tooltip Components</h1>

      <div className="flex gap-4 flex-wrap">
        <Tooltip content="Edit this item">
          <div>Edit</div>
        </Tooltip>
      
        <Tooltip content="Top tooltip" position="top">
          <button className="btn">Top</button>
        </Tooltip>

        <Tooltip content="Bottom tooltip" position="bottom">
          <button className="btn">Bottom</button>
        </Tooltip>

        <Tooltip content="Left tooltip" position="left">
          <button className="btn">Left</button>
        </Tooltip>

        <Tooltip content="Right tooltip" position="right">
          <button className="btn">Right</button>
        </Tooltip>

         <Tooltip content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966." position="bottom" width="60vw">
          <div>Edit</div>
        </Tooltip>
      </div>
    </section>
  );
}
