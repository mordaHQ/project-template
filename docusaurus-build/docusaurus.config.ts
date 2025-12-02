import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Project Template Docs",
  tagline: "Production-ready TypeScript template",
  favicon: "img/favicon.ico",

  future: { v4: true },

  // Cloudflare Pages абсолютный URL
  url: "https://project-template-bvv.pages.dev",

  // Сайт в корне домена
  baseUrl: "/",

  organizationName: "mordaHQ",
  projectName: "project-template",

  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/mordaHQ/project-template/tree/main/docusaurus-build/",
        },

        // ✅ Включаем блог
        blog: {
          path: "blog",
          routeBasePath: "blog",
          showReadingTime: true,
          blogTitle: "Project Blog",
          blogDescription: "Updates, releases and development notes",
        },

        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",

    navbar: {
      title: "Project Docs",
      logo: {
        alt: "Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        {
          to: "/blog",
          label: "Blog",
          position: "left",
        },
        {
          href: "https://github.com/mordaHQ/project-template",
          label: "GitHub",
          position: "right",
        },
      ],
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [{ label: "Intro", to: "/docs/intro" }],
        },
        {
          title: "More",
          items: [
            { label: "Blog", to: "/blog" },
            {
              label: "GitHub",
              href: "https://github.com/mordaHQ/project-template",
            },
          ],
        },
      ],
      copyright:
        "Copyright " +
        new Date().getFullYear() +
        " Project Template. Built with Docusaurus.",
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
