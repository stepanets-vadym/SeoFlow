import classNames from 'classnames';
import global from '../../styles/global/global.module.scss';
import styles from './Button.module.scss';
import './button.css';

const Button = ({ onClick, type, children, size = 's' }) => {
  const btnClass = classNames({
    btn: true,
    'btn--secondary': type === 'secondary',
    'btn--primary': type === 'primary',
    'btn--small': size === 's',
    'btn--medium': size === 'm',
  });
  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
