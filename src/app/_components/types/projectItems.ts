import discard from "@/../public/projects/discard.png";
import hkiu from "@/../public/projects/hkiu.png";
import acme from "@/../public/projects/acme.png";
import idx from "@/../public/projects/idx.png";
import cpu from "@/../public/projects/cpu.png";

export const projectItems = [
  {
    title: "IDXTerminal",
    subtitle: "Full-Stack Web Development",
    imageUrl: idx,
    inProgress: true,
    description:
      "An open source alternative to bloomberg terminal made for Indonesian stock exchange.",
    stack: "Built with NextJS, React, Prisma, TRPC, ShadCN UI, and TailwindCSS",
    demo: "https://idx-terminal.vercel.app/en",
    github: "https://github.com/RyanDyson/IDXTerminal",
  },
  {
    title: "CPU",
    subtitle: "Computer Architecture",
    imageUrl: cpu,
    description:
      "A bespoke 16-bit CPU design able to run a custom instruction set that covers basic instructions from MIPS ASM",
    stack: "Built with Logisim-Evolution",
    github: "https://github.com/vinmeil/discard",
    download:
      "https://github.com/RyanDyson/CPU-architecture-implementation/archive/refs/heads/main.zip",
  },
  {
    title: "Discard",
    subtitle: "UI/UX Design",
    imageUrl: discard,
    description:
      "A discord clone design created and concepted with a full design system with Figma",
    stack: "Designed with Figma",
    figma:
      "https://www.figma.com/design/7BlH5j8elYsH9V4P5RBbq2/App?node-id=56-6&t=jzQzu6YKWDZTluSU-1",
  },
  {
    title: "Acme",
    subtitle: "Full-Stack Web Development",
    imageUrl: acme,
    description:
      "A simple business financial tracker with support to input invoices and receipts from customer. A fully functional auth and dashboard is also supported",
    stack: "Built with NextJS, React, and TailwindCSS",
    demo: "https://next-js-acme-seven.vercel.app/dashboard",
    github: "https://github.com/RyanDyson/next-js-Acme",
  },
  {
    title: "HKIU",
    subtitle: "Front-end Web Development",
    imageUrl: hkiu,
    description:
      "A mock university website with functional major preference choice and visitor booking system. This project was used to learn the basics of webdev with only frontend functionality being available",
    stack: "Built with vanilla HTML, CSS, and JavaScript",
    demo: "https://cw-cs-2204.vercel.app/",
    github: "https://github.com/RyanDyson/CW-CS2204",
  },
];
