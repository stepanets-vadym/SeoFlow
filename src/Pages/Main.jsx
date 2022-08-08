// React

// Components & elements
import Banner from 'Components/banner/Banner';
import Info from 'Components/info/Info';
import wave from '../assets/img/Waves/bottomWave.png';

// Style
import global from '../styles/global/global.module.scss'


const MainPage = () => {
  return (
    <>
      <Banner />
      <div className={global.waves}> 
        <img src={wave} alt='wave' />
      </div>
      <Info/>
      
    </>
  );
};

export default MainPage;
