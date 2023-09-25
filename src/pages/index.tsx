import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import OtherPlatforms from '@site/src/components/OtherPlatforms';
import styles from './index.module.css';


function HeroBanner() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={styles.heroBanner}>
      {/* <div className={styles.heroBannerTitle}>
            {siteConfig.title}
      </div>
      <div className={styles.heroBannerTagline}>
            {siteConfig.tagline}
      </div> */}
      <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/brand-history">
            了解刘信记品牌故事
          </Link>
          <Link className="button button--secondary button--lg" to="/blog">
            浏览近期博客
          </Link>
      </div>
      </div>
  );
}



export default function Platforms(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title= "首页">
      
      <div className={styles.logobanner}>
            <img title="liuxinji" src={useBaseUrl('img/banner.jpg')} />
      </div>
      <HeroBanner />
      <div className={styles.otherbanner}> 刘信记饼业各平台账号 </div>
      {/* <div className={styles.platforms}>
          <img title="liuxinji" src={useBaseUrl('img/wechat.png')} />
      </div> */}
      <OtherPlatforms />
    </Layout>
  );
}
