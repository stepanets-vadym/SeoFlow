import global from '../../styles/global/global.module.scss';
import styles from './GameCover.module.scss';

const GameCover = ({image = ''}) => {
  return (
    <div className={styles.GameCover} style={{backgroundImage: `url(${image})`}} />
  );
};

export default GameCover;