import global from '../../styles/global/global.module.scss';
import styles from './CartItem.module.scss';

const CartItem = ({
  title, 
  price, 
  id
 }) => {
  
  return  (
    <div className={styles.CartItem}>
      <span>
        {title}
      </span>
      <div className={styles.price}>
        <span>{price} uah</span>
      </div>
    </div>
  )
};

export default CartItem;