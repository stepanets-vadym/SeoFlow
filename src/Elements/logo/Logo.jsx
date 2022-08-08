import { Link } from "react-router-dom";
import styles from './Logo.module.scss'

const Logo = ({text}) => {

  
  return (
    <Link to='/' className={styles.logo}>
      {text}
    </Link>
  );
};

export default Logo;