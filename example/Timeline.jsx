"use client";

import { Timeline} from "tavix";

export default function TimelineComponent() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="h1 text-2xl font-bold mb-2">Timeline Component</h1>

      <Timeline>
        <Timeline.Item
          title="Order placed"
          description="Your order has been placed."
          time="09:30 AM"
          status="success"
        />

        <Timeline.Item
          title="Processing"
          description="Your order is being prepared."
          time="10:00 AM"
          status="brand"
        />

        <Timeline.Item
          title="Shipped"
          description="Your order has been shipped."
          time="02:30 PM"
          status="brand"
        />

        <Timeline.Item
          title="Delivered"
          description="Your order has been delivered."
          time="Tomorrow"
          status="default"
        />
      </Timeline>

      <Timeline orientation="vertical">
        <Timeline.Item
          title="Order placed"
          description="Your order has been placed successfully."
          time="09:30 AM"
          status="default"
        />

        <Timeline.Item
          title="Payment processing"
          description="Your payment is currently being processed."
          time="10:00 AM"
          status="brand"
        />

        <Timeline.Item
          title="Payment completed"
          description="Your payment has been completed successfully."
          time="10:15 AM"
          status="success"
        />

        <Timeline.Item
          title="Delivery delayed"
          description="Your delivery may arrive later than expected."
          time="02:30 PM"
          status="warning"
        />

        <Timeline.Item
          title="Delivery failed"
          description="We were unable to deliver your order."
          time="04:00 PM"
          status="error"
        />
      </Timeline>
    </section>
  );
}
