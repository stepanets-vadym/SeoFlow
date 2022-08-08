import { useSelector } from 'react-redux';
import global from '../../styles/global/global.module.scss';

import CartMenu from 'Components/cartMenumr/CartMenu';
import styles from './CartBlock.module.scss';
import { BiCartAlt } from 'react-icons/bi';
import { calcTotalPrice } from 'types/utils';
import { useState } from 'react';
import ItemsInCart from 'Components/itemsInCartmr/ItemsInCart';

const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  return (
    <div className={styles.CartBlock}>
    <ItemsInCart quantity={items.length} />
      <BiCartAlt size={25} className={styles.icon} onClick={()=> setIsCartMenuVisible(!isCartMenuVisible)} />
      {totalPrice > 0 ? (
        <span className={styles.totalPrice}> {totalPrice} uah</span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={() => null} />}
    </div>
  );
};

export default CartBlock;
