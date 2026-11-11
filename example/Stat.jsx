import { Stat} from "tavix";

export default function StatComponent() {
  return (
   <section className="flex flex-col gap-4">
      <h1 className="h1 text-2xl font-bold">Stat Component</h1>
      {/* // Trend (%) = ((current - previous) / previous) * 100 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Stat
          label="Total Revenue"
          value={245489}
          trend={12.5}
          trendLabel="from last month"
          icon="wallet-minimal"
          iconVariant="brand"
        />

        <Stat
          label="Active Users"
          value={8420}
          trend={8.2}
          trendLabel="from last month"
          icon="user"
          iconVariant="success"
        />

        <Stat
          label="Pending Orders"
          value={284}
          trend={-3.4}
          trendLabel="from last month"
          icon="tag"
          iconVariant="warning"
        />

        <Stat
          label="Failed Payments"
          value={42}
          trend={2.1}
          trendLabel="from last month"
          icon="circle-alert"
          iconVariant="error"
        />
      </div>
    </section>
  );
}
