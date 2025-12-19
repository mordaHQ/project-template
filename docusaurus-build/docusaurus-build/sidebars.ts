import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: "doc",
      id: "intro",
      label: "Введение",
    },
    {
      type: "category",
      label: "Документация",
      items: [
        "getting-started",
        "project-architecture",
        "folder-structure",
        "ci-cd",
        "testing",
        "scripts",
      ],
    },
    {
      type: "link",
      label: "API Reference",
      href: "/api/",
    },
  ],
};

export default sidebars;
