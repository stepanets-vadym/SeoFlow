import Button from 'Components/buttonmr/Button';
import CartItem from 'Components/cartItemmr/CartItem';
import { calcTotalPrice } from 'types/utils';
import global from '../../styles/global/global.module.scss';
import styles from './CartMenu.module.scss';

const CartMenu = ({ items, onClick }) => {
  return (
    <div className={styles.CartMenu}>
      <div className={styles.list}>
        {items.length > 0 ? items.map((game) => <CartItem key={game.title} price={game.price} title={game.title} id={game.id} />) : 'Корзина пуста'}
      </div>
      {items.length > 0 ? (
        <div className={styles.arrange}>
          <div className={styles.totalPrice}>
            <span> Итого :</span>
            <span>{calcTotalPrice(items)} uah</span>
          </div>
          <Button type={'primary'} size={'m'} onClick={onClick}>
            Оформить заказ
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default CartMenu;
