"use client";

import { Sidebar} from "tavix";
import Image from "next/image";
import Link from 'next/link';

const items = {
  brand: { name: "MyApp", url: "/" },
  menu: [
    { id: "dashboard", title: "Dashboard", icon: "house", type: "link", url: "/dashboard" },
    {
      id: "content",
      title: "Content",
      icon: "folder",
      type: "link",
      url: "/content",
      children: [
        { id: "posts", title: "Posts", icon: "file", type: "link", url: "/content/posts" },
        { id: "media", title: "Media", icon: "image", type: "link", url: "/content/media" },
        { id: "categories", title: "Categories", icon: "folder", type: "link", url: "/content/categories" },
      ],
    },
    {
      id: "users",
      title: "Users & Access",
      icon: "user",
      type: "link",
      url: "/users",
      children: [
        { id: "all-users", title: "All Users", icon: "users", type: "link", url: "/users/all" },
        { id: "roles", title: "Roles", icon: "shield", type: "link", url: "/users/roles" },
      ],
    },
    { id: "analytics", title: "Analytics", icon: "file", type: "link", url: "/analytics" },
    { id: "settings", title: "Settings", icon: "settings", type: "link", url: "/settings" },
  ],
  footer: [
    { id: "help", title: "Help Center", icon: "question", type: "link", url: "/help" },
    { id: "sign-out", title: "Sign Out", icon: "log-out", type: "action", action: "/logout" },
  ],
};

export default function SidebarComponent() {
  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <section className="flex flex-col gap-4">
      <h1 className="h1">Sidebar Component</h1>

      <div className="flex gap-4 border">
        <Sidebar
          navItems={items}
          Link={Link}
          curved
          logo={
            <Image
              src="/logo1.png"
              alt="Tavix"
              width={120}
              height={32}
              className="object-contain"
            />
          }
        />

        <Sidebar
          navItems={items}
          Link={Link}
          enableTheme
          onAction={(action) => {
            if (action === "logout") {
              handleLogout();
            }
          }}
        />

        <div>Page Content</div>
      </div>
    </section>
  );
}
