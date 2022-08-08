// Style
import GameCover from 'Components/gameCovermr/GameCover';
import GameGenre from 'Components/gameGenremr/GameGenre';
import { useSelector } from 'react-redux';
import global from '../../styles/global/global.module.scss';
import styles from './GamePage.module.scss';

const GamePage = () => {
  const game = useSelector((state) => state.game.currentGame);
  if (!game) return null;

  return (
    <div className={styles.GamePage}>
      <h1 className={styles.title}>{game.title}</h1>
      <div className={styles.content}>
        <div className={styles.left}>
          <iframe
            width='90%'
            height='400px'
            src={game.video}
            title='Youtube Video Player'
          ></iframe>
        </div>
        <div className={styles.right}>
          <GameCover image={game.image} />
          <p>{game.description}</p>
          <p className={styles.secondary}>Популярные метки этого продукта:</p>
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
          <div className={styles.buyGame}></div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
