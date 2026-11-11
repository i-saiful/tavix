"use client";

import { Navbar} from "tavix";
import Link from 'next/link'

const items = [
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Web Development", href: "/products/web" },
      { label: "Mobile Development", href: "/products/mobile" },
      { label: "UI Design", href: "/products/design" },
    ],
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function NavbarComponent() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="h1">Navbar Component</h1>

      <Navbar
        title="Mobile Shop"
        logo={
          <img
            src="/tavix/images/logo.jpg"
            alt="Tavix"
            width={120}
            height={32}
            className="object-contain"
          />
        }
        items={items}
        enableTheme={true}
        Link={Link}
        actions={
          <>
            <button type="button" className="btn btn-outline">
              Login
            </button>

            <button type="button" className="btn btn-primary">
              Register
            </button>
          </>
        }
      />

      <Navbar
        title="Tavix"
        items={items}
        Link={Link}
        actions={
          <>
            <button type="button" className="btn btn-outline">
              Login
            </button>

            <button type="button" className="btn btn-primary">
              Register
            </button>
          </>
        }
      />
    </section>
  );
}
