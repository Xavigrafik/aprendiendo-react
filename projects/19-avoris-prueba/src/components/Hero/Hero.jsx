import React from 'react'
import "./Hero.scss"
import Icon from '../Icon/Icon.jsx';
import Button from '../Button/Button.jsx';

const Hero = () => {
  return (
      <div className='hero container--fluid bg-gray'>
          <h2 className='hero__title'>Ruta por Australia</h2>
          <p className='hero__subtitle'>Si te va la aventura, no te lo puedes perder</p>
          <Button className='hero__button' variant="primary" onDark={true}>Más información</Button>

          
<div className='hero__arrows-container'>
    <div className='hero__arrow hero__arrow--prev'>
        <Icon name="chevronleft" /> 
    </div>
    <div className='hero__arrow hero__arrow--next'>
        <Icon name="chevronright" />
    </div>
</div>
          <div className='hero__sliderDots'>
              <div className='hero__dot hero__dot--active'></div>
              <div className='hero__dot'></div>
              <div className='hero__dot'></div>
          </div>
    </div>
  )
}

export default Hero