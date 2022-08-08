import { useState } from 'react';
import classNames from 'classnames';

import Icon from 'Elements/icon/Icon';
import MyButton from 'Elements/Button/MyButton';
import Marketing from 'assets/img/localimg/Marketing.png';

import global from '../../styles/global/global.module.scss';
import styles from './Servises.module.scss';

const tabs = {
  SEO: 'seo',
  EMAIL: 'email',
  MOBILE: 'mobile',
  GOOGLE: 'google',
  SOCIAL: 'social',
  DIGITAL: 'digital',
};

const Servises = () => {
  const [tab, setTab] = useState(tabs.SEO);

  const serviseBtn = [
    { name: '#icon-Plane', title: 'SEO & Marketing', tab: tabs.SEO },
    { name: '#icon-Doge', title: 'Email Marketing', tab: tabs.EMAIL },
    { name: '#icon-Phone', title: 'Mobile Marketing', tab: tabs.MOBILE },
    { name: '#icon-Computer', title: 'Google Ads', tab: tabs.GOOGLE },
    { name: '#icon-Share', title: 'Social Media Ads', tab: tabs.SOCIAL },
    { name: '#icon-Horn', title: 'Digital Marketing', tab: tabs.DIGITAL },
  ];

  return (
    <div className={styles.servises}>
      <div className={classNames(styles.wrapper, global.container)}>
        <h2 className={styles.title}>Our Services </h2>

        <nav className={styles.navigation}>
          {serviseBtn.map((item, index) => (
            <Tab
              key={`tab - ${index}`}
              name={item.name}
              title={item.title}
              callbackClick={() => {
                setTab(item.tab);
              }}
            />
          ))}
        </nav>
        <div className={styles.content}>
          {tab === tabs.SEO ? (
            <>
              <div className={styles.seo}>
                <div className={styles.tab}>
                  <div className={styles.tabBlock}>
                    <div className={styles.tabTitle}>SEO & Marketing</div>
                    <div className={styles.tabText}>
                      Spyro WordPress theme is insanely flexible and amazingly
                      easy to use. This alone would be enough for a 5 star
                      rating on top of a great tool is even better customer
                      support.
                    </div>
                    <ul className={styles.list}>
                      <li className={styles.item}>
                        <div className={styles.listIcon}>
                          <Icon name={'#icon-Acept'} />
                        </div>
                        <span>Increase the Organic Traffic</span>
                      </li>
                      <li className={styles.item}>
                        <div className={styles.listIcon}>
                          <Icon name={'#icon-Acept'} />
                        </div>
                        <span>On-Page Search Engine Optimization</span>
                      </li>
                      <li className={styles.item}>
                        <div className={styles.listIcon}>
                          <Icon name={'#icon-Acept'} />
                        </div>
                        <span>White hat Backlink Generation</span>
                      </li>
                    </ul>
                    <MyButton title='Explore Now' type='button' />
                  </div>
                  <div className={styles.tabImg}>
                    <img src={Marketing} alt='alt' />
                  </div>
                  ;
                </div>
              </div>
            </>
          ) : null}
          {tab === tabs.EMAIL ? (
            <>
              <div className={styles.email}>
                <div className={styles.tab}>
                  <div className={styles.tabBlock}>
                    <div className={styles.tabTitle}>SEO & Marketing</div>
                    <div className={styles.tabText}>
                      Spyro WordPress theme is insanely flexible and amazingly
                      easy to use. This alone would be enough for a 5 star
                      rating on top of a great tool is even better customer
                      support.
                    </div>
                    <ul className={styles.list}>
                      <li className={styles.item}>
                        <div className={styles.listIcon}>
                          <Icon name={'#icon-Acept'} />
                        </div>
                        <span>Increase the Organic Traffic</span>
                      </li>
                      <li className={styles.item}>
                        <div className={styles.listIcon}>
                          <Icon name={'#icon-Acept'} />
                        </div>
                        <span>On-Page Search Engine Optimization</span>
                      </li>
                      <li className={styles.item}>
                        <div className={styles.listIcon}>
                          <Icon name={'#icon-Acept'} />
                        </div>
                        <span>White hat Backlink Generation</span>
                      </li>
                    </ul>
                    <MyButton title='Explore Now' type='button' />
                  </div>
                  <div className={styles.tabImg}>
                    <img src={Marketing} alt='alt' />
                  </div>
                  ;
                </div>
              </div>
            </>
          ) : null}
          {tab === tabs.MOBILE ? (
            <>
              <div className={styles.mobile}>
                <div className={styles.tab}>
                  <div className={styles.tabBlock}>
                    <div className={styles.tabTitle}>SEO & Marketing</div>
                    <div className={styles.tabText}>
                      Spyro WordPress theme is insanely flexible and amazingly
                      easy to use. This alone would be enough for a 5 star
                      rating on top of a great tool is even better customer
                      support.
                    </div>
                    <ul className={styles.list}>
                      <li className={styles.item}>
                        <div className={styles.listIcon}>
                          <Icon name={'#icon-Acept'} />
                        </div>
                        <span>Increase the Organic Traffic</span>
                      </li>
                      <li className={styles.item}>
                        <div className={styles.listIcon}>
                          <Icon name={'#icon-Acept'} />
                        </div>
                        <span>On-Page Search Engine Optimization</span>
                      </li>
                      <li className={styles.item}>
                        <div className={styles.listIcon}>
                          <Icon name={'#icon-Acept'} />
                        </div>
                        <span>White hat Backlink Generation</span>
                      </li>
                    </ul>
                    <MyButton title='Explore Now' type='button' />
                  </div>
                  <div className={styles.tabImg}>
                    <img src={Marketing} alt='alt' />
                  </div>
                  ;
                </div>
              </div>
            </>
          ) : null}
          {tab === tabs.GOOGLE ? (
            <>
              <div className={styles.google}>
                <div className={styles.tab}>
                  <div className={styles.tabBlock}>
                    <div className={styles.tabTitle}>SEO & Marketing</div>
                    <div className={styles.tabText}>
                      Spyro WordPress theme is insanely flexible and amazingly
                      easy to use. This alone would be enough for a 5 star
                      rating on top of a great tool is even better customer
                      support.
                    </div>
                    <ul className={styles.list}>
                      <li className={styles.item}>
                        <div className={styles.listIcon}>
                          <Icon name={'#icon-Acept'} />
                        </div>
                        <span>Increase the Organic Traffic</span>
                      </li>
                      <li className={styles.item}>
                        <div className={styles.listIcon}>
                          <Icon name={'#icon-Acept'} />
                        </div>
                        <span>On-Page Search Engine Optimization</span>
                      </li>
                      <li className={styles.item}>
                        <div className={styles.listIcon}>
                          <Icon name={'#icon-Acept'} />
                        </div>
                        <span>White hat Backlink Generation</span>
                      </li>
                    </ul>
                    <MyButton title='Explore Now' type='button' />
                  </div>
                  <div className={styles.tabImg}>
                    <img src={Marketing} alt='alt' />
                  </div>
                  ;
                </div>
              </div>
            </>
          ) : null}
          {tab === tabs.SOCIAL ? (
            <>
              <div className={styles.social}>
                <div className={styles.tab}>
                  <div className={styles.tabBlock}>
                    <div className={styles.tabTitle}>SEO & Marketing</div>
                    <div className={styles.tabText}>
                      Spyro WordPress theme is insanely flexible and amazingly
                      easy to use. This alone would be enough for a 5 star
                      rating on top of a great tool is even better customer
                      support.
                    </div>
                    <ul className={styles.list}>
                      <li className={styles.item}>
                        <div className={styles.listIcon}>
                          <Icon name={'#icon-Acept'} />
                        </div>
                        <span>Increase the Organic Traffic</span>
                      </li>
                      <li className={styles.item}>
                        <div className={styles.listIcon}>
                          <Icon name={'#icon-Acept'} />
                        </div>
                        <span>On-Page Search Engine Optimization</span>
                      </li>
                      <li className={styles.item}>
                        <div className={styles.listIcon}>
                          <Icon name={'#icon-Acept'} />
                        </div>
                        <span>White hat Backlink Generation</span>
                      </li>
                    </ul>
                    <MyButton title='Explore Now' type='button' />
                  </div>
                  <div className={styles.tabImg}>
                    <img src={Marketing} alt='alt' />
                  </div>
                  ;
                </div>
              </div>
            </>
          ) : null}
          {tab === tabs.DIGITAL ? (
            <>
              <div className={styles.digital}>
                <div className={styles.tab}>
                  <div className={styles.tabBlock}>
                    <div className={styles.tabTitle}>SEO & Marketing</div>
                    <div className={styles.tabText}>
                      Spyro WordPress theme is insanely flexible and amazingly
                      easy to use. This alone would be enough for a 5 star
                      rating on top of a great tool is even better customer
                      support.
                    </div>
                    <ul className={styles.list}>
                      <li className={styles.item}>
                        <div className={styles.listIcon}>
                          <Icon name={'#icon-Acept'} />
                        </div>
                        <span>Increase the Organic Traffic</span>
                      </li>
                      <li className={styles.item}>
                        <div className={styles.listIcon}>
                          <Icon name={'#icon-Acept'} />
                        </div>
                        <span>On-Page Search Engine Optimization</span>
                      </li>
                      <li className={styles.item}>
                        <div className={styles.listIcon}>
                          <Icon name={'#icon-Acept'} />
                        </div>
                        <span>White hat Backlink Generation</span>
                      </li>
                    </ul>
                    <MyButton title='Explore Now' type='button' />
                  </div>
                  <div className={styles.tabImg}>
                    <img src={Marketing} alt='alt' />
                  </div>
                  ;
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};
const Tab = ({ name, title, callbackClick }) => {
  return (
    <button className={styles.navItem} onClick={callbackClick}>
      <div className={styles.itemIcon}>
        <Icon name={name} />
      </div>
      <span className={styles.itemText}>{title}</span>
      <div className={styles.itemBox}></div>
    </button>
  );
};
export default Servises;
