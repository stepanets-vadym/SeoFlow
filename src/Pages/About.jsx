import Works from "../Components/works/Works";
import Team from "../Components/team/Team";
import Comment from "Components/comment/Сomment";
import wave from '../assets/img/Waves/bottomDarkWave.png';


import global from '../styles/global/global.module.scss'

const About = () => {
  return (
    <>
      <Works/>
      <div className={global.waves}> 
        <img src={wave} alt='wave' />
      </div>
      <Team/>
      <Comment/>
    </>
  );
};

export default About;