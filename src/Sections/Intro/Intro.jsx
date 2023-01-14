import { useRef, useState } from 'react';
import { images } from '../../constants';
import { BsFillPlayFill, BsPause } from 'react-icons/bs';

import './Intro.scss';

const Intro = () => {
  const [play, setplay] = useState(true);
  const vidref = useRef()
  const handlevideo = () => {
    setplay(!play);
    play ? vidref.current.play() : vidref.current.pause() ;
  }
  return (
  <section className='intro app_bg'>
    <video loop muted ref={vidref}>
      <source src={images.meal} type='video/mp4'/>
    </video>
    <div className='buttons' onClick={handlevideo}>
    { play ? <BsFillPlayFill /> : <BsPause /> }
    </div>
  </section>
  )
};

export default Intro;
