import Button from 'Components/buttonmr/Button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemFromCart, setItemInCart } from 'redux/cart/reduser';
import global from '../../styles/global/global.module.scss';
import styles from './GameBuy.module.scss';

const GameBuy = ({ game }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === game.id);
  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(game.id));
    } else {
      dispatch(setItemInCart(game));
    }
  };
  return (
    <div className={styles.GameBuy}>
      <span className={styles.price}> {game.price} uah </span>
      <Button
        type={isItemInCart ? 'secondary' : 'primary'}
        onClick={handleClick}
      >
        {isItemInCart ? 'Убрать из корзины' : 'В Корзину'}
      </Button>
    </div>
  );
};

export default GameBuy;
