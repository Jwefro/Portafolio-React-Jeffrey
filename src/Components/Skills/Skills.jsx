import React from 'react';
import { Row,Col } from 'react-bootstrap';
import WOW from 'wowjs' 
// Image SVG
import  {ReactComponent as Css}  from '../../assets/Logos/css.svg'
import  {ReactComponent as ReactJs }  from '../../assets/Logos/react.svg'
import  {ReactComponent as Javascript }  from '../../assets/Logos/javascript.svg'
import  {ReactComponent as Bootstrap }  from '../../assets/Logos/bootstrap.svg'
import  {ReactComponent as Html }  from '../../assets/Logos/html.svg'
import  {ReactComponent as Material }  from '../../assets/Logos/material.svg'
import  {ReactComponent as Git }  from '../../assets/Logos/git.svg'
import  {ReactComponent as GitHub }  from '../../assets/Logos/github.svg'
import  {ReactComponent as Redux }  from '../../assets/Logos/redux.svg'
import  {ReactComponent as Semantic }  from '../../assets/Logos/semantic.svg'




import './Skills.css';
const Skills = () => {

    new  WOW.WOW().init(); 

  return <div>
      <div  className="skills-Container">
          <div className="skills-title"
          > 
           <h1>Habilidades</h1>
           
           </div>
           <div className="skills-title"
          > 
                <p>Estas son las Tecnologias que actualmente tengo conocimientos como desarrolador web</p>
           
           </div>

        
          <div className='Row-Skill'> 
            <Col xs={2} className="Col-Skill shadow wow  animate__animated animate__bounce" data-wow-duration="2s" data-wow-delay="5s"
             data-wow-offset="10"> 
            <Css className='skill-image' />
            <div className="div-Skill">
           <h5>Css</h5>
            </div>
            </Col>
            <Col xs={2} className='Col-Skill shadow wow  animate__animated animate__bounce' data-wow-duration="2s" data-wow-delay="5s"
             data-wow-offset="10" >
                <ReactJs className='skill-image'/>
                <div className="div-Skill">
           <h5>React</h5>
            </div>
            </Col>
            <Col xs={2} className='Col-Skill shadow wow animate__animated animate__bounce' data-wow-duration="2s" data-wow-delay="5s"
             data-wow-offset="10">
                <Javascript className='skill-image'/>
                <div className="div-Skill">
           <h5>JavaScript</h5>
            </div>
            </Col>
            <Col xs={2} className='Col-Skill shadow wow animate__animated animate__bounce' data-wow-duration="2s" data-wow-delay="5s"
             data-wow-offset="10">
                <Bootstrap className='skill-image'/>
                <div className="div-Skill">
           <h5>Bootstrap</h5>
            </div>
            </Col>
            <Col xs={2} className='Col-Skill shadow wow  animate__animated animate__bounce' data-wow-duration="2s" data-wow-delay="5s"
             data-wow-offset="10" >
                <Html className='skill-image'/>
                <div className="div-Skill">
           <h5>Html</h5>
            </div>
            </Col>
            <Col xs={2} className='Col-Skill shadow wow  animate__animated animate__bounce' data-wow-duration="2s" data-wow-delay="5s"
             data-wow-offset="10">
                <Material className='skill-image'/>
                <div className="div-Skill">
           <h5>Material</h5>
            </div>
            </Col>
            <Col xs={2} className='Col-Skill shadow wow animate__animated animate__bounce' data-wow-duration="2s" data-wow-delay="5s"
             data-wow-offset="10">
                <Git className='skill-image'/>
                <div className="div-Skill">
           <h5>Git</h5>
            </div>
            </Col>
            <Col xs={2} className='Col-Skill shadow wow animate__animated animate__bounce' data-wow-duration="2s" data-wow-delay="5s"
             data-wow-offset="10" >
                <Redux className='skill-image'/>
                <div className="div-Skill">
           <h5>Redux</h5>
            </div>
            </Col>
            <Col xs={2} className='Col-Skill shadow wow animate__animated animate__bounce' data-wow-duration="2s" data-wow-delay="5s"
             data-wow-offset="10" >
                <Semantic className='skill-image'/>
                <div className="div-Skill">
           <h5>Semantic</h5>
            </div>
            </Col>
            <Col xs={2} className='Col-Skill shadow wow animate__animated animate__bounce' data-wow-duration="2s" data-wow-delay="5s"
             data-wow-offset="10" >
                <GitHub className='skill-image'/>
                <div className="div-Skill">
           <h5>GitHub</h5>
            </div>
            </Col>
          </div>
      </div>
      <div id='Portafolio' className=""></div>
  </div>;
};

export default Skills;

