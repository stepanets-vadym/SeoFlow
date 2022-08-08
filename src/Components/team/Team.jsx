// React
import classNames from 'classnames';

// Components & elements
import Jonathan from 'assets/img/Person/Jonathan.png';
import Bruce from 'assets/img/Person/Bruce.png';
import James from 'assets/img/Person/James.png';
import Diana from 'assets/img/Person/Diana.png';
import Anthony from 'assets/img/Person/Anthony.png';
import Adam from 'assets/img/Person/Adam.png';

// Style
import global from '../../styles/global/global.module.scss';
import styles from './Team.module.scss';

const Team = () => {
  return (
    <div className={styles.team}>
      <div className={classNames(styles.wrapper, global.container)}>
        <h2 className={styles.title}>Marketing Team</h2>
        <h3 className={styles.subtitle}>
          The most wonderful people our company
        </h3>
        <div className={styles.block}>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={Jonathan} alt='alt' />
            </div>
            <div className={styles.info}>
              <div className={styles.name}>Jonathan Kent</div>
              <div className={styles.position}>SEO Manager</div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={Bruce} alt='alt' />
            </div>
            <div className={styles.info}>
              <div className={styles.name}>Bruce Wayne</div>
              <div className={styles.position}>Campaign Planner</div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={James} alt='alt' />
            </div>
            <div className={styles.info}>
              <div className={styles.name}>James Brown</div>
              <div className={styles.position}>Social Media Executive</div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={Diana} alt='alt' />
            </div>
            <div className={styles.info}>
              <div className={styles.name}>Diana Prince</div>
              <div className={styles.position}>Marketing Expert</div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={Anthony} alt='alt' />
            </div>
            <div className={styles.info}>
              <div className={styles.name}>Anthony Jones</div>
              <div className={styles.position}>SEO Executive</div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={Adam} alt='alt' />
            </div>
            <div className={styles.info}>
              <div className={styles.name}>Adam Evans</div>
              <div className={styles.position}>Graphic Designer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
