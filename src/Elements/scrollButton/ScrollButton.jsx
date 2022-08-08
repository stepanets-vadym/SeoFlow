import classNames from 'classnames';
import Icon from 'Elements/icon/Icon';
import { useCallback, useEffect, useState } from 'react';
import styles from './ScrollButton.module.scss';
import Scroll from 'react-scroll';

const ScrollButton = () => {
  // let Scroll = require('react-scroll');
  let scroll = Scroll.animateScroll;

  
  const [y, setY] = useState(window.scrollY);
  const [showBtn, setshowBtn] = useState('');
  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > 46) {
        setshowBtn(styles.showBtn);
      } else if (y < 46) {
        setshowBtn('');
      }
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
    <button
      type='button'
      onClick={() => {
        // window.scrollTo(0, 0);
        scroll.scrollToTop(0);
      }}
      className={classNames(styles.button, `${showBtn}`)}
    >
      <span>
        <Icon name={'#icon-Arrow'} />
      </span>
    </button>
  );
};

export default ScrollButton;
