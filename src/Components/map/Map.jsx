import classNames from 'classnames';

// Styles
import styles from './Map.module.scss';
import global from '../../styles/global/global.module.scss';


const Map = () => {
  
  return (
    <div className={styles.maps}>
      <div className={classNames(styles.wrapper, global.container)}>
        <h2 className={styles.title}>How you can find us</h2>
        <div className={styles.map} id='js-map'></div>
      </div>
    </div>
  );
};

export default Map;
