import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// Styles
import styles from './Navigation.module.scss';






const Navigation = ({ open, callbackClick }) => {
  const [openMenu, setOpenMenu] = useState('');
  useEffect(() => {
    
    setOpenMenu(open ? styles.burgerMenu  : '');
  }, [open]);

  return (
    <nav className={classNames(styles.navigation, `${openMenu}`)}>
      <div className={styles.menu}>
        <Link to='/' className={styles.link} onClick={()=>{ callbackClick(!open)}} >
          Home
        </Link>
        <Link to='/about' className={styles.link} onClick={()=>{ callbackClick(!open)}} >
          Why SEO?
        </Link>
        <Link to='/benefits' className={styles.link} onClick={()=>{ callbackClick(!open)}} >
          Services
        </Link>
        {/* <Link to='/' className={styles.link} onClick={()=>{ callbackClick(!open)}}>
          Team
        </Link> */}
        <Link to='/pricing' className={styles.link} onClick={()=>{ callbackClick(!open)}}>
          Pricing
        </Link>
        {/* <Link to='/about' className={styles.link} onClick={()=>{ callbackClick(!open)}}>
          Blog
        </Link> */}
        <Link to='/contacts' className={styles.link} onClick={()=>{ callbackClick(!open)}}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
