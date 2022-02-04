import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
const Carrousel = (props) => {
    console.log('carousel',props);
  return <div>
<Carousel variant="dark">

     {props.props.img.map((prop, i)=>{
         console.log(prop);
    return <Carousel.Item>
    <img src={prop} style={{height:'90%', width:'100%'}} alt="" />

</Carousel.Item>
    })}
  
  

</Carousel>
  </div>;
};

export default Carrousel;
