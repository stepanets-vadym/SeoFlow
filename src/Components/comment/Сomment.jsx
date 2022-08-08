// React
import classNames from 'classnames';

// Components & elements
import Jonathan from 'assets/img/Person/Jonathan.png';
import Diana from 'assets/img/Person/Diana.png';

// Style
import global from '../../styles/global/global.module.scss';
import styles from './Comment.module.scss';

// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Comment = () => {
  return (
    <div className={styles.comment}>
      <div className={classNames(styles.wrapper, global.container)}>
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}

        >
          <SwiperSlide>
            <div className={styles.block}>
              <h3 className={styles.title}>What client saying</h3>
              <div className={styles.text}>
                ” I really can recommend this theme, because it’s coded very
                well and with the Webflow page builder it’s really easy to build
                your own website! Also it’s updated regularly and new functions
                are added! “
              </div>
              <div className={styles.person}>
                <div className={styles.image}>
                  <img src={Jonathan} alt='alt' />
                </div>
                <div className={styles.name}>Lauren Nunnally</div>
                <div className={styles.position}>Director of Support</div>
              </div>
              <div className={styles.page}>Slide 1 of 2</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.block}>
              <h3 className={styles.title}>What client saying</h3>
              <div className={styles.text}>
                ” I really can recommend this theme, because it’s coded very
                well and with the Webflow page builder it’s really easy to build
                your own website! Also it’s updated regularly and new functions
                are added! “
              </div>
              <div className={styles.person}>
                <div className={styles.image}>
                  <img src={Diana} alt='alt' />
                </div>
                <div className={styles.name}>Lauren Nunnally</div>
                <div className={styles.position}>Director of Support</div>
              </div>
              <div className={styles.page}>Slide 2 of 2</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Comment;
