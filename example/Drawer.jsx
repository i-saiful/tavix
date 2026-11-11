"use client";

import { Button, Drawer, Input} from "tavix";
import { useState } from "react";

export default function DrawerComponent() {
  const [open, setOpen] = useState(false);

  return (
   <section className="flex flex-col gap-4">
      <h1 className="h1">Drawer Component</h1>

      <Button className="btn-primary" onClick={() => setOpen(true)}>
        Open drawer
      </Button>

      <Drawer open={open} onClose={() => setOpen(false)} side="right" size="md">
        <form
            className="form p-6"
          onSubmit={(event) => {
            event.preventDefault();
            setOpen(false);
          }}
        >
          <div className="pr-8">
            <h2 className="h2 text-title">Account settings</h2>
            <p className="mt-2 text-body">
              Manage the contact details for your account.
            </p>
          </div>

          <Input label="Full name" defaultValue="Avery Morgan" required />
          <Input
            label="Email address"
            type="email"
            defaultValue="avery@example.com"
            required
          />

          <div className="flex justify-end gap-3 pt-2">
            <Button className="btn-secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" className="btn-primary">
              Save changes
            </Button>
          </div>
        </form>
      </Drawer>
    </section>
  );
}
