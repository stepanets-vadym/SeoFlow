

// Components & elements
import Conversion from "Components/conversion/Conversion";
import Servises from "Components/servises/Servises";
import wave from '../assets/img/Waves/bottomWave.png';




// Style
import global from '../styles/global/global.module.scss'

const Benefits = () => {
  return (
    <>
      <Conversion/>
      <div className={global.waves}> 
        <img src={wave} alt='wave' />
      </div>
      <Servises/>

    </>
  );
};

export default Benefits;
