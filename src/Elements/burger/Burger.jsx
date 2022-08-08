import Icon from 'Elements/icon/Icon';
import styles from './Burger.module.scss';

const Burger = ({open, callbackClick}) => {
 
 

  return (
    <div className={styles.burger}>
      <button
        type='button'
        className={styles.burgerBtn}
        onClick={() => callbackClick(!open)}
      >
        <Icon name={`#icon-${open ? 'cross' : 'menu'}`} />
      </button>
    </div>
  );
};

export default Burger;
