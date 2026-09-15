"use client";

import { Calendar, Calendar2, DatePicker, DatePicker2 } from "tavix";
import { useState } from "react";

export default function CalendarComponent() {
  const [date, setDate] = useState("");

  return (
    <section className="bg-surface rounded flex flex-col gap-4">
      <h1>Calendar Component</h1>
      <div className="flex gap-4">
        <Calendar value={date} onChange={setDate} />
        <Calendar2 value={date} onChange={setDate} />
      </div>
      <div className="flex gap-4">
      <DatePicker label="Date" value="2026-08-14" onChange={setDate} format="DD/MM/YYYY" />
      <DatePicker2 label="Date" value={date} onChange={setDate} />
      </div>
    </section>
  );
}