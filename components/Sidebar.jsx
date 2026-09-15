"use client";

import { Sidebar } from "tavix";
import Link from "next/link";
import sidebar from "@/content/data/sidebar.json";

export default function AppSidebar() {
  return <Sidebar navItems={sidebar} Link={Link} enableTheme />;
}