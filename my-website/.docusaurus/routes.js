import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '7e2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '338'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'd84'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '709'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'ac1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '6de'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '638'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '3f0'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '727'),
    exact: true
  },
  {
    path: '/blog/sobre-home-office',
    component: ComponentCreator('/blog/sobre-home-office', '688'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '8d8'),
    exact: true
  },
  {
    path: '/blog/tags/dicas',
    component: ComponentCreator('/blog/tags/dicas', '0d2'),
    exact: true
  },
  {
    path: '/blog/tags/guia',
    component: ComponentCreator('/blog/tags/guia', '191'),
    exact: true
  },
  {
    path: '/blog/tags/home-office',
    component: ComponentCreator('/blog/tags/home-office', '281'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '64a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '05b'),
    routes: [
      {
        path: '/docs/category/lista-de-e-books',
        component: ComponentCreator('/docs/category/lista-de-e-books', '415'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/pacotes-de-cursos',
        component: ComponentCreator('/docs/category/pacotes-de-cursos', 'e56'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/cursos/home-office',
        component: ComponentCreator('/docs/cursos/home-office', '2a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/cursos/negocio-online',
        component: ComponentCreator('/docs/cursos/negocio-online', '4e5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/cursos/venda-plr',
        component: ComponentCreator('/docs/cursos/venda-plr', 'f68'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ebooks/lucro-chatgpt',
        component: ComponentCreator('/docs/ebooks/lucro-chatgpt', '564'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ebooks/pesquisas-lucrativas',
        component: ComponentCreator('/docs/ebooks/pesquisas-lucrativas', '239'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ebooks/pitch-vendas',
        component: ComponentCreator('/docs/ebooks/pitch-vendas', 'ad7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ebooks/segredos-bitcoin',
        component: ComponentCreator('/docs/ebooks/segredos-bitcoin', '41c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/politica-privacidade',
        component: ComponentCreator('/docs/politica-privacidade', '8c4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/sobre-nos',
        component: ComponentCreator('/docs/sobre-nos', '116'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'ee5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
