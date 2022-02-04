import React,{useState} from 'react';
import './Portafolio.css';
import { Button } from 'react-bootstrap';
// Imagenes
import Bios1 from '../../assets/Modal/BIOS/Bios_1.png'
import Bios2 from '../../assets/Modal/BIOS/Bios_2.png'
import Bios3 from '../../assets/Modal/BIOS/Bios_3.png'
import Bios4 from '../../assets/Modal/BIOS/Bios_4.png'
import Bios5 from '../../assets/Modal/BIOS/Bios_5.png'
import Bios6 from '../../assets/Modal/BIOS/Bios_6.png'
import Bios7 from '../../assets/Modal/BIOS/Bios_7.png'
import Bios8 from '../../assets/Modal/BIOS/Bios_8.png'
import Bios9 from '../../assets/Modal/BIOS/Bios_9.png'
import Bios10 from '../../assets/Modal/BIOS/Bios_10.png'
import Bios from '../../assets/card1.jpg'
import Culture from '../../assets/cultura.png'
import Cultura_1 from '../../assets/Modal/Cultura/Cultura_1.png'
import Cultura_2 from '../../assets/Modal/Cultura/Cultura_2.png'
import Cultura_3 from '../../assets/Modal/Cultura/Cultura_3.png'
import Cultura_4 from '../../assets/Modal/Cultura/Cultura_4.png'
import Cultura_5 from '../../assets/Modal/Cultura/Cultura_5.png'
import Cultura_6 from '../../assets/Modal/Cultura/Cultura_6.png'
import Cultura_7 from '../../assets/Modal/Cultura/Cultura_7.png'
import Cultura_8 from '../../assets/Modal/Cultura/Cultura_8.png'
import Cultura_9 from '../../assets/Modal/Cultura/Cultura_9.png'
import Cultura_10 from '../../assets/Modal/Cultura/Cultura_10.png'

// SVG
import Css from '../../assets/Logos/css.svg'
import ReactJs  from '../../assets/Logos/react.svg'
import Javascript  from '../../assets/Logos/javascript.svg'
import Bootstrap  from '../../assets/Logos/bootstrap.svg'
import Html  from '../../assets/Logos/html.svg'
import Material  from '../../assets/Logos/material.svg'
import Git  from '../../assets/Logos/git.svg'
import GitHub   from '../../assets/Logos/github.svg'
import  Redux  from '../../assets/Logos/redux.svg'
import   Semantic   from '../../assets/Logos/semantic.svg'


import ModalPortafolio from '../Modal/Modal'
const Portafolio = () => {
    const [show, setShow]= useState(false); 
    const [show1, setShow1] = useState(false); 
    const [show2, setShow2] = useState(false); 
 
  const handleOpen = (e) => setShow(true); 
   const handleOpen1 = (e) => setShow1(true); 
  const handleOpen2 = (e) => setShow2(true);  

  const handleClose = (e) => setShow(false);
  const handleClose1 = (e) => setShow1(false);
  const handleClose2 = (e) => setShow2(false);

  console.log('semantic',Semantic);

  const Culture1 ={ 
    title:'Cultura',
    img:[Cultura_1,
        Cultura_2,
        Cultura_3,
        Cultura_4,
        Cultura_5,
        Cultura_6,
        Cultura_7,
        Cultura_8,
        Cultura_9,
        Cultura_10,
    ],
    description:'',
    tecnology:[
        Css,
        ReactJs,
        Semantic,
        Javascript,
        GitHub,
        Redux,
        Material
    ] 
}
  const BIOS ={ 
    title:'BIOS',
    img:[ Bios1,
        Bios2,
        Bios3,
        Bios4,
        Bios5,
        Bios6,
        Bios7,
        Bios8,
        Bios9,
        Bios10,
    ],
    description:' Portal Web dessarrollada en React, React-Bootstrap para la empresa BIOS servicios informaticos',
    tecnology:[
        Css,
        ReactJs,
        Bootstrap,
        Javascript,
        GitHub, 
    ],
    
   
}


  return <div>
      <div  className="portafolio-container">
          <div className="title-portafolio">
              <h1 >
                  Portafolio
              </h1>
              <p>
                  Estos son algunos de mis proyectos finalizados
              </p>
          </div>
          <div className="contenedor-cards">
              <div className="portafolio-card shadow" onClick={handleOpen} >
                 <div className="card-image">
                        <img src={Bios} className='portafolio-image'  alt="" />
                  </div>
                 <div className="card-content">
                     <h3>
                         BIOS
                     </h3>
                  <p>
                    pagina web dessarrollada en React, React-Bootstrap para la empresa BIOS servicios informaticos
                  </p>
                  <Button>Ver mas</Button>
                  </div>
              </div>
              <div className="portafolio-card shadow"  onClick={handleOpen1}>
                 <div className="card-image">
                 <img src={Culture} className='portafolio-image'  alt="" />
                  </div>
                 <div className="card-content">
                     <h3>
                         Cultura
                     </h3>
                  <p>
                    Sistema desarrollado en React, Material Semantic para la alcaldia de Medellin Colombia para el area de cultura 
                  </p>
                  <Button>Ver mas</Button>
                  </div>
              </div>
          </div>
         
      </div>
      <ModalPortafolio handleClose={handleClose} props={BIOS} show={show}/>
      <ModalPortafolio handleClose={handleClose1} props={Culture1} show={show1}/>
      <ModalPortafolio handleClose={handleClose2} show={show2}/>
  </div>;
};

export default Portafolio;
