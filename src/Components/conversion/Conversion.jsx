import classNames from 'classnames';

import MyButton from 'Elements/Button/MyButton';
import Icon from 'Elements/icon/Icon';


import styles from './Conversion.module.scss'
import global from '../../styles/global/global.module.scss'


const Conversion = () =>{

return(
  <div className={styles.conversion}>
    <div className={classNames(styles.wrapper, global.container)}>
      <div className={styles.info}>
        <h2 className={styles.title}>
          Conversion rate optimization
        </h2>
        <div className={styles.text}>
        Spyro is a powerful landing pages builder WordPress theme that lets you build high converting landing pages using its specially crafted modules clubbed inside.
        </div>
        <MyButton title='Get a quote' type='button'/>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
            <div className={classNames(styles.cardIcon, global.yellow, styles.iconBorder)}>
              <Icon name={'#icon-heck'}/>
            </div>
            <h3 className={styles.cardTitle}>
              CRO Techniques
            </h3>
            <div className={styles.cardText}>
              Spyro is a powerful landing pages builder WordPress theme that lets you build high converting pages.
            </div>  

        </div>
        <div className={styles.card}>
            <div className={classNames(styles.cardIcon, global.yellow)}>
              <Icon name={'#icon-clipboard'}/>
            </div>
            <h3 className={styles.cardTitle}>
            User Recordings
            </h3>
            <div className={styles.cardText}>
            Built by keeping Advertisers, Marketers, Lead Generation Companies, and Individuals.
            </div>  

        </div>
        <div className={styles.card}>
            <div className={classNames(styles.cardIcon, global.yellow)}>
              <Icon name={'#icon-loop'}/>
            </div>
            <h3 className={styles.cardTitle}>
              A/B Split Testing
            </h3>
            <div className={styles.cardText}>
            The theme comes with 10+ stunning pre-built demos which you can use as your website.
            </div>  

        </div>
        <div className={styles.card}>
            <div className={classNames(styles.cardIcon, global.yellow)}>
              <Icon name={'#icon-Earth'}/>
            </div>
            <h3 className={styles.cardTitle}>
            Better Website ROI
            </h3>
            <div className={styles.cardText}>
            Spyro is a marketing landing page WP theme, that lets you build stunning high performance.
            </div>  

        </div>
      </div>
    </div>

  </div>
)

}


export default Conversion;