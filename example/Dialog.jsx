"use client";

import { Button, Dialog} from "tavix";
import { useState } from "react";

export default function DialogComponent() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <section className="flex flex-col gap-4">
      <h1 className="h1">Dialog Component</h1>
      <div className="flex gap-4">
        <Button className="btn-outline" onClick={() => setOpen(true)}>
          Open Dialog (Medium)
        </Button>

        <Button className="btn-outline" onClick={() => setOpen2(true)}>
          Open Second (Small)
        </Button>
      </div>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={() => setOpen(false)}
        title="Cancel changes?"
        showClose={false}
        confirmLabel="Yes"
        size="md"
      >
        <p>Do you want to discard the changes you made?</p>
      </Dialog>

      <Dialog
        open={open2}
        onClose={() => setOpen2(false)}
        onConfirm={() => setOpen2(false)}
        title="Second Dialog"
        confirmLabel="Confirm"
        size="sm"
      >
        <p>This is the second dialog content.</p>
      </Dialog>
    </section>
  );
}
