import React from 'react';
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import {Link} from 'react-router-dom';

const Slideshow = () =>{
  const settings = {
  arrows:false,
  slidesToShow:1,
  slideToScroll:1
  };
  const Images = [
    {id:1,pic:"https://img1.gadgetsnow.com/gd/imgbn/Realme-Smartphone-s-Latest-12th-Aujust_02.jpg"},
    {id:2,pic:"https://st1.bgr.in/wp-content/uploads/2019/06/flipkart-bonanza.jpg"},
    {id:3,pic:"https://images.freekaamaal.com/store_desc_images/1537253332.jpg"}
  ]
  return(
   
    <div className="SlideWrapper">
    <Slider {...settings}>
      {Images.map((pic)=>{
        return( 
        <div  key={pic.id}>
        <img src={pic.pic} width="100%" height="500px"/>
        </div>
          )

      })}
    </Slider>
   
    </div>
   
  )
}

export default Slideshow;

