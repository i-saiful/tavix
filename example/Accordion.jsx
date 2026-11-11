"use client";

import { Accordion} from "tavix";

export default function AccordionComponent() {
  return (
   <section className="flex flex-col gap-4">
      <h1 className="h1 text-2xl font-bold mb-2">Accordion Component</h1> 
      <Accordion>
        <Accordion.Item title="What is Tavix?">
          Tavix is a UI component library.
        </Accordion.Item>

        <Accordion.Item title="How does it work?">
          It provides reusable UI components for building modern applications.
        </Accordion.Item>

        <Accordion.Item title="Is Tavix customizable?">
          Yes. Tavix uses design tokens and utility classes so components can be
          customized easily.
        </Accordion.Item>

        <Accordion.Item title="Does Tavix support responsive design?">
          Yes. Tavix components are designed to work across mobile, tablet, and
          desktop screens.
        </Accordion.Item>

        <Accordion.Item title="Can I use my own icons?">
          Yes. You can use your own icons or integrate them with the Tavix icon
          system.
        </Accordion.Item>

        <Accordion.Item title="Can I use Tavix with Next.js?">
          Yes. Tavix components can be used in Next.js applications, including
          the App Router.
        </Accordion.Item>
      </Accordion>
    </section>
  );
}
