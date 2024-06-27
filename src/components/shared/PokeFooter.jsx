import React from 'react';
import './styles/pokeFooter.css';

const PokeFooter = () => {
  return (
  <div className='footer'>
    <div className='pokefooter'>
      <div className='pokefooter__red'>
      </div>
      <div className='pokefooter__black'>
          <div className='pokefooter__outcircle'>
              <div className='pokefooter__incircle'></div>
          </div>
      </div>
    </div>
    <div>
      <img src="https://www.gamereactor.es/media/33/_1813333b.jpg" alt="pikachu image" />
    </div>
  </div> 
  )
}

export default PokeFooter