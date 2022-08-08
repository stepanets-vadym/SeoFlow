// Components & elements
import { StaticIconTypes } from 'types/StaticIcon';

// Style
import styles from './InfoCard.module.scss';
import global from '../../styles/global/global.module.scss'

const InfoCard = ({ mode, title, firstInfo, secondInfo }) => {
  let showIcon;
  switch (mode) {
    case StaticIconTypes.marker:
      showIcon = (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1024 1024'
          className='icon'
        >
          <path d='M512 0c219.932 0 398.222 160.455 398.222 358.4 0 323.214-398.222 665.6-398.222 665.6s-398.222-339.513-398.222-665.6c0-197.945 178.29-358.4 398.222-358.4z'></path>
          <path className={global.yellow} d='M711.111 398.222c0 109.966-89.145 199.111-199.111 199.111s-199.111-89.145-199.111-199.111c0-109.966 89.145-199.111 199.111-199.111s199.111 89.145 199.111 199.111z'></path>
        </svg>
      );
      break;

    case StaticIconTypes.notebook:
      showIcon = (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1024 1024'
          className='icon'
        >
          <path className={global.yellow} d='M768 614.4c-112.93 0-204.8 91.87-204.8 204.8s91.87 204.8 204.8 204.8 204.8-91.87 204.8-204.8-91.87-204.8-204.8-204.8zM768 989.867c-94.106 0-170.667-76.561-170.667-170.667s76.561-170.667 170.667-170.667 170.667 76.561 170.667 170.667-76.561 170.667-170.667 170.667z'></path>
          <path d='M870.4 802.133h-85.333v-85.333c0-9.438-7.629-17.067-17.067-17.067s-17.067 7.629-17.067 17.067v102.4c0 9.438 7.629 17.067 17.067 17.067h102.4c9.438 0 17.067-7.629 17.067-17.067s-7.629-17.067-17.067-17.067z'></path>
          <path d='M341.333 375.467h341.333v-170.667h-341.333v170.667zM392.533 238.933h238.933v34.133h-238.933v-34.133zM392.533 307.2h238.933v34.133h-238.933v-34.133z'></path>
          <path d='M512 819.2c0-141.158 114.842-256 256-256 23.671 0 46.49 3.482 68.267 9.523v-572.723h-785.067v1024h563.849c-62.413-46.729-103.049-121.003-103.049-204.8zM187.733 989.867h-102.4v-955.733h102.4v955.733zM307.2 170.667h409.6v238.933h-409.6v-238.933z'></path>
        </svg>
      );
      break;

    case StaticIconTypes.message:
      showIcon = (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1024 1024'
          className='icon'
        >
          <path d='M1023.218 395.203c-0.002-1.54-0.346-3.866-0.944-5.206-1.574-5.708-5.072-10.922-10.308-14.562l-146.584-101.896v-109.232c0-14.48-11.744-26.224-26.224-26.224h-168.638l-143.486-99.756c-8.968-6.242-20.874-6.268-29.87-0.052l-144.412 99.808h-167.9c-14.484 0-26.224 11.744-26.224 26.224v107.946l-147.296 101.802c-7.246 5.008-11.166 13.014-11.29 21.2-0.008 0.154-0.042 0.3-0.042 0.46l0.782 568.47c0.010 6.954 2.782 13.62 7.704 18.532 4.916 4.902 11.576 7.654 18.52 7.654 0.014 0 0.024 0 0.036 0l970.77-1.334c14.48-0.020 26.208-11.778 26.188-26.26l-0.782-567.574zM865.38 337.417l83.796 58.236-83.796 58.256v-116.492zM512.030 91.769l66.62 46.312h-133.624l67.004-46.312zM211.076 190.531h601.856v299.842l-202.072 140.484-82.388-63.908c-0.128-0.1-0.238-0.162-0.362-0.252-9.208-6.908-22.232-7.162-31.788 0.252l-82.986 64.37-202.26-139.786v-301.002zM158.628 336.007v119.28l-86.292-59.638 86.292-59.642zM52.516 445.735l317.338 219.31-316.698 245.648-0.64-464.958zM103.75 937.819l408.648-316.968 407.182 315.846-815.83 1.122zM654.288 664.543l316.552-220.072 0.64 466.118-317.192-246.046z'></path>
          <path className={global.yellow} d='M689.54 295.427h-355.072c-14.48 0-26.224 11.744-26.224 26.224s11.744 26.224 26.224 26.224h355.072c14.484 0 26.224-11.744 26.224-26.224s-11.74-26.224-26.224-26.224z'></path>
          <path className={global.yellow} d='M689.54 431.791h-355.072c-14.48 0-26.224 11.744-26.224 26.224s11.744 26.224 26.224 26.224h355.072c14.484 0 26.224-11.744 26.224-26.224s-11.74-26.224-26.224-26.224z'></path>
        </svg>
      );
      break;
  }

  return (
    <div className={styles.card}>
      <div className={styles.icon}>{showIcon}</div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.text}>
        {firstInfo}
      </div>
      <div className={styles.text}>
        {secondInfo}
      </div>
    </div>
  );
};

export default InfoCard;
