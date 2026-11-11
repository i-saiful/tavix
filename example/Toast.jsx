"use client";

import { useRef } from "react";
import { Button, Toast } from "tavix";

const toastPositions = [
  "top-left",
  "top-center",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
];

export default function ToastComponent() {
  const toastRef = useRef(null);

  const showToast = (message, options = {}) => {
    toastRef.current?.show(message, options);
  };

  return (
    <section className="flex flex-col gap-4">
      <h1 className="h1">Snackbar</h1>

      <div className="flex flex-wrap gap-4">
        {toastPositions.map((position) => (
          <Button
            key={position}
            onClick={() =>
              showToast(`Snackbar at ${position}`, {
                position,
                actionLabel: "UNDO",
                onAction: (toastId) => console.log(`Undo ${position}`, toastId),
              })
            }
            className="btn btn-outline"
          >
            {position}
          </Button>
        ))}
      </div>

      <Toast ref={toastRef} />
    </section>
  );
}
