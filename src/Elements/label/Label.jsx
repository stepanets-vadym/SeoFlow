import styles from './Label.module.scss';

const Label = ({ text, type, name, placeholder, onChange, onBlur, errorMessage}) => {
  return (
    <label className={styles.label}>
      <span className={styles.labelTitle}>{text}</span>
      <input
        className={styles.input}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      <div className={styles.errorMessage}>
        {errorMessage}
      </div>
    </label>
  );
};

export default Label;
