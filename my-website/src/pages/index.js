import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/sobre-nos">
            Saber mais - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageCatalogue() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <a href="url"><img src="../../static/img/undraw_docusaurus_mountain.svg" alt="Avatar" style="width:100%"></a>
    <a href="url"><img src="../../static/img/undraw_docusaurus_mountain.svg" alt="Avatar" style="width:100%"></a>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Portal da WorkFromHome Solutions">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageCatalogue />
      </main>
    </Layout>
  );
}
