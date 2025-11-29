import React from 'react'
import "./Hero.scss"
import Icon from '../Icon/Icon.jsx';

const Hero = () => {
  return (
      <div className='hero container--fluid bg-gray'>
          <h2 className='hero__title'>Ruta por Australia</h2>
          <p className='hero__subtitle'>Si te va la aventura, no te lo puedes perder</p>
          <button className='hero__button'>Más información</button>
          <div className='hero__sliderDots'>
              <div className='hero__dot hero__dot--active'></div>
              <div className='hero__dot'></div>
              <div className='hero__dot'></div>
          </div>
    </div>
  )
}

export default Hero