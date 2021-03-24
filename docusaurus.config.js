/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "SMARTONE",
  tagline: "The tagline of my site",
  url: "https://smartnusantara.netlify.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.svg",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    navbar: {
      style: "dark",
      // title: 'My Site',
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: 'localeDropdown',

          //// Optional
          position: 'left',
          // Add additional dropdown items at the beginning/end of the dropdown.
          dropdownItemsBefore: [],
          dropdownItemsAfter: [
            {
              to: 'https://my-site.com/help-us-translate',
              label: 'Help us translate',
            },
          ],
        },
      ],
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "right",
        },
        { to: "blog", label: "Blog", position: "right" },
        {
          href: "https://github.com/fiqriachmada/smart",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      // links: [
      //   {
      //     title: "Find we at",
      //     items: [
      //       {
      //         label: "Facebook",
      //         // to: "Facebook/",
      //       },
      //       {
      //         label: "Instagram",
      //         // to: "Instagram/",
      //       },
      //       {
      //         label: "Twitter",
      //         // to: "Twitter/",
      //       },
      //       {
      //         label: "LinkedIn",
      //         // to: "LinkedIn/",
      //       },
      //     ],
      //   },
      //   {
      //     title: "Our",
      //     items: [
      //       {
      //         label: "Team",
      //         // to: "Team/",
      //       },
      //       {
      //         label: "Works",
      //         // to: "Works/",
      //       },
      //     ],
      //   },
      //   {
      //     title: "More",
      //     items: [
      //       {
      //         label: "Blog",
      //         to: "blog",
      //       },
      //       {
      //         label: "GitHub",
      //         href: "https://github.com/fiqriachmada/smart",
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()}, SmartNusantara.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        // theme: ["theme-blog"],
        // plugins: ["plugin-content-blog"],
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
