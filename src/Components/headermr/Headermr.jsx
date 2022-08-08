import classNames from 'classnames';
import CartBlock from 'Components/cartBlock/CartBlock';
import { Link } from 'react-router-dom';
import global from '../../styles/global/global.module.scss';
import styles from './Headermr.module.scss';

const Headermr = () => {
  return (
    <header className={styles.header}>
      <div className={classNames(styles.wrapper, global.container)}>
        <Link to='/' className={styles.title}>
          Game Store
        </Link>
      
      <div className={classNames(styles.wrapper, styles.btnwrapper)}>
        <CartBlock/>
      </div>
      </div>
    </header>
  );
};

export default Headermr;
