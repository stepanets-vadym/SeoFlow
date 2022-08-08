// React
import classNames from 'classnames';

// Components & elements
import Icon from 'Elements/icon/Icon';

// Style
import global from '../../styles/global/global.module.scss';
import styles from './Works.module.scss';

const Works = () => {
  return (
    <div className={styles.works}>
      <div className={classNames(styles.wrapper, global.container)}>
        <h2 className={styles.title}>
          How <span className={global.yellow}>SEO</span> works step by step?
        </h2>
        <div className={styles.subtitle}>
          The best part of being a part of this community
        </div>
        <div className={styles.line}></div>
        <div className={styles.content}>
          <div className={styles.block}>
            <div className={styles.blockIcon}>
              <Icon name={'#icon-stats-bars2'} />
            </div>
            <h3 className={styles.blockTitle}>Business Analysis</h3>
            <div className={styles.blockText}>
              Spyro is a landing page WP theme, that lets you build stunning
              high performance.
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.blockIcon}>
              <Icon name={'#icon-stack'} />
            </div>
            <h3 className={styles.blockTitle}>Keyword Analysis</h3>
            <div className={styles.blockText}>
              Spyro is a landing page WP theme, that lets you build stunning
              high performance.
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.blockIcon}>
              <Icon name={'#icon-box-remove'} />
            </div>
            <h3 className={styles.blockTitle}>Optimization</h3>
            <div className={styles.blockText}>
              Spyro is a landing page WP theme, that lets you build stunning
              high performance.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
