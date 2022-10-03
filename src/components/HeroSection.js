import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import background from '../srcimages/me.jpg'

function HeroSection() {
  return (
    <div className='hero-container' style={{ backgroundImage: `url(${background})` }}>
      <h1>Hi! I'm Anna.</h1>
      <p>Welcome to my online space.</p>
      {/*<div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
  </div>*/}
    </div>
  );
}

export default HeroSection;
