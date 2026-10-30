"use client";

import { Calendar, DatePicker } from "tavix";
import { useState } from "react";

export default function CalendarComponent() {
  const [date, setDate] = useState("");

  return (
    <section className="bg-surface rounded flex flex-col gap-4">
      <h1>Calendar Component</h1>
      <div className="flex gap-4">
        <Calendar value={date} onChange={setDate} />
      </div>
      <div className="flex gap-4">
        <DatePicker label="Date" value={date} onChange={setDate} format="DD/MM/YYYY" />
      </div>
    </section>
  );
}