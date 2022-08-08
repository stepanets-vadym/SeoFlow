

// Components & elements
import wave from '../assets/img/Waves/bottom-deep-darck-wave.png';
import Contact from 'Components/contact/Contact';
import GetInTouch from 'Components/getInTouch/GetInTouch';


// Style
import global from '../styles/global/global.module.scss'


const Conatcts = () => {
  return (
    <>
      <GetInTouch/>
      <div className={global.waves}> 
        <img src={wave} alt='wave' />
      </div>
      <Contact/>
      {/* <Map/> */}
    </>
  );
};

export default Conatcts;
