import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type PlatformItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  url: string;
  description: JSX.Element;
};

const Platform_List: PlatformItem[] = [
  {
    title: '微信公众号',
    Svg: require('@site/static/img/wechat.svg').default,
    url: '/img/wechat.png',
    description: (
      <>   
      wx
      </>
    ),
  }
];

function Platform({title, Svg, url, description}: PlatformItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.PlatformSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3><a href={url}>{title}</a></h3>
        {/* <p>{description}</p> */}
      </div>
    </div>
  );
}

export default function OtherPlatforms(): JSX.Element {
  return (
    <section className={styles.Platforms}>
      <div className="container">
        <div className="row">
          {Platform_List.map((props, idx) => (
            <Platform key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
