// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WorkFromHome Solutions',
  tagline: 'Aprenda a trabalhar de casa com eficiência, pois nós ajudamos profissionais a desenvolver habilidades para trabalhar de casa.,
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docusaurus-2.netlify.app', // Url to your site with no trailing slash
  baseUrl: '/', // Base directory of your site relative to your repo
  //url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  //baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'WorkFromHome Solutions', // Usually your GitHub org/user name.
  projectName: 'Site', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  stylesheets: [
    "https://fonts.googleapis.com/icon?family=Material+Icons",
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg#rounded',
      navbar: {
        title: 'WorkFromHome Solutions',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'}
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Redes sociais',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/profile.php?id=100093110814812&mibextid=ZbWKwL',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/workfromhome_solutions?igshid=ZGUzMzM3NWJiOQ==',
              },
             {
                label: 'TikTok',
                href: 'https://www.tiktok.com/@workfromhomesol?_t=8dLxHOu6NRG&_r=1',
              },
            ],
          },
          {
            title: 'Comunidade',
            items: [
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@workfromhomesolutions/playlists',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/workfromhome-solutions/',
              },
              {
                label: 'Pinterest',
                href: 'https://pin.it/5zriIQB',
              },
            ],
          },
          {
            title: 'Mais',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} WorkFromHome Solutions, Inc. Feito com Docusaurus e Inteligência Artificial.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
