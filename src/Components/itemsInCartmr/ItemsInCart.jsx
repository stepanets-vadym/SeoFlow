import global from '../../styles/global/global.module.scss';
import styles from './ItemsInCart.module.scss';

const ItemsInCart = ({ quantity = 0 }) => {
  
  return quantity > 0 ? (
    <div className={styles.ItemsInCart}>
      {quantity}
    </div>
  ): null 
};

export default ItemsInCart;