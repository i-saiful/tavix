"use client";

import { Button, Icon, Popover} from "tavix";
import { useState } from "react";

export default function PopoverComponent() {
  const [open, setOpen] = useState(false);
  const placements = [
    "top-start",
    "top",
    "top-end",
    "right-start",
    "right",
    "right-end",
    "bottom-start",
    "bottom",
    "bottom-end",
    "left-start",
    "left",
    "left-end",
  ];

  return (
    <section className="flex flex-col gap-4">
      <h1 className="h1">Popover Component</h1>

      <div className="flex items-center gap-4">
        <Popover trigger="Account" placement="bottom-start">
          <div className="flex flex-col gap-3">
            <div>
              <strong className="text-title">Avery Morgan</strong>
              <p className="mt-1 text-secondary">avery@example.com</p>
            </div>

            <div className="flex flex-col gap-1">
              <button type="button" className="btn btn-sm btn-secondary">
                Profile settings
              </button>
              <button type="button" className="btn btn-sm btn-secondary">
                Sign out
              </button>
            </div>
          </div>
        </Popover>

        <Popover
          trigger={<Icon name="ellipsis-vertical" size={20} />}
          triggerClassName="popover-icon-trigger"
          placement="right"
        >
          <div className="flex flex-col gap-1">
            <button type="button" className="btn btn-sm btn-secondary">
              Edit project
            </button>
            <button type="button" className="btn btn-sm btn-secondary">
              Duplicate
            </button>
            <button type="button" className="btn btn-sm btn-danger">
              Delete project
            </button>
          </div>
        </Popover>
      </div>

      <div className="flex flex-wrap gap-4 py-8">
        {placements.map((placement) => (
          <Popover key={placement} trigger={placement} placement={placement}>
            <div className="flex flex-col gap-2">
              <strong className="text-title">{placement}</strong>
              <p className="text-body">Popover content</p>
            </div>
          </Popover>
        ))}
      </div>

      <Popover open={open} onOpenChange={setOpen} trigger="Open popover">
        <div className="flex flex-col gap-3">
          <strong className="text-title">Invite sent</strong>
          <p className="text-body">
            The workspace invitation is ready to share.
          </p>
          <Button className="btn-sm btn-primary" onClick={() => setOpen(false)}>
            Done
          </Button>
        </div>
      </Popover>
    </section>
  );
}
