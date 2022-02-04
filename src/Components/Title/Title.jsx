import React from 'react';
import './Title.css'
import Upwork from '../../assets/Logos/upwork.png'
import Github from '../../assets/Logos/github.png'
import 'animate.css';
const Title = () => {
  return <div>
      <div className="container-title">
        <div className="test-title">
          <div className="title-container">
            <h1 className='title-h1 animate__animated animate__bounceIn animate__delay-2s '>
                Bienvenido a mi portafolio
             </h1>
             <div className="text-home animate__animated animate__fadeIn animate__delay-3s">
             <h2 data-text='Mi nombre es Jeffrey Ca'>Mi nombre es Jeffrey Ca</h2>
             </div>
             
             <h3 className='animate__animated animate__fadeIn animate__delay-2s'>
                Soy desarrollador Front-End
             </h3>
             <p className='icons-Home  animate__animated animate__fadeIn animate__delay-2s'> <a  target="_blank" rel="noreferrer" href="https://github.com/Jwefro">
             < img src={Github} className='font-icon' alt="" />
             </a>
             <a target="_blank" href="https://www.upwork.com/freelancers/~012e10555ffdc9bb2a" rel="noreferrer">
             <img src={Upwork} className='font-icon' alt="" /> 
             </a>
              </p>
          </div>
          </div>
      </div>
    </div>
};

export default Title;
