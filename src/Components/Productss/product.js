import React,{Component} from 'react';
import '../index.css';
import {Consumer} from '../../contextapi'
import {Link} from 'react-router-dom';
class singleProduct extends Component{
render(){
    const {id,image,name,model,features,price,inCart} = this.props.Product;
   
    return(
      
        <div className="phonecard">
            <Consumer>
           {(value)=>(
    <div className="cards">
  <Link to="/Details">
  <img src={image} id="phoneimages" onClick={()=>{value.setDetailpage(id)}}/>
  </Link>
<h5 id="phonename">{name} {model}</h5>
<div id="ram">RAM: {features.map(feat=>{return(feat.ram)})}</div>
<div id="front">Front Camera: {features.map(feat=>{return(feat.front_camera)})}</div>
<div id="back">Back Camera: {features.map(feat=>{return(feat.back_camera)})}</div>
<div id="phoneprice"><b>PRICE</b>: {price}</div>
<button className="cartbutton" disabled={inCart?true:false} onClick={()=>{value.addtocart(id);value.openmodal(id)}}>
{inCart?<p id="addedcart"><i className="fas fa-plus"></i> ADDED TO CART</p>:<i className="fas fa-cart-plus"> ADD TO CART</i>}
</button>
  </div>
                )}
      
        </Consumer>
        </div>
  
   
    )
}

}

export default singleProduct; 