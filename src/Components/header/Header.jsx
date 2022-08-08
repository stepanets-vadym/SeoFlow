// React
import { Link } from 'react-router-dom';
import React, { useCallback, useEffect, useState } from 'react';

// Components & elements
import Navigation from 'Elements/Navigation/Navigation';
import { ButtonTypes } from '../../types/Button';
import MyButton from 'Elements/Button/MyButton';
import Burger from 'Elements/burger/Burger';
import Icon from 'Elements/icon/Icon';

// Style
import global from '../../styles/global/global.module.scss';
import styles from './Header.module.scss';
import Logo from 'Elements/logo/Logo';
import classNames from 'classnames';

const Header = () => {
  const locallBurgeOpen = localStorage.getItem('burgerOpen'); // може бути : null || 'false' || 'true'
  const [open, setOpen] = useState(
    locallBurgeOpen ? JSON.parse(locallBurgeOpen) : false
  );
  const [firstRenderer, setFirstRenderer] = useState(false);
  useEffect(() => {
    firstRenderer
      ? localStorage.setItem('burgerOpen', open)
      : setFirstRenderer(true);
  }, [open]);

  // header fixed
  const [y, setY] = useState(window.scrollY);
  const [stickyHeader, setStickyHeader] = useState('');
  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      setStickyHeader(y > 46 ? styles.headerStiky : '');
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener('scroll', handleNavigation);

    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <header className={styles.header}>
      <div className={global.container}>
        {/* Info */}
        <div className={styles.info}>
          <div className={styles.infoBlock}>
            <div className={styles.call}>
              <Link to='#' className={styles.callLink}>
                <Icon name={'#icon-Phone1'} />
              </Link>
              <div className={styles.callText}>+1800-123-4567</div>
            </div>
            <div className={styles.call}>
              <Link to='#' className={styles.callLink}>
                <Icon name={'#icon-Plane'} />
              </Link>
              <div className={styles.callText}>info@brandexponents.com</div>
            </div>
          </div>
          <div className={styles.infoLinks}>
            <Link to='#' className={styles.infoLink}>
              <Icon name={'#icon-facebook'} />
            </Link>
            <Link to='#' className={styles.infoLink}>
              <Icon name={'#icon-twitter'} />
            </Link>
            <Link to='#' className={styles.infoLink}>
              <Icon name={'#icon-instagram'} />
            </Link>
            <Link to='#' className={styles.infoLink}>
              <Icon name={'#icon-github'} />
            </Link>
          </div>
        </div>
        {/* Content */}
        <div
          className={classNames(styles.content, `${stickyHeader}`)}
          id='js-header-content'
        >
          <Logo text={'SEOFlow'} />
          <Navigation open={open} callbackClick={setOpen} />

          <div className={styles.btnBlock}>
            <MyButton title='Enquiry' type='button' mode={ButtonTypes.small} />
            <Burger open={open} callbackClick={setOpen} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
