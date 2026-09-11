import "tavix/css";
// import "./globals.css";
import { TavixProvider } from "tavix/providers";
import { Sidebar } from "@/components";

export const metadata = {
  title: {
    default: "Tavix",
    template: "%s | Tavix",
  },

  description:
    "A modern React UI component library for building accessible, consistent, and beautiful user interfaces.",

  keywords: [
    "Tavix",
    "React UI",
    "React components",
    "UI component library",
    "design system",
    "JavaScript",
    "frontend",
  ],

  authors: [{ name: "Tavix" }],
  creator: "Tavix",

  icons: {
    icon: "/tavix/favicon.ico",
  },

  openGraph: {
    title: "Tavix",
    description:
      "A modern React UI component library for building accessible, consistent, and beautiful user interfaces.",
    siteName: "Tavix",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="flex bg-surface h-screen overflow-hidden">
          <TavixProvider>
            <Sidebar />
            <div className="flex-1 overflow-y-auto">{children}</div>
          </TavixProvider>
        </main>
      </body>
    </html>
  );
}
