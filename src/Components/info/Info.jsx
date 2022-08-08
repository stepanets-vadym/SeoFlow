// React
import classNames from 'classnames';

// Components & elements
import Plane from '../../assets/img/localimg/Plane.png';
import Roket from '../../assets/img/localimg/Roket.png';
import Appear from '../../assets/img/localimg/Appear.png';
import Reasons from '../../assets/img/localimg/Reasons.png';
import Icon from 'Elements/icon/Icon';

// Style
import styles from './Info.module.scss'
import global from '../../styles/global/global.module.scss'


const Info = () => {
  return (
    <div className={styles.info}>
      <div className={classNames(styles.wrapper, global.container)}>
        <div className={styles.were}>
          <div className={styles.wereInfo}>
            <h3 className={styles.wereSubtitle}>
              <span className={global.yellow}> 
                We’re SEO & Marketing Agency
              </span>
            </h3>
            <h2 className={styles.wereTitle}>
              Building an effective conversion strategy
            </h2>
            <div className={styles.wereText}>
              A great marketing landing page plays a major role to increase conversion rates in order to reach your marketing or business growth goals. It helps you to Introduce your digital campaign to visitors in a more professional way.
            </div>
          </div>
          <div className={styles.possibility}>
            <div className={styles.wereBlock}>
              <div className={styles.wereImg}>
                <img src={Plane} alt='Plane' />
              </div>
              <div className={styles.message}>
              <h3 className={styles.wereSubtitle}>
                Digital Marketing
              </h3>
              <div className={styles.messageText}>
                It’s a modern business theme, that lets you build stunning high performance websites using a fully visual interface.
              </div>
              </div>
            </div>
            <div className={styles.wereBlock}>
              <div className={styles.wereImg}>
                <img src={Roket} alt='Roket' />
              </div>
              <div className={styles.message}>
              <h3 className={styles.wereSubtitle}>
                Search Engine Optimization
              </h3>
              <div className={styles.messageText}>
                It’s a modern business theme, that lets you build stunning high performance websites using a fully visual interface.
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.seok}>
          <div className={styles.seoImg}>
            <img src={Appear} alt='Appear' />
          </div>
          <div className={styles.seoBlock}>
            <h3 className={ classNames(styles.seoSubtitle, global.yellow)}>
              Looking for best SEO results?
            </h3>
            <h2 className={classNames(styles.seoTitle, styles.resultTitle)}>
              Appear on the front page of Google!
            </h2>
            <div className={classNames(styles.seoText, styles.resultText)}>
              Spyro is a powerful landing pages builder WordPress theme that lets you build high converting landing pages using its specially crafted modules clubbed inside.
            </div>
            <div className={styles.listBlock}>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <Icon name={'#icon-heck'}/>
                  <span className={styles.listText}>Connect with Customers</span>
                </li>
                <li className={styles.listItem}>
                  <Icon name={'#icon-heck'}/>
                  <span className={styles.listText}>Increase Traffic</span>
                </li>
                <li className={styles.listItem}>
                  <Icon name={'#icon-heck'}/>
                  <span className={styles.listText}>Online Reputation</span>
                </li>
                <li className={styles.listItem}>
                  <Icon name={'#icon-heck'}/>
                  <span className={styles.listText}>Build brand value</span>
                </li>
              </ul>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <Icon name={'#icon-heck'}/>
                  <span className={styles.listText}>Revenue Generating</span>
                </li>
                <li className={styles.listItem}>
                  <Icon name={'#icon-heck'}/>
                  <span className={styles.listText}>Increase Conversion</span>
                </li>
                <li className={styles.listItem}>
                  <Icon name={'#icon-heck'}/>
                  <span className={styles.listText}>Real-Time Analytics</span>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
        <div className={classNames(styles.seok, styles.revers)}>
          <div className={styles.seoBlock}>
            <h3 className={ classNames(styles.seoSubtitle, global.yellow)}>
              Why we’re the best in Industry?
            </h3>
            <h2 className={classNames(styles.seoTitle, styles.industryTitle)}>
              Top reasons for choosing Spyro SEO agency
            </h2>
            <div className={classNames(styles.seoText, styles.resultText)}>
              Spyro is a powerful landing pages builder WordPress theme that lets you build high converting landing pages using its specially crafted modules clubbed inside.
            </div>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <div className={styles.cardIcon}>
                  <Icon name={'#icon-loud'}/>
                </div>
                <div className={styles.cardText}>
                  <div className={styles.persent}>
                    98.5%
                  </div>  
                  <div className={styles.coment}>
                    Satisfaction
                  </div>
                </div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardIcon}>
                  <Icon name={'#icon-Person'}/>
                </div>
                <div className={styles.cardText}>
                  <div className={styles.persent}>
                    150%
                  </div>  
                  <div className={styles.coment}>
                    Conversion
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div className={styles.seoImg}>
          <img src={Reasons} alt='Reasons' />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Info;