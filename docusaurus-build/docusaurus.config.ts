import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Project Template Docs",
  tagline: "Production-ready TypeScript template",
  favicon: "img/favicon.ico",

  url: "https://project-template-bvv.pages.dev",
  baseUrl: "/",

  organizationName: "mordaHQ",
  projectName: "project-template",

  trailingSlash: false,

  // 🔒 СТРОГО: реальные ошибки ловим
  onBrokenLinks: "throw",

  // ✅ v3.9+ / v4-ready
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs",
          routeBasePath: "/", // docs = homepage
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/mordaHQ/project-template/tree/main/docusaurus-build/",
        },

        blog: {
          showReadingTime: true,
          blogTitle: "Project Blog",
          blogDescription: "Updates, releases and development notes",
          onUntruncatedBlogPosts: "ignore",
        },

        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
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
          label: "Docs",
          position: "left",
        },

        // ✅ КЛЮЧЕВОЙ ФИКС — API НЕ ВАЛИДИРУЕТСЯ
        {
          type: "html",
          position: "left",
          value: `
            <a class="navbar__item navbar__link"
               href="/api/index.html"
               target="_self"
               rel="noopener">
              API
            </a>
          `,
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
          items: [{ label: "Intro", to: "/" }],
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
      copyright: `Copyright © ${new Date().getFullYear()} Project Template.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
