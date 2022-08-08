// React
import React from 'react';
import classNames from 'classnames';

// Components & elements


// Style
import global from '../../styles/global/global.module.scss';
import styles from './GetInTouch.module.scss';

const GetInTouch = () => {
  return (
    <div className={styles.getInTouch}>
      <div className={classNames(styles.wrapper, global.container)}>
        <h2 className={styles.title}>
        Get in touch
        </h2>
        <h3 className={styles.subtitle}>
          Let us know know about your requirements
        </h3>
      </div>
    </div>
  );
};

export default GetInTouch;