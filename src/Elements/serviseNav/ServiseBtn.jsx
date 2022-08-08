import Icon from '../icon/Icon';
import styles from './ServiseBtn.module.scss';

const ServiseBtn = ({ data }) => {
  return (
    <>
      <div className={styles.icon}>
        <Icon name={`${data.iconName}`} />
      </div>
      <span className={styles.text}>{data.title}</span>
      <div className={styles.box}>

      </div>
    </>
  );
};

export default ServiseBtn;
