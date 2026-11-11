"use client";

import { Button, ConfirmationDialog} from "tavix";
import { useState } from "react";

export default function ConfirmationDialogComponent() {
  const [submitOpen, setSubmitOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    setDeleting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setDeleting(false);
    setDeleteOpen(false);
  };

  return (
    <section className="flex flex-col gap-4">
      <h1 className="h1">Confirmation Dialog Component</h1>

      <div className="flex flex-wrap gap-3">
        <Button className="btn-primary" onClick={() => setSubmitOpen(true)}>
          Submit application
        </Button>

        <Button className="btn-danger" onClick={() => setDeleteOpen(true)}>
          Delete account
        </Button>
      </div>

      <ConfirmationDialog
        open={submitOpen}
        onClose={() => setSubmitOpen(false)}
        onConfirm={() => setSubmitOpen(false)}
        title="Submit application?"
        description="You will not be able to edit your answers after submission."
        confirmText="Submit"
        cancelText="Cancel"
        variant="primary"
        icon="send"
      />

      <ConfirmationDialog
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={handleDelete}
        title="Delete account?"
        description="This permanently removes your account and all associated data."
        confirmText="Delete account"
        cancelText="Cancel"
        variant="danger"
        icon="trash"
        loading={deleting}
        loadingText="Deleting account..."
      />
    </section>
  );
}
