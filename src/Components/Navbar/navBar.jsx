import React from 'react';
import './navBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  {faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavBar = () => {
  return <div>
      <div className='Navv'>
      <nav className="navbar  bg-dark">
            <input type="checkBox" id="check"/>
              <label for="check" className="fabars">
              <FontAwesomeIcon icon={faBars} />

              </label>
            
              
        <ul className="nav-menu">
          <li className="nav-item ">
          <a className='a' href='http://localhost:3000/#Home'>
          <span to="/home" className="nav-link " >Inicio</span>
          </a>
            
          </li>
          <li className="nav-item">
          <a className='a' href='http://localhost:3000/#AboutMe'>
            <span to="/servicios" className="nav-link ">Sobre mi</span>
          </a>
            
          </li>
          <li className="nav-item">
            <a className='a' href='http://localhost:3000/#Skills'>
               <span to="/productos"className="nav-link ">Habilidades</span>
            </a>
           
          </li>
          <li className="nav-item">
            <a  className='a' href="http://localhost:3000/#Portafolio">
              <span to="/sobreNosotros"className="nav-link ">Portafolio</span>
            </a>
            
          </li>
          <li className="nav-item" >
           <a className='a' href="http://localhost:3000/#Contacto">
            <span className="nav-link ">Contactos</span>

        </a>
          </li>
        </ul>
            </nav>
      </div>
  </div>;
};

export default NavBar;
