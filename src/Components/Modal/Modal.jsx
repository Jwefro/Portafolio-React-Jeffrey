import React,{useState} from 'react';
import { Modal,Button, Col } from 'react-bootstrap';
import Carrousel from '../Carrousel/Carrousel';
const ModalPortafolio = ({handleClose,show,props}) => {
 console.log('aver estos props',props);
  return <div>
      <Modal   size="lg" show={show} onHide={handleClose} >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props?.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Carrousel props={props} />
      </Modal.Body>
      <Modal.Footer style={{display:'flex', justifyContent:'space-between'}}>
       <div  style={{width:'80%',display:'flex',justifyContent:'start', alignItems:'center',textAlign:'center'}}>
       <h6 style={{alignItems:'center',textAlign:'center',margin:0}} >Tecnoligias utilizadas:</h6>
        {props?.tecnology?.map((svg,i)=>{
         return <div style={{marginLeft:15}}><img src={svg} style={{height:'25px',width:25}} alt="" /></div> 
        })} 
       </div>
        <Button onClick={handleClose}>Cerrar</Button>
      </Modal.Footer>
      </Modal>
  </div>;
};

export default ModalPortafolio;
