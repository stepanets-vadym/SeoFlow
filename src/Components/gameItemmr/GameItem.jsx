import classNames from 'classnames';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

import GameBuy from 'Components/gameBuymr/GameBuy';
import GameCover from 'Components/gameCovermr/GameCover';
import GameGenre from 'Components/gameGenremr/GameGenre';

import global from '../../styles/global/global.module.scss';
import styles from './GameItem.module.scss';
import { setCurrentGame } from 'redux/games/reduser';

const GameItem = ({ game }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentGame(game));
    navigate(`/app/${game.title}`);
  };
  return (
    <div className={styles.GameItem} onClick={handleClick}>
      <GameCover image={game.image} />
      <div className={styles.details}>
        <span className={styles.title}>{game.title}</span>
        <div className={styles.genre}>
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
        </div>
        <div className={styles.buy}>
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  );
};

export default GameItem;
