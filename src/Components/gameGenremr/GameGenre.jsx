import global from '../../styles/global/global.module.scss';
import styles from './GameGenre.module.scss';

const GameGenre = ({ genre }) => {
  return <span className={styles.GameGenre}>{genre}</span>;
};

export default GameGenre;
