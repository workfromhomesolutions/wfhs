import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Desenvolva habilidades',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       A WorkFromHome Solutions ajuda você a desenvolver habilidades para trabalhar 
       de casa com eficiência. Você pode se concentrar em aprimorar suas habilidades 
       e não se preocupar com os detalhes técnicos.
      </>
    ),
  },
  {
    title: 'Aumente sua produtividade',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Você pode aumentar sua produtividade e garantir que está no caminho certo. 
        Com a WorkFromHome Solutions, você pode ter confiança em sua capacidade 
        de trabalhar de casa.
      </>
    ),
  },
  {
    title: 'Aprenda com especialistas',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        A WorkFromHome Solutions oferece cursos ministrados por especialistas em 
        trabalho remoto. Aprenda com os melhores e desenvolva habilidades valiosas 
        para sua carreira.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
