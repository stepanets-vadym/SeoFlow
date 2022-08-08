import React from 'react';
import classNames from 'classnames';
import { ButtonTypes } from '../../types/Button';
import styles from './Mybutton.module.scss';

const MyButton = ({ title, type, mode = ButtonTypes.black, disabled }) => {
  let buttonClass;
  switch (mode) {
    case ButtonTypes.yellow:
      buttonClass = styles.yellowBtn;
      break;

    case ButtonTypes.small:
      buttonClass = styles.menuBtn;
      break;

    case ButtonTypes.banner:
      buttonClass = styles.bannerBtn;
      break;

    case ButtonTypes.pricing:
      buttonClass = styles.pricingBtn;
      break;
    default: {
      buttonClass = styles.blackBtn;
    }
  }
  return (
    <button
      type={type}
      className={classNames(styles.button, buttonClass)}
      disabled={disabled ? disabled : null}
      
    >
      <span>{title}</span>
    </button>
  );
};

export default MyButton;
