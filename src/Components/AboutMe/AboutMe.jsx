
import React from 'react';
import { Row,Col,Button } from 'react-bootstrap';
import './AboutMe.css'
const AboutMe = () => {
  return <div>
      <div className="aboutMe-container">
            <Row className='aboutMe '>
                <div  className='aboutMe-text shadow ' >
                    <div className="content-Center">
                <div className="content-aboutMe">
                    <h2 >
                        Sobre mi
                    </h2>
                    <div className="center-text">
                    <span>
                    Desarrollador web, apasionado por el avance tecnológico y la programación. Actualmente poseo 2 títulos universitarios, los cuales son: Técnico Superior Universitario en Informatica e Ingeniero en Informática. Tengo 23 años de edad, con conocimiento en el desarrollo de landing page, websites y sistemas web. Siempre atento en seguir adquiriendo conocimiento para crecer personal y profesionalmente, de tal forma que pueda ofrecer un servicio completo y de calidad.
                    </span>
                    </div>
                    <Button className='button-aboutMe mt-5' >Descargar CV</Button>
                </div>
                </div>
                </div>
                <div className='aboutMe-image'>

                </div>
            </Row>
      </div>
      <div id='Skills' className=""></div>
  </div>;
};

export default AboutMe;
