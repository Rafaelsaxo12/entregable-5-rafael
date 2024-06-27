import React, { useRef } from 'react'
import { setTrainer } from '../store/slice/trainer.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './styles/homePage.css';

const HomePage = () => {

  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  
  const textInput = useRef();

  const handleSumit = (event) => {
    event.preventDefault();
    dispatch(setTrainer(textInput.current.value.trim()));
    textInput.current.value = '';
    navigate('/pokedex');
  }


  return (
    <div className='homepage'>
      <figure className='homepage__title'>
        <img src="../../../assets/pokedex.png" alt="pokedex image" />
      </figure>
      <h2 className='homepage__subtitle'>Hi trainer!</h2>
      <p className='homepage__p'>to star, give me your name</p>
      <form className='homepage__form' onSubmit={handleSumit}>
        <input className='homepage__form' ref={textInput} type="text" placeholder='Your name...'/>
        <button className='homepage__button'>Start</button>
      </form>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default HomePage