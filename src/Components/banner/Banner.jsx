// React


// Components & elements
import MyButton from 'Elements/Button/MyButton';
import ImgBanner from 'assets/img/localimg/Banner.png';

// Style
import styles from './Banner.module.scss';
import global from '../../styles/global/global.module.scss';
import classNames from 'classnames';

const Banner = () => {

  
  return (
    <div className={styles.banner}>
      <div className={classNames(styles.wrapper, global.container)}>
        <div className={styles.content}>
          <div className={styles.info}>
            <h1 className={styles.title}>
              We’re strategic <span className={global.yellow}> SEO Marketing </span> agency.
            </h1>
            <div className={styles.infoBlock}>
              <div className={styles.text}>
              Spyro is a powerful landing pages builder WP theme that lets you build high converting landing pages using its specially crafted modules clubbed inside.
              </div>
              <MyButton title='Explore Now' type='button'/>
            </div>
          </div>
          <div className={styles.imgBlock}>
            <img src={ImgBanner} alt='Roket' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;