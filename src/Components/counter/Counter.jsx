import { useState } from 'react';
import styles from './Counter.module.scss';

const Counter = () => {
  const [count, setCount] = useState(0);
  

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <b>Число:</b>
          <span> {count}</span>
        </div>
        {/* Button */}
        <button type='button' onClick={() => {setCount(count + 1)}}>
          <span> Додати число</span>
        </button>
      </div>
    </>
  );
};

export default Counter;
