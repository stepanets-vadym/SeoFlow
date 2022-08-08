import classNames from 'classnames';
import styles from './Modal.module.scss';

const Modal = ({ active, setActive, name, messages }) => {
  let modalClass = active
    ? classNames(styles.modal, styles.active)
    : styles.modal;

  return (
    <div
      className={`${modalClass}`}
      onClick={() => {
        setActive(false);
      }}
    >
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.title}>{name}</div>
        <div className={styles.message}>{messages}</div>
      </div>
    </div>
  );
};

export default Modal;
