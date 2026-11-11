"use client";

import { Tabs, Icon} from "tavix";
import { useState } from "react";

const tabs = [
  {
    value: "overview",
    label: "Overview",
    content: <div>Overview content</div>,
  },
  {
    value: "activity",
    label: "Activity",
    content: <div>Activity content</div>,
  },
  {
    value: "settings",
    label: "Settings",
    content: <div>Settings content</div>,
  },
];

export default function TabsComponent() {
  const [value, setValue] = useState("overview");
  return (
    <section className="flex flex-col gap-4">
      <h1 className="h1">Tabs Component</h1>
      {/* Basic Tabs */}
      <Tabs
        items={tabs}
        defaultValue="overview"
        onChange={(value) => {
          console.log(value);
        }}
      />
      {/* Controlled Tabs */}
      <Tabs
        items={[
          {
            value: "overview",
            label: "Overview",
            content: "Overview content",
          },
          {
            value: "activity",
            label: "Activity",
            content: "Activity content",
          },
        ]}
        value={value}
        onChange={setValue}
      />

      {/* With icon and badge */}
      <Tabs
        items={[
          {
            value: "all",
            label: "All",
            icon: <Icon name="house" />,
            badge: 24,
            content: <div>All content</div>,
          },
          {
            value: "messages",
            label: "Messages",
            icon: <Icon name="menu" />,
            badge: 5,
            content: <div>Messages content</div>,
          },
        ]}
        defaultValue="all"
      />

      {/* Pills Tabs */}
      <Tabs
        variant="pill"
        items={[
          {
            value: "all",
            label: "All",
            content: "All",
          },
          {
            value: "active",
            label: "Active",
            content: "Active",
          },
          {
            value: "archived",
            label: "Archived",
            content: "Archived",
          },
        ]}
        defaultValue="all"
      />

      {/* Vertical Tabs */}
      <Tabs
        orientation="vertical"
        items={[
          {
            value: "profile",
            label: "Profile",
            content: <div>Profile</div>,
          },
          {
            value: "security",
            label: "Security",
            content: <div>Security</div>,
          },
          {
            value: "notifications",
            label: "Notifications",
            content: <div>Notifications</div>,
          },
        ]}
        defaultValue="profile"
      />

      {/* Disabled Tabs */}
      <Tabs
        items={[
          {
            value: "general",
            label: "General",
            content: "General settings",
          },
          {
            value: "billing",
            label: "Billing",
            disabled: true,
            content: "Billing settings",
          },
          {
            value: "security",
            label: "Security",
            content: "Security settings",
          },
        ]}
        defaultValue="general"
      />
    </section>
  );
}
