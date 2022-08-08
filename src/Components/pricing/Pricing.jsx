// React
import { useState } from 'react';
import classNames from 'classnames';
// Components & Elements
import Icon from 'Elements/icon/Icon';
import MyButton from 'Elements/Button/MyButton';
import wave from '../../assets/img/Waves/bottomWave.png';

// Style
import styles from './Pricing.module.scss';
import global from '../../styles/global/global.module.scss';
import { ButtonTypes } from 'types/Button';

const PlanTypes = {
  SILVER: 'silver',
  GOLD: 'gold',
  PLATINUM: 'platinum',
  
}


const Pricing = () => {
  const [plan, setPlan] = useState(null);
  
  return (
    <div className={styles.pricing}>
      <div className={classNames(styles.wrapper, global.container)}>
        <h2 className={styles.title}>Pricing & Plans</h2>
        <h3 className={styles.subtitle}>We offer best price in the market</h3>
        <div className={styles.block}>
          <div className={styles.card} onClick={() => setPlan(PlanTypes.SILVER)}>
            <h3 className={styles.cardTitle}>Silver</h3>
            <div className={styles.price}>
              $ <sup>149</sup> /Per Month
            </div>
            <div className={styles.listBlock}>
              
                <ul className={styles.list}>
                  <li className={styles.item}>
                    <div className={styles.itemIcon}>
                      <Icon name={'#icon-heck'} />
                    </div>
                    <span>Key Words Optimized</span>
                  </li>
                  <li className={styles.item}>
                    <div className={styles.itemIcon}>
                      <Icon name={'#icon-heck'} />
                    </div>
                    <span>Top 10 Ranking Guarantee</span>
                  </li>
                  <li className={styles.item}>
                    <div className={styles.itemIcon}>
                      <Icon name={'#icon-heck'} />
                    </div>
                    <span>Weekly Reporting</span>
                  </li>
                  <li className={styles.item}>
                    <div className={styles.itemIcon}>
                      <Icon name={'#icon-heck'} />
                    </div>
                    <span>Key Words Optimized</span>
                  </li>
                </ul>
                <ul className={styles.list}>
                  <li className={styles.item}>
                  <div className={classNames(styles.itemIcon, styles.itemCancel)}>
                      <Icon name={'#icon-Cancel'} />
                    </div>
                    <span>Top 10 Ranking Guarantee</span>
                  </li>
                  <li className={styles.item}>
                    <div className={classNames(styles.itemIcon, styles.itemCancel)}>
                      <Icon name={'#icon-Cancel'} />
                    </div>
                    <span>Weekly Reporting</span>
                  </li>
                  <li className={styles.item}>
                    <div className={classNames(styles.itemIcon, styles.itemCancel)}>
                      <Icon name={'#icon-Cancel'} />
                    </div>
                    <span>Weekly Reporting</span>
                  </li>
                  <li className={styles.item}>
                    <div className={classNames(styles.itemIcon, styles.itemCancel)}>
                      <Icon name={'#icon-Cancel'} />
                    </div>
                    <span>Top 10 Ranking Guarantee</span>
                  </li>
              </ul>
            </div>
            <MyButton
              type={'button'}
              title={'Get Started'}
              mode={plan === PlanTypes.SILVER ? null : ButtonTypes.pricing}
              // ButtonTypes.pricing || null
            />
          </div>
          <div className={styles.card} onClick={() => setPlan(PlanTypes.GOLD)}>
            <div className={styles.mark}>Popular</div>
            <h3 className={styles.cardTitle}>Silver</h3>
            <div className={styles.price}>
              $ <sup>399</sup> /Per Month
            </div>
            <div className={styles.listBlock}>
              
                <ul className={styles.list}>
                  <li className={styles.item}>
                    <div className={styles.itemIcon}>
                      <Icon name={'#icon-heck'} />
                    </div>
                    <span>Key Words Optimized</span>
                  </li>
                  <li className={styles.item}>
                    <div className={styles.itemIcon}>
                      <Icon name={'#icon-heck'} />
                    </div>
                    <span>Top 10 Ranking Guarantee</span>
                  </li>
                  <li className={styles.item}>
                    <div className={styles.itemIcon}>
                      <Icon name={'#icon-heck'} />
                    </div>
                    <span>Weekly Reporting</span>
                  </li>
                  <li className={styles.item}>
                    <div className={styles.itemIcon}>
                      <Icon name={'#icon-heck'} />
                    </div>
                    <span>Key Words Optimized</span>
                  </li>
                </ul>
                <ul className={styles.list}>
                  <li className={styles.item}>
                    <div className={styles.itemIcon}>
                      <Icon name={'#icon-heck'} />
                    </div>
                    <span>Top 10 Ranking Guarantee</span>
                  </li>
                  <li className={styles.item}>
                    <div className={classNames(styles.itemIcon, styles.itemCancel)}>
                      <Icon name={'#icon-Cancel'} />
                    </div>
                    <span>Weekly Reporting</span>
                  </li>
                  <li className={styles.item}>
                    <div className={classNames(styles.itemIcon, styles.itemCancel)}>
                      <Icon name={'#icon-Cancel'} />
                    </div>
                    <span>Weekly Reporting</span>
                  </li>
                  <li className={styles.item}>
                    <div className={classNames(styles.itemIcon, styles.itemCancel)}>
                      <Icon name={'#icon-Cancel'} />
                    </div>
                    <span>Top 10 Ranking Guarantee</span>
                  </li>
              </ul>
            </div>
            <MyButton
              type={'button'}
              title={'Get Started'}
              mode={plan === PlanTypes.GOLD ? null : ButtonTypes.pricing}
            />
          </div>
          <div className={styles.card} onClick={() => setPlan(PlanTypes.PLATINUM)}>
            <h3 className={styles.cardTitle}>Silver</h3>
            <div className={styles.price}>
              $ <sup>549</sup> /Per Month
            </div>
            <div className={styles.listBlock}>
              
                <ul className={styles.list}>
                  <li className={styles.item}>
                    <div className={styles.itemIcon}>
                      <Icon name={'#icon-heck'} />
                    </div>
                    <span>Key Words Optimized</span>
                  </li>
                  <li className={styles.item}>
                    <div className={styles.itemIcon}>
                      <Icon name={'#icon-heck'} />
                    </div>
                    <span>Top 10 Ranking Guarantee</span>
                  </li>
                  <li className={styles.item}>
                    <div className={styles.itemIcon}>
                      <Icon name={'#icon-heck'} />
                    </div>
                    <span>Weekly Reporting</span>
                  </li>
                  <li className={styles.item}>
                    <div className={styles.itemIcon}>
                      <Icon name={'#icon-heck'} />
                    </div>
                    <span>Key Words Optimized</span>
                  </li>
                </ul>
                <ul className={styles.list}>
                  <li className={styles.item}>
                    <div className={styles.itemIcon}>
                      <Icon name={'#icon-heck'} />
                    </div>
                    <span>Top 10 Ranking Guarantee</span>
                  </li>
                  <li className={styles.item}>
                  <div className={styles.itemIcon}>
                      <Icon name={'#icon-heck'} />
                    </div>
                    <span>Weekly Reporting</span>
                  </li>
                  <li className={styles.item}>
                  <div className={styles.itemIcon}>
                      <Icon name={'#icon-heck'} />
                    </div>
                    <span>Weekly Reporting</span>
                  </li>
                  <li className={styles.item}>
                  <div className={styles.itemIcon}>
                      <Icon name={'#icon-heck'} />
                    </div>
                    <span>Top 10 Ranking Guarantee</span>
                  </li>
              </ul>
            </div>
            <MyButton
              type={'button'}
              title={'Get in touch'}
              mode={plan === PlanTypes.PLATINUM ? null : ButtonTypes.pricing}
            />
          </div>
        </div>
      </div>
      <div className={global.waves}>
        <img src={wave} alt='wave' />
      </div>
    </div>
  );
};

export default Pricing;
