"use client";

import { Button, AlertDialog} from "tavix";
import { useState } from "react";

export default function AlertDialogComponent() {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [leaveOpen, setLeaveOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    setDeleting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setDeleting(false);
    setDeleteOpen(false);
  };

  return (
   <section className="flex flex-col gap-4">
      <h1 className="h1">Alert Dialog Component</h1>
      <div className="flex flex-wrap gap-3">
        <Button className="btn-danger" onClick={() => setDeleteOpen(true)}>
          Delete product
        </Button>

        <Button className="btn-secondary" onClick={() => setLeaveOpen(true)}>
          Leave page
        </Button>

        <Button className="btn-primary" onClick={() => setInfoOpen(true)}>
          Publish changes
        </Button>
      </div>

      <AlertDialog
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={handleDelete}
        title="Delete product?"
        description="This will permanently remove the product and its inventory data."
        confirmText="Delete"
        cancelText="Cancel"
        variant="danger"
        icon="trash"
        loading={deleting}
      />

      <AlertDialog
        open={leaveOpen}
        onClose={() => setLeaveOpen(false)}
        onConfirm={() => setLeaveOpen(false)}
        title="Leave without saving?"
        description="Your recent changes have not been saved."
        confirmText="Leave page"
        cancelText="Keep editing"
        variant="warning"
      />

      <AlertDialog
        open={infoOpen}
        onClose={() => setInfoOpen(false)}
        onConfirm={() => setInfoOpen(false)}
        title="Publish changes?"
        description="Your updates will be visible to everyone with access to this workspace."
        confirmText="Publish"
        cancelText="Review changes"
        variant="default"
      />
    </section>
  );
}
