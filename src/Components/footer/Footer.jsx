// React
import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

// Components & elements
import Logo from 'Elements/logo/Logo';
import Icon from 'Elements/icon/Icon';

// Style
import global from '../../styles/global/global.module.scss';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={classNames(styles.wrapper, global.container)}>
        <div className={styles.content}>
          <div className={styles.block}>
            <Logo text={'SEOFlow'} />
            <div className={styles.text}>
              Spyro is a modern marketing landing page WP theme. that lets you
              build websites
            </div>
          </div>
          <div className={styles.block}>
            <h3 className={styles.subtitle}>Quick Links</h3>
            <Link to='/' className={styles.link}>
              Why SEO?
            </Link>
            <Link to='/' className={styles.link}>
              Service
            </Link>
            <Link to='/' className={styles.link}>
              Our Team
            </Link>
            <Link to='/' className={styles.link}>
              Our Team
            </Link>
          </div>
          <div className={styles.block}>
            <h3 className={styles.subtitle}>Services</h3>
            <Link to='/' className={styles.link}>
              SEO & Marketing
            </Link>
            <Link to='/' className={styles.link}>
              Email Marketing
            </Link>
            <Link to='/' className={styles.link}>
              Mobile Marketing
            </Link>
            <Link to='/' className={styles.link}>
              Google Ads
            </Link>
          </div>
          <div className={styles.block}>
            <h3 className={styles.subtitle}>Get in touch</h3>
            <div className={styles.infoBlock}>
              <div className={classNames(global.yellow, styles.iconBlock)}>
                <Icon name={'#icon-Phone1'} />
              </div>
              <Link to='/' className={styles.info}>1800-123-4567</Link>
            </div>
            <div className={styles.infoBlock}>
              <div className={classNames(global.yellow, styles.iconBlock)}>
                <Icon name={'#icon-safari'} />
              </div>
              <Link to='/' className={styles.info}>
                <span>HSR Layout</span>
                <span>21st Cross, Bangalore - 56010</span>
              </Link>
            </div>
            <div className={styles.infoBlock}>
              <div className={classNames(global.yellow, styles.iconBlock)}>
                <Icon name={'#icon-mail2'} />
              </div>
              <Link to='/' className={styles.info}>Info@brandexponents.com</Link>
            </div>
          </div>
          <div className={styles.block}>
            <h3 className={styles.subtitle}>Follow us</h3>
            <div className={styles.linkBlock}>
              <Link to='/' className={styles.linkIcon}>
                <Icon name={'#icon-facebook'} />
              </Link>
              <Link to='/' className={styles.linkIcon}>
                <Icon name={'#icon-instagram'} />
              </Link>
              <Link to='/' className={styles.linkIcon}>
                <Icon name={'#icon-twitter'} />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.licenseBlock}>
          <div className={styles.rool}>
            <div className={styles.license}>
              © SEOFlow 2021. All Rights Reserved.
            </div>
            <div className={styles.license}>Changelog</div>
            <div className={styles.license}>License Info</div>
          </div>
          <div className={styles.license}>
            Powered by
            <Link to='/' className={global.yellow}>
              Webflow
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
