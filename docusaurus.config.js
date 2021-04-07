/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "SMARTONE",
  tagline: "      We don't hide, we stand bravely in front of challenges",
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
          type: "localeDropdown",

          //// Optional
          position: "left",
          // Add additional dropdown items at the beginning/end of the dropdown.
          dropdownItemsBefore: [],
          dropdownItemsAfter: [
            {
              to: "https://my-site.com/help-us-translate",
              label: "Help us translate",
            },
          ],
        },
      ],
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          to: "team",
          label: "Team",
          position: "right",
          activeBaseRegex: `team`,
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
      links: [
        {
          // title: "Find we at",
          items: [
            // {
            //   label: "Facebook",
            //   // to: "Facebook/",
            // },
            // {
            //   label: "Instagram",
            //   // to: "Instagram/",
            // },
            // {
            //   label: "Twitter",
            //   // to: "Twitter/",
            // },
            // {
            //   label: "LinkedIn",
            //   // to: "LinkedIn/",
            // },
          ],
        },
        {
          items: [
            {
              label: "BELLA CASA VILLAGE MEZZO 17, GRESIK",
              to: "https://goo.gl/maps/jm5nyWsEFpnx3hr6A",
            },
            {
              label: "0812-3427-1646",
              to: "https://wa.me/6281234271646",
            },
            {
              label: "admin@smartnusanatara.id",
              to: "mailto:admin@smartnusanatara.id",
            },
            // {
            //   label: "Team",
            //   to: "team/",
            // },
            //       label: "Blog",
            //       to: "blog",
            //     },
            //     {
            //       label: "GitHub",
            //       href: "https://github.com/fiqriachmada/smart",
            //     },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()}, smartnusantara | All Rights  Reserved`,
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
